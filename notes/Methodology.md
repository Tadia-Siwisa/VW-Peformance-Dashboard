# Calculations and revision notes

## 1. Scope and periods

All manufacturer and market counts measure domestic new vehicles sold, including passenger, light commercial and commercial vehicles. Exports are excluded. The market total includes Volkswagen Group SA.

The monthly sales chart includes January–October for each available year. Growth offers 2024 versus 2023, 2025 versus 2024, and 2026 versus 2025, comparing the same months. Market-share comparisons are October 2026 versus October 2025, not full-year or January–October shares.

## 2. Sales growth: how much did sales change?

Subtract the earlier count from the later count, then divide by the earlier count. Multiply by 100 to express the result as a percentage.

**Growth (%) = (later sales − earlier sales) / earlier sales × 100.**

For October VW sales: (6,515 − 6,221) / 6,221 × 100 = **4.7%** after rounding.

For January–October, add the ten monthly counts for each year first. Do not average the ten monthly growth rates: months have different sales volumes.

- VW: (54,915 − 52,609) / 52,609 × 100 = **4.4%**.
- Market, using the selected monthly sums: (554,292 − 493,386) / 493,386 × 100 = **12.3%**.

Excel stores rates as decimal fractions and displays them using a percentage format. The formula therefore omits the final multiplication by 100.

## 3. Market share: how much of the market did a manufacturer sell?

Divide a manufacturer's sales by the total market sales for the same month.

**Share (%) = manufacturer sales / total market sales × 100.**

For VW in October 2026: 6,515 / 61,890 × 100 = **10.5%** after rounding. October 2025: 6,221 / 56,051 × 100 = **11.1%**.

## 4. Share change: percentage points versus sales growth

Subtract the earlier unrounded share from the later unrounded share.

**Share change (percentage points) = later share (%) − earlier share (%).**

For VW: (6,515 / 61,890 − 6,221 / 56,051) × 100 = **−0.57 percentage points**. Calculate from the underlying counts before rounding; subtracting the displayed 10.5% and 11.1% gives a less precise result.

Chery's October sales increased from 2,210 to 2,754, an increase of **24.6%**. Its share moved from approximately 3.9% to 4.4%, a gain of **0.51 percentage points**. Sales growth uses the manufacturer's earlier sales as its denominator; share uses the whole market. These are different measures.

## 5. Everyone else and rankings

Everyone else = total market − Toyota − Suzuki − Volkswagen Group SA − Chery. October 2026: 61,890 − 14,495 − 7,292 − 6,515 − 2,754 = **30,834**.

This is an aggregate, not a single competitor. Named manufacturers are ordered by October 2026 sales. These totals cannot establish direct competition between individual models, customer switching, or causes of sales changes. Chery's outperformance claim applies only to the four named manufacturers in October.

## 6. Model calculations

The preserved model workbook contains source inputs and formulas. Where a 2025 January–October count was unavailable, it was compiled from full-year sales minus November and December. This assumes compatible reporting definitions and publication vintages; the workbook retains source-specific caveats. Model contribution divides the selected model count by the corresponding Group total. Other/unitemised Group sales is the Group total less the four shown models, not a separately reported model category.

Amarok's comparison remains provisional because the source baselines differ. Tiguan and Taigo totals are unavailable. See the model workbook and machine-readable model source record for the individual inputs and original links.

## 7. Revisions and why totals can differ

Manufacturer counts were taken from archived original-month naamsa flash reports, page 3, Total Local, using corrected editions where present in the archive. Later reports do not supply a fully revised monthly manufacturer series.

Market counts use the latest explicitly printed monthly values selected in the existing audit through October 2026. For example, October 2025 market sales were initially 55,956 and were later printed as 56,051 in the October 2026 report. March 2026 was initially 58,060 and later 58,064.

Consequently, manufacturer and market figures can come from different publication vintages. Market shares are indicative on that basis. We do not invent revised manufacturer counts or allocate unexplained revision differences to months.

| Year | Sum of selected January–October monthly market counts | Official January–October total in October 2026 report | Official total minus monthly sum |
|---|---:|---:|---:|
| 2025 | 493,386 | 493,427 | +41 |
| 2026 | 554,292 | 554,081 | −211 |

The growth chart uses the monthly sums to remain consistent with its plotted data. They must not be labelled official cumulative totals. The detailed revision record preserves the alternative observations and their source reports.

## 8. Evidence and remaining gaps

Report URLs and prior verification statuses are preserved from the existing dashboard audit dated 11 November 2026. They were not independently re-fetched during this export. February 2023 VW sales were previously checked through a search-indexed mirrored report rather than a direct naamsa PDF. The original audit records that distinction.

Historical growth views now use [2023–2024 market inputs](../data/Historical_growth_market_inputs.csv), extracted directly from the ten January–October 2024 naamsa flash PDFs on 11 November 2026. For 2024, each value is the current-month Industry Total Local; for 2023, it is the prior-year same-month Industry Total Local in the same report. This preserves a documented publication basis, not a fully revised historical series. Existing 2025–2026 inputs are unchanged. Consequently, the 2025-versus-2024 view also combines publication vintages. The existing growth Excel workbook covers 2025–2026; the additional historical inputs are provided in Excel-readable CSV. Historical VW counts remain those used in the monthly-sales workbook. For each selected pair, both VW and market growth are calculated as (later / earlier − 1) × 100. The insight panel remains specifically about 2026 versus 2025. No forecast is included. A future forecasting study would need adequate history, a simple benchmark, out-of-sample testing and an uncertainty range.
