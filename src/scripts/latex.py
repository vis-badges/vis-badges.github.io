import re
import pandas as pd

def escape_latex(text):
    """
    Escapes LaTeX special characters in the given text.
    """
    conv = {
        '\\': r'\textbackslash{}',
        '&': r'\&',
        '%': r'\%',
        '$': r'\$',
        '#': r'\#',
        '_': r'\_',
        '{': r'\{',
        '}': r'\}',
        '~': r'\textasciitilde{}',
        '^': r'\textasciicircum{}',
    }
    pattern = re.compile('|'.join(re.escape(key) for key in conv.keys()))
    return pattern.sub(lambda m: conv[m.group()], text)

def process_label_cell(cell):
    """
    If the cell is wrapped in one of our badge macros,
    only escape the content inside the braces.
    Otherwise, escape the entire cell.
    """
    pattern = r'^(\\(warningBadge|infoBadge|confirmationBadge))\{(.*)\}$'
    match = re.match(pattern, cell)
    if match:
        macro = match.group(1)  # e.g., \warningBadge
        content = match.group(3)
        escaped_content = escape_latex(content)
        return f"{macro}{{{escaped_content}}}"
    else:
        return escape_latex(cell)

def wrap_label(row):
    """
    Wrap the LABEL cell based on the value in the INTENT column.
    The badge macro is applied to the LABEL value.
    """
    intent = str(row['INTENT']).strip().lower() if pd.notna(row['INTENT']) else ""
    label = str(row['LABEL'])
    if intent == "warning":
        return f"\\warningBadge{{{label}}}"
    elif intent in ("info", "information"):
        return f"\\infoBadge{{{label}}}"
    elif intent == "confirmation":
        return f"\\confirmationBadge{{{label}}}"
    else:
        return label

df = pd.read_csv("badges.csv")
# Sort the DataFrame based on INTENT and a custom order for SCOPE.
# Custom order for SCOPE: Interaction, Context, visual encoding, analysis, data.
scope_order = {"Interaction": 0, "Context": 1, "visual encoding": 2, "analysis": 3, "data": 4}
df['SCOPE_order'] = df['SCOPE'].map(lambda x: scope_order.get(x, 100))
df.sort_values(by=["INTENT", "SCOPE_order"], inplace=True)
df.drop(columns=["SCOPE_order"], inplace=True)

df['LABEL'] = df.apply(wrap_label, axis=1)
for col in df.columns:
    if col == 'LABEL':
        df[col] = df[col].apply(lambda x: process_label_cell(str(x)) if pd.notna(x) else "")
    elif col == 'TOPIC':
        df[col] = df[col].apply(lambda x: "" if pd.isna(x) else escape_latex(str(x)))
    else:
        df[col] = df[col].apply(lambda x: escape_latex(str(x)))

column_format = "p{4.5cm} p{5cm} l l p{2.5cm}"

latex_table = df.to_latex(
    index=False,
    escape=False,
    longtable=True,
    column_format=column_format,
    caption="MONO Visualization Badges.",
    label="tab:vis-badges"
)

with open("badges_table.tex", "w") as f:
    f.write(latex_table)

print("LaTeX table written to badges_table.tex")
