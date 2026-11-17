#!/usr/bin/env python3
"""Archive NAAMSA PDFs in bounded concurrent batches, retaining URLs and hashes."""
import csv
import hashlib
import json
import pathlib
from concurrent.futures import ThreadPoolExecutor,as_completed
from urllib.request import Request,urlopen

ROOT=pathlib.Path("artifact")
ROOT.mkdir(exist_ok=True)
ROWS=json.loads(pathlib.Path("data/naamsa_batches/2012_2014_2016_2023_2024_sources.json").read_text())
def download(row):
    month,url=row["month"],row["url"]
    outfile=ROOT/"NAAMSA_reports"/month[:4]/("NAAMSA_"+month+".pdf")
    outfile.parent.mkdir(parents=True,exist_ok=True)
    r={"month":month,"url":url,"status":"FAILED","filename":"","bytes":0,"sha256":"","error":""}
    try:
        request=Request(url,headers={"User-Agent":"Mozilla/5.0","Accept":"application/pdf,*/*"})
        with urlopen(request,timeout=13) as response:
            data=response.read(12_000_000)
        if not data.startswith(b"%PDF-") or len(data)<1000:
            raise ValueError("Content not recognized as PDF")
        outfile.write_bytes(data)
        r.update({"status":"DOWNLOADED","filename":str(outfile.relative_to(ROOT)),"bytes":len(data),"sha256":hashlib.sha256(data).hexdigest()})
    except Exception as exc:
        r["error"]=str(exc)
    return r
with ThreadPoolExecutor(max_workers=8) as pool:
    futures={pool.submit(download,row):row for row in ROWS}
    records=[f.result() for f in as_completed(futures)]
records.sort(key=lambda row:row["month"])
with (ROOT/"download_manifest.csv").open("w",newline="",encoding="utf-8") as f:
    writer=csv.DictWriter(f,fieldnames=["month","url","status","filename","bytes","sha256","error"])
    writer.writeheader();writer.writerows(records)
(ROOT/"README.txt").write_text("Archived original PDF bytes; manifest records source URL, month, SHA-256 and download failures. Passenger+LCV extraction and review are separate steps.\n")
for r in records:print(r["month"],r["status"],r["bytes"],r["error"][:80],flush=True)
print("COMPLETED",sum(r["status"]=="DOWNLOADED" for r in records),"of",len(records))
