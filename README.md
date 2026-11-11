# Volkswagen SA performance dashboard — supporting data

Independent analysis by Tadia Siwisa. Domestic new-vehicle sales; exports excluded. Data snapshot: 11 November 2026.

[Open the dashboard](https://vw-performance-dashboard.tadia-siwisa.chatgpt.site). The dashboard currently requires owner access.

## Excel files by dashboard section

| Section | Excel file | Contents |
|---|---|---|
| Monthly sales | [01_Monthly_VW_sales_2023-2026.xlsx](data/01_Monthly_VW_sales_2023-2026.xlsx) | January–October VW monthly counts for 2023–2026, with report links and verification status |
| Model performance | [02_Model_sales_and_inputs.xlsx](data/02_Model_sales_and_inputs.xlsx) | Existing model calculations, source inputs and manufacturer data, preserved without modification |
| Growth | [03_Growth_comparison_2025-2026.xlsx](data/03_Growth_comparison_2025-2026.xlsx) | Monthly VW and market counts, formula-based year-on-year growth, January–October sums and report links |
| Market share | [04_October_market_share_2025-2026.xlsx](data/04_October_market_share_2025-2026.xlsx) | October counts, sales growth, market shares and percentage-point changes, calculated with Excel formulas |

Download an Excel file to open its sheets and formulas. Source inputs are numeric values; derived growth and shares use formulas.

## Conclusion and next steps

[Read the conclusion and recommended next investigation](notes/Conclusion_and_next_steps.md). Volkswagen’s sales increased, but growth trailed the wider market. This report closes with a focused investigation into the gap; forecasting is a separate future study.

## How the numbers were compiled

- [Methodology and worked examples](notes/Methodology.md)
- [Original source report links](sources/Reports.md)
- [Detailed source audit](sources/source-audit.html) — download and open in a browser
- [Original revision notes](notes/Original_revision_notes.md)
- [Machine-readable manufacturer and revision records](sources/naamsa-reconciliation.json)
- [Model source records](sources/model-sales-data.json)

## Coverage and limits

Manufacturer totals include passenger, light commercial and commercial vehicles. Volkswagen Group SA is a reporting group; individual VW models do not exhaust its total.

The growth chart offers 2024 versus 2023, 2025 versus 2024, and 2026 versus 2025 for January–October. [Additional historical market inputs and report links](data/Historical_growth_market_inputs.csv) are supplied in Excel-readable CSV; the existing growth workbook covers 2025–2026. The historical publication basis is explained in the methodology. Market-share pies compare **October only**.

Manufacturer counts retain their archived original-month publication basis. Market totals use selected later explicitly reported revisions. Shares therefore combine publication vintages and are indicative on that basis. Amarok has an unresolved baseline discrepancy; Tiguan and Taigo comparable model totals are unavailable. These limitations are retained rather than filled with estimates.

## Export log

11 November 2026: exported the existing dashboard dataset into four chart-aligned Excel files and preserved the original model workbook, source records and audit. Added plain-language calculations and direct report links. New workbook formulas were recalculated and checked against the dashboard inputs. Original PDFs were not re-fetched during this packaging step; prior verification status is preserved in the records.
