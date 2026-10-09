<h1 align="center">DistilKaggle</h1>
<p align="center"><strong>A Distilled Dataset of Kaggle Jupyter Notebooks</strong></p>
<p align="center">
  <strong>MSR 2024</strong><br>
  21st IEEE/ACM International Conference on Mining Software Repositories<br>
  <em>Data and Tool Showcase Track</em>
</p>

<p align="center">
  <a href="https://doi.org/10.5281/zenodo.10317389"><img src="https://img.shields.io/badge/Dataset-Zenodo-007D8A" alt="Dataset: Zenodo"></a>
  <a href="https://doi.org/10.1145/3643991.3644882"><img src="https://img.shields.io/badge/Paper-MSR%202024-3457A5" alt="Paper: MSR 2024"></a>
  <a href="https://zenodo.org/records/10317389"><img src="https://img.shields.io/badge/Data-CC%20BY%204.0-64748B" alt="Data license: CC BY 4.0"></a>
  <a href="https://github.com/ISE-Research/DistilKaggle/blob/main/LICENSE"><img src="https://img.shields.io/badge/Code-MIT-64748B" alt="Code license: MIT"></a>
</p>

<p align="center"><strong><a href="https://zenodo.org/records/10317389">Download the dataset on Zenodo →</a></strong></p>

## Overview

DistilKaggle is a curated dataset of publicly available Python Jupyter notebooks from Kaggle, spanning September 2015–October 2023. It brings together extracted code cells, Markdown cells, and notebook metrics to support research on notebook code quality, documentation, and structure.

The dataset was distilled from a collection of Kaggle notebooks identified using MetaKaggle metadata. The accompanying paper identifies 34 metrics, enabling researchers to select and analyze notebooks beyond the filters available on Kaggle.

**[DistilKaggle: A Distilled Dataset of Kaggle Jupyter Notebooks](https://doi.org/10.1145/3643991.3644882)**  
Mojtaba Mostafavi Ghahfarokhi, Arash Asgari, Mohammad Abolnejadian, and Abbas Heydarnoori  
*MSR 2024 · Data and Tool Showcase Track · Lisbon, Portugal*

## Contents

The DistilKaggle dataset consists of three main CSV files:

1. **[code.csv](https://zenodo.org/records/10317389/files/code.csv?download=1):** Contains over 12 million rows of code cells extracted from Kaggle notebooks. Each row is identified by the notebook's kernel ID and cell index, preserving its place within the source notebook.
2. **[markdown.csv](https://zenodo.org/records/10317389/files/markdown.csv?download=1):** Contains over 5 million rows of Markdown cells extracted from Kaggle notebooks. As in `code.csv`, each row includes the kernel ID and cell index.
3. **[notebook_metrics.csv](https://zenodo.org/records/10317389/files/notebook_metrics.csv?download=1):** Provides notebook features and metrics described in the accompanying paper for over 517,000 Python notebooks.

The code and Markdown cell dataset covers 542,051 notebooks, as reported in the paper. The metrics file covers a subset of these notebooks.

The files are available individually or together in **[DistilKaggle.tar.gz](https://zenodo.org/records/10317389/files/DistilKaggle.tar.gz?download=1)**. You do not need both the archive and the individual files.

## Usage

Researchers can use DistilKaggle to analyze notebook content, study relationships between code and documentation, or select notebooks based on their metrics without downloading the original notebook collection.

- Use `notebook_metrics.csv` for notebook-level analyses and filtering.
- Use `code.csv` and `markdown.csv` to examine cell content and ordering within notebooks.
- See the [example analysis](https://github.com/ISE-Research/DistilKaggle/blob/main/utility/2_application.ipynb) for predicting an author's Kaggle Performance Tier from notebook metrics.

## Quick start

Download `notebook_metrics.csv` into your working directory and install pandas:

```bash
pip install pandas
```

Load the metrics and inspect the available columns:

```python
import pandas as pd

metrics = pd.read_csv("notebook_metrics.csv")
print(metrics.shape)
print(metrics.head())
print(metrics.columns.tolist())
```

To explore a cell CSV without loading the whole file into memory, read a sample:

```python
code_sample = pd.read_csv("code.csv", nrows=1000)
print(code_sample.head())
```

### Repository structure

The downloadable dataset is hosted on Zenodo. This repository contains supporting metadata, processing scripts, and an example analysis.

| Path | Purpose |
| --- | --- |
| `0/`–`5/` | Directories organized by Kaggle Performance Tier, containing notebook metadata, download logs, and tier-specific processing scripts |
| [`utility/1_aggregate_dataset.py`](https://github.com/ISE-Research/DistilKaggle/blob/main/utility/1_aggregate_dataset.py) | Aggregates data across Performance Tiers |
| [`utility/2_application.ipynb`](https://github.com/ISE-Research/DistilKaggle/blob/main/utility/2_application.ipynb) | Example analysis predicting an author's Performance Tier from notebook metrics |

## Citation

If you use DistilKaggle in your research, please cite the accompanying paper:

```bibtex
@inproceedings{mostafavi-msr2024-DistilKaggle,
  author    = {Mostafavi Ghahfarokhi, Mojtaba and Asgari, Arash and
               Abolnejadian, Mohammad and Heydarnoori, Abbas},
  title     = {{DistilKaggle}: A Distilled Dataset of {Kaggle} {Jupyter} Notebooks},
  booktitle = {Proceedings of the 21st International Conference on Mining Software Repositories},
  series    = {MSR '24},
  year      = {2024},
  pages     = {647--651},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  location  = {Lisbon, Portugal},
  doi       = {10.1145/3643991.3644882},
  url       = {https://doi.org/10.1145/3643991.3644882}
}
```

The dataset is archived separately on Zenodo: **[10.5281/zenodo.10317389](https://doi.org/10.5281/zenodo.10317389)**.

## License and contact

- **Dataset:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), as specified in the [Zenodo record](https://zenodo.org/records/10317389).
- **Repository code:** [MIT License](https://github.com/ISE-Research/DistilKaggle/blob/main/LICENSE).

For questions about the dataset, contact [Mohammad Abolnejadian](mailto:mohammad.abolnejadian@gmail.com).
