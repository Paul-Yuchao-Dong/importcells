/*
https://jupyter-notebook.readthedocs.io/en/latest/extending/frontend_extensions.html
*/

define([
    'base/js/namespace'
], function(
    Jupyter
) {
    function load_ipython_extension() {
      if (Jupyter.notebook.get_cells().length===1){
   //do your thing
        Jupyter.notebook.insert_cell_above('code', 0).set_text("from __future__ import division, print_function\nimport numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\nimport matplotlib as mpl\nimport seaborn as sns\nimport re\nfrom calendar import monthrange\nfrom pandas_datareader import data as web\nfrom pandas.tseries.offsets import DateOffset, Second, Minute, Hour, Day\n\nimport xlwings as xw\nfrom xlwings import Workbook, Range, Sheet\n\nimport plotly.graph_objs as pgo\nfrom plotly.offline import plot, init_notebook_mode, iplot, iplot_mpl\nimport pdb\nimport cufflinks as cf\n\npd.options.display.max_rows = 10\npd.set_option('max_columns', 50)\nsns.set(style='ticks', context='talk')");
        Jupyter.notebook.insert_cell_above('code', 1).set_text("import IPython\nthousand_c = lambda x: '{:,}'.format(x)\nthousands = lambda arg, p, cycle: p.text('{:,}'.format(arg))\nnp.set_printoptions(formatter={'float_kind': thousand_c, 'int_kind': thousand_c})\nclass IntFormatter(pd.formats.format.GenericArrayFormatter):\n    pd.set_option('display.float_format', thousand_c)\n    def _format_strings(self):\n        formatter = self.formatter or thousand_c\n        fmt_values = [formatter(x) for x in self.values]\n        return fmt_values\npd.formats.format.IntArrayFormatter = IntFormatter\nfrm = get_ipython().display_formatter.formatters['text/plain']\nfrm.for_type(int, thousands)\nfrm.for_type(float, thousands)\nnp.set_printoptions(precision = 4)");
        Jupyter.notebook.insert_cell_above('code', 2).set_text("from pivottablejs import pivot_ui");
      }
    }
    return {
        load_ipython_extension: load_ipython_extension
    };
});
