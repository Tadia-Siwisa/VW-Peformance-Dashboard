# Volkswagen SA performance dashboard — supporting data

Independent analysis by Tadia Siwisa. Domestic new-vehicle sales; exports excluded. Data snapshot: 11 November 2026.

[Open the deployed dashboard](https://tadia-siwisa.github.io/VW-Peformance-Dashboard/).

## Excel files by dashboard section

These links are **direct Excel (.xlsx) downloads**, not GitHub code-preview pages. Each workbook contains only chart labels, month or category names, and numeric data. Report citations, methodology, data-cleaning records and verification details remain in the [master audit workbook](data/audit/VW_Domestic_Sales_Master_Audit_Verified_2023_2026.xlsx).

| Section | Excel file | Contents |
|---|---|---|
| Monthly sales | [Download monthly sales (.xlsx)](https://raw.githubusercontent.com/Tadia-Siwisa/VW-Peformance-Dashboard/main/data/charts/01_Monthly_VW_sales_2023-2026.xlsx) | Volkswagen Group SA domestic sales, January–October 2023–2026 |
| Model performance | [Download model sales (.xlsx)](https://raw.githubusercontent.com/Tadia-Siwisa/VW-Peformance-Dashboard/main/data/charts/02_Model_sales_2025-2026.xlsx) | Domestic model sales and numeric growth/group shares for 2025–2026; secondary-source model figures remain provisional |
| Growth | [Download year-on-year growth (.xlsx)](https://raw.githubusercontent.com/Tadia-Siwisa/VW-Peformance-Dashboard/main/data/charts/03_Growth_comparison_2024-2026.xlsx) | Separate worksheets for 2024 vs 2023, 2025 vs 2024 and 2026 vs 2025; plotted rates and underlying volumes |
| Market share | [Download October market share (.xlsx)](https://raw.githubusercontent.com/Tadia-Siwisa/VW-Peformance-Dashboard/main/data/charts/04_October_market_share_2025-2026.xlsx) | October 2025 and 2026 pie-chart values and numeric manufacturer comparison |

Open the chart's **Data sources** link on the dashboard to download the matching workbook. These chart files are convenient clean exports; [source verification and revision notes](data/audit/README.md) belong to the master audit rather than to each chart file.

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

The growth chart offers 2024 versus 2023, 2025 versus 2024, and 2026 versus 2025 for January–October. [Additional historical market inputs and report links](data/Historical_growth_market_inputs.csv) are supplied in Excel-readable CSV; the existing growth workbook covers 2025–2026. The historical publication basis is explained in the methodology. Market-share pies compare **October only**. The clean chart-specific growth workbook now includes all three selectable year comparisons.

Manufacturer counts retain their archived original-month publication basis. Market totals use selected later explicitly reported revisions. Shares therefore combine publication vintages and are indicative on that basis. Amarok has an unresolved baseline discrepancy; Tiguan and Taigo comparable model totals are unavailable. These limitations are retained rather than filled with estimates.

## Export log

11 November 2026: exported the existing dashboard dataset into four chart-aligned Excel files and preserved the original model workbook, source records and audit. Added plain-language calculations and direct report links. New workbook formulas were recalculated and checked against the dashboard inputs. Original PDFs were not re-fetched during this packaging step; prior verification status is preserved in the records.
