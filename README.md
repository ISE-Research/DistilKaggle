# DistilKaggle project website

The public research site is https://ise-research.github.io/DistilKaggle/ . GitHub Pages is configured to serve the **root of the `site` branch**. The `main` branch holds research code; its `site/index.html` is not the publishing source.

## Edit and preview

- Edit `index.html` for text, tables, links, authors, and citation.
- The original `static/css/bulma.min.css` provides the Academic Project Page / Nerfies template. Edit `static/css/index.css` only for template typography and dataset-specific figures, tables, and responsive controls.
- Edit `static/js/index.js` for metric filtering and copy buttons.
- The figures are in `static/images/`; `static/distilkaggle.bib` is the downloadable citation. Update the inline and downloadable BibTeX together.
- Run `python3 -m http.server 8765 --bind 127.0.0.1` from this directory and open http://127.0.0.1:8765/ . No build step is required.
- Publish reviewed changes to `site`; GitHub Pages rebuilds automatically. No website settings changes are required.

## Content sources and editorial decisions

Checked 2026-10-09.

1. Paper: https://doi.org/10.1145/3643991.3644882 . Author-posted full text: https://www.researchgate.net/publication/379986285_DistilKaggle_A_Distilled_Dataset_of_Kaggle_Jupyter_Notebooks . Used for author affiliation, 34 metric vocabulary, construction method, and the combined count (293,290 + 248,761 = 542,051).
2. Dataset release v1: https://zenodo.org/records/10317389 . Used for coverage period, approximate row counts, download links/sizes, CC BY 4.0, and contact address. The metrics file covers over 517,000 notebooks, not the full 542,051 cell collection.
3. Released CSV headers were sampled directly. `code.csv`: `kernel_id,cell_index,source,output_type,execution_count`. `markdown.csv`: `kernel_id,cell_index,source`. `current_kernel_version_id` exists in the extraction script but not these release headers. The metrics-file sample timed out, so the site does not claim a verified metrics CSV schema.
4. Repository main branch at commit `45e7c0a`: `0/utility/1_dataframe_generator.py`, `0/utility/4_notebook_metrics_generator.py`, and `utility/2_application.ipynb`. The metrics reference follows the paper's 34 entries, not the CSV's exact column names or implementation semantics. In particular, the code's AID aggregation differs from the paper's label. Consult source before analysis.
5. Figure 1 is a new HTML/CSS diagram summarizing the collection described in the paper, with coverage labels from Zenodo. It is not presented as an original paper image. Figures 2 and 3 are the **unaltered embedded PNG outputs** of cells 18 and 21 (zero-based) from the saved example notebook. The classification table reproduces cell 17's saved report; EAP importance follows cell 20. These outputs were not recomputed. They are not relabeled as the paper's exact figures/results.
6. The example imputes before splitting and operates on notebook-level samples. Its outputs are illustrative historical results, not a newly validated predictive benchmark. Target labels 0–5 are preserved without speculative tier names.
7. The CSVs retain source and selected metadata, not complete runtime environments or output payloads. The page avoids promising executable reproduction.

The social preview is a typographic graphic generated for this website. The favicon is an original geometric lettermark. The site retains template attribution and CC BY-SA 4.0 website licensing; the dataset and research code have separate licenses.

## Verify before publishing

Check desktop and narrow-mobile rendering, horizontal table scrolling, loaded figures, every navigation anchor, search and category filtering (including no results), the expandable result table, copy buttons, downloadable BibTeX, and local asset paths. Core content is HTML and remains available with JavaScript disabled. External resources should be checked against their authoritative records; do not download the multi-gigabyte dataset merely to test a link.

The original template's Bulma stylesheet is loaded directly. Unused template media and scripts are preserved in Git but are not loaded by this page. There are no carousel, tracking, video, or PDF-viewer scripts on the published page.
