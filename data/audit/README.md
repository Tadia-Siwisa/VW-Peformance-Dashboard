# naamsa domestic sales verification (15 November 2026)

**Status:** 180 audited observations, **0 numeric discrepancies** against the cited naamsa Flash Report fields.

- [Verification ledger](naamsa_numeric_verification_2023_2026.csv): one source URL per observation, manufacturer/industry field, page, dashboard/workbook value, independently checked PDF value and comparison.
- [Audit manifest](verified_audit_manifest.json): exact SHA-256 of the verified Excel master workbook and important unresolved caveats.

## Master Excel workbook

**Source-of-truth domestic-sales audit file:** [VW_Domestic_Sales_Master_Audit_Verified_2023_2026.xlsx](VW_Domestic_Sales_Master_Audit_Verified_2023_2026.xlsx)

Uploaded to `main` and verified byte-for-byte against the local workbook via the Git blob hash and SHA-256 recorded in [the manifest](verified_audit_manifest.json). File size: 56,685 bytes.

This master is the baseline for **the currently audited domestic manufacturer and market figures**, including formulas and recorded publication differences. It is not an independent naamsa certification of the separate model-level figures, and the 2025/2026 monthly-vs-YTD market differences remain explicitly unresolved.

## Scope and limitations

- **Verified:** Volkswagen Group SA January–October domestic sales (2023–2026); total-industry local sales at their defined publication vintages; Volkswagen/Toyota/Suzuki/Chery monthly domestic sales (2025–2026).
- **Not naamsa-certified:** Polo Vivo, Polo, T-Cross and Amarok model-level totals; these were compiled from other automotive publications and remain provisional until separately verified.
- **Not included:** Polo Vivo model-specific exports.
- **Do not force reconciliation:** The selected monthly market series sums to 493,386 (2025) and 554,292 (2026), while the October 2026 Flash reports YTD totals of 493,427 and 554,081. Preserve the revision differences (+41 and -211) rather than allocating them to individual months.

Source PDF field: **Industry Total / Local** (PDF page 2) or **Manufacturer Total / Local** (PDF page 3). The 2023 market series deliberately uses comparative 2023 values reported in the 2024 monthly Flash Reports, not the originally published 2023 market values.
