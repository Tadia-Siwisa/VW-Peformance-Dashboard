# Volkswagen performance dashboard source

Exported from the latest published Sites source on 15 November 2026.
Source commit: `738e1204ee7f4545b3889f88b1b097bb21eb6d83` (published version 27).

## Files

- `dashboard/index.html`: dashboard structure and narrative.
- `dashboard/style.css`: desktop and mobile styling.
- `dashboard/app.js`: chart rendering, filters, KPI calculations and interactions.
- `dashboard/assets/`: images, source records and supporting data.
- `dashboard/model-sources.html`: readable model source page.
- `dashboard/02_Model_sales_and_inputs.xlsx`: downloadable model workbook.

This is a buildless static website. The HTML, CSS and JavaScript are its editable source; there is no separate framework source or build step.

## Run locally

From the repository root:

```sh
python -m http.server 8000 --directory dashboard
```

Open http://localhost:8000 in a browser. A local web server is recommended because the site loads bundled JSON files.

## Hosting

Any static web host can serve the `dashboard` directory. For GitHub Pages with GitHub Actions, use `dashboard` as the artifact directory. Hosting has not been enabled by this export; the existing ChatGPT Sites publication remains separate. Future GitHub edits will not automatically update the Sites publication.

## Scope

This is an unchanged export of the published website, not a new data verification or implementation of pending KPI requests. Existing source caveats and image attributions remain. Third-party images and logos retain their original rights; no new license is granted by this export.

The repository's existing data, notes and sources are preserved. No credentials, Git history, temporary previews or QA output files are included.
