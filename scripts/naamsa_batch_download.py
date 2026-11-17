#!/usr/bin/env python3
"""Download and preserve exactly the NAAMSA Flash Report PDFs in source_manifest.json.
No extracted observation is certified by this downloader. Every file is hashed.
"""
import csv
import hashlib
import json
import pathlib
import time
from urllib.request import Request, urlopen

ROOT=pathlib.Path("artifact")
ARCHIVE=ROOT/"NAAMSA_reports"
ARCHIVE.mkdir(parents=True,exist_ok=True)
SOURCES=json.loads(pathlib.Path("data/naamsa_batches/2025_2026_sources.json").read_text())
logs=[]
for row in SOURCES:
    month=row["month"]
    url=row["url"]
    outfile=ARCHIVE/month[:4]/("NAAMSA_"+month+".pdf")
    outfile.parent.mkdir(parents=True,exist_ok=True)
    status="FAILED"
    sha=""
    size=0
    error=""
    for attempt in range(3):
        try:
            req=Request(url,headers={"User-Agent":"Mozilla/5.0 (compatible; research archival download; source URL recorded)","Accept":"application/pdf,*/*"})
            with urlopen(req,timeout=45) as response:
                raw=response.read(12_000_000)
            if not raw.startswith(b"%PDF-") or len(raw)<1000:
                raise RuntimeError("Source response not a PDF, or unexpectedly short")
            outfile.write_bytes(raw)
            sha=hashlib.sha256(raw).hexdigest()
            size=len(raw)
            status="DOWNLOADED"
            break
        except Exception as exc:
            error=str(exc)
            if attempt<2:time.sleep(2*(attempt+1))
    logs.append({"month":month,"url":url,"status":status,"filename":str(outfile.relative_to(ROOT)) if status=="DOWNLOADED" else "","bytes":size,"sha256":sha,"error":error})
    print(month,status,size,error[:120],flush=True)
with (ROOT/"download_manifest.csv").open("w",newline="",encoding="utf-8") as f:
    w=csv.DictWriter(f,fieldnames=["month","url","status","filename","bytes","sha256","error"])
    w.writeheader()
    w.writerows(logs)
(ROOT/"README.txt").write_text(
    "Original downloaded NAAMSA Flash Report PDFs, organized by reporting month.\n"
    "Values must be extracted and verified against the local Passenger+LCV sections in each PDF.\n"
    "The CSV records URLs and SHA256 hashes; missing files remain explicitly FAILED.\n",encoding="utf-8")
print("Downloaded",sum(r["status"]=="DOWNLOADED" for r in logs),"of",len(logs),flush=True)
