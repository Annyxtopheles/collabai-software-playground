import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Plus, Minus, Grid3X3 } from "lucide-react";

interface TableEditorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onInsert: (html: string) => void;
  initialHtml?: string;
}

const MAX_ROWS = 20;
const MAX_COLS = 10;

const parseTableHtml = (html: string): { cells: string[][]; hasHeader: boolean } => {
  const div = document.createElement("div");
  div.innerHTML = html;
  const table = div.querySelector("table");
  if (!table) return { cells: [["", "", ""], ["", "", ""], ["", "", ""]], hasHeader: true };

  const rows: string[][] = [];
  let hasHeader = false;

  const thead = table.querySelector("thead");
  if (thead) {
    hasHeader = true;
    const headerRow: string[] = [];
    thead.querySelectorAll("th, td").forEach((cell) => {
      headerRow.push(cell.textContent || "");
    });
    if (headerRow.length > 0) rows.push(headerRow);
  }

  const tbody = table.querySelector("tbody") || table;
  tbody.querySelectorAll("tr").forEach((tr) => {
    // Skip rows already in thead
    if (tr.closest("thead")) return;
    const row: string[] = [];
    tr.querySelectorAll("td, th").forEach((cell) => {
      row.push(cell.textContent || "");
    });
    if (row.length > 0) rows.push(row);
  });

  if (rows.length === 0) return { cells: [["", "", ""], ["", "", ""], ["", "", ""]], hasHeader: true };

  // Normalize column count
  const maxCols = Math.max(...rows.map((r) => r.length));
  const normalized = rows.map((r) => {
    while (r.length < maxCols) r.push("");
    return r;
  });

  return { cells: normalized, hasHeader };
};

const TableEditorDialog = ({ open, onOpenChange, onInsert, initialHtml }: TableEditorDialogProps) => {
  const [mode, setMode] = useState<"size" | "edit">(initialHtml ? "edit" : "size");
  const [rows, setRows] = useState(3);
  const [cols, setCols] = useState(3);
  const [hasHeader, setHasHeader] = useState(true);
  const [cells, setCells] = useState<string[][]>([]);

  useEffect(() => {
    if (!open) return;
    if (initialHtml) {
      const parsed = parseTableHtml(initialHtml);
      setCells(parsed.cells);
      setHasHeader(parsed.hasHeader);
      setRows(parsed.cells.length);
      setCols(parsed.cells[0]?.length || 3);
      setMode("edit");
    } else {
      setMode("size");
      setRows(3);
      setCols(3);
      setHasHeader(true);
      setCells([]);
    }
  }, [open, initialHtml]);

  const initGrid = useCallback(() => {
    const grid: string[][] = [];
    for (let r = 0; r < rows; r++) {
      const row: string[] = [];
      for (let c = 0; c < cols; c++) {
        row.push(r === 0 && hasHeader ? `Header ${c + 1}` : "");
      }
      grid.push(row);
    }
    setCells(grid);
    setMode("edit");
  }, [rows, cols, hasHeader]);

  const updateCell = (r: number, c: number, value: string) => {
    setCells((prev) => {
      const updated = prev.map((row) => [...row]);
      updated[r][c] = value;
      return updated;
    });
  };

  const addRow = () => {
    if (cells.length >= MAX_ROWS) return;
    setCells((prev) => [...prev, new Array(prev[0]?.length || cols).fill("")]);
  };

  const removeRow = () => {
    if (cells.length <= 1) return;
    setCells((prev) => prev.slice(0, -1));
  };

  const addCol = () => {
    if ((cells[0]?.length || 0) >= MAX_COLS) return;
    setCells((prev) => prev.map((row) => [...row, ""]));
  };

  const removeCol = () => {
    if ((cells[0]?.length || 0) <= 1) return;
    setCells((prev) => prev.map((row) => row.slice(0, -1)));
  };

  const buildHtml = (): string => {
    if (cells.length === 0) return "";
    const borderStyle = "border:1px solid hsl(var(--border));padding:0.5rem";
    const headerBg = "background:hsl(var(--muted));font-weight:600";

    let html = '<table style="width:100%;border-collapse:collapse;margin:1rem 0">';

    if (hasHeader && cells.length > 0) {
      html += "<thead><tr>";
      cells[0].forEach((cell) => {
        html += `<th style="${borderStyle};${headerBg}">${cell || "&nbsp;"}</th>`;
      });
      html += "</tr></thead>";
    }

    html += "<tbody>";
    const startRow = hasHeader ? 1 : 0;
    for (let r = startRow; r < cells.length; r++) {
      html += "<tr>";
      cells[r].forEach((cell) => {
        html += `<td style="${borderStyle}">${cell || "&nbsp;"}</td>`;
      });
      html += "</tr>";
    }
    html += "</tbody></table><p><br></p>";
    return html;
  };

  const handleInsert = () => {
    const html = buildHtml();
    onInsert(html);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Grid3X3 className="w-5 h-5" />
            {initialHtml ? "Edit Table" : mode === "size" ? "Insert Table" : "Edit Table Contents"}
          </DialogTitle>
          <DialogDescription>
            {mode === "size"
              ? "Choose the table dimensions and click 'Create Grid' to edit contents."
              : "Fill in the table cells below. Use the +/- buttons to add or remove rows and columns."}
          </DialogDescription>
        </DialogHeader>

        {mode === "size" ? (
          <div className="space-y-6 py-4">
            {/* Dimension controls */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Rows</Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setRows(Math.max(1, rows - 1))}
                    disabled={rows <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    min={1}
                    max={MAX_ROWS}
                    value={rows}
                    onChange={(e) => setRows(Math.min(MAX_ROWS, Math.max(1, Number(e.target.value) || 1)))}
                    className="w-20 text-center"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setRows(Math.min(MAX_ROWS, rows + 1))}
                    disabled={rows >= MAX_ROWS}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Columns</Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setCols(Math.max(1, cols - 1))}
                    disabled={cols <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    min={1}
                    max={MAX_COLS}
                    value={cols}
                    onChange={(e) => setCols(Math.min(MAX_COLS, Math.max(1, Number(e.target.value) || 1)))}
                    className="w-20 text-center"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setCols(Math.min(MAX_COLS, cols + 1))}
                    disabled={cols >= MAX_COLS}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Header toggle */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="has-header"
                checked={hasHeader}
                onCheckedChange={(c) => setHasHeader(c === true)}
              />
              <label htmlFor="has-header" className="text-sm cursor-pointer">
                First row is a header
              </label>
            </div>

            {/* Visual grid preview */}
            <div>
              <Label className="text-xs text-muted-foreground mb-2 block">Preview ({rows} × {cols})</Label>
              <div className="inline-block border border-border rounded overflow-hidden">
                {Array.from({ length: Math.min(rows, 8) }).map((_, r) => (
                  <div key={r} className="flex">
                    {Array.from({ length: Math.min(cols, 8) }).map((_, c) => (
                      <div
                        key={c}
                        className={`w-8 h-6 border border-border ${
                          r === 0 && hasHeader ? "bg-muted" : "bg-background"
                        }`}
                      />
                    ))}
                  </div>
                ))}
                {(rows > 8 || cols > 8) && (
                  <p className="text-xs text-muted-foreground p-1 text-center">…truncated</p>
                )}
              </div>
            </div>

            <Button type="button" onClick={initGrid} className="w-full">
              Create Grid
            </Button>
          </div>
        ) : (
          <div className="flex-1 overflow-auto py-4 space-y-4">
            {/* Row/col controls */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">Rows:</span>
                <Button type="button" variant="outline" size="sm" onClick={removeRow} disabled={cells.length <= 1}>
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="text-sm font-medium w-6 text-center">{cells.length}</span>
                <Button type="button" variant="outline" size="sm" onClick={addRow} disabled={cells.length >= MAX_ROWS}>
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">Cols:</span>
                <Button type="button" variant="outline" size="sm" onClick={removeCol} disabled={(cells[0]?.length || 0) <= 1}>
                  <Minus className="w-3 h-3" />
                </Button>
                <span className="text-sm font-medium w-6 text-center">{cells[0]?.length || 0}</span>
                <Button type="button" variant="outline" size="sm" onClick={addCol} disabled={(cells[0]?.length || 0) >= MAX_COLS}>
                  <Plus className="w-3 h-3" />
                </Button>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <Checkbox
                  id="header-toggle-edit"
                  checked={hasHeader}
                  onCheckedChange={(c) => setHasHeader(c === true)}
                />
                <label htmlFor="header-toggle-edit" className="text-sm cursor-pointer">Header row</label>
              </div>
            </div>

            {/* Spreadsheet grid */}
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full border-collapse">
                <tbody>
                  {cells.map((row, r) => (
                    <tr key={r}>
                      <td className="border border-border px-1 py-1 bg-muted text-center text-xs text-muted-foreground w-8 select-none">
                        {r + 1}
                      </td>
                      {row.map((cell, c) => (
                        <td key={c} className="border border-border p-0">
                          <input
                            type="text"
                            value={cell}
                            onChange={(e) => updateCell(r, c, e.target.value)}
                            className={`w-full px-2 py-1.5 text-sm border-0 outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${
                              r === 0 && hasHeader
                                ? "bg-muted font-semibold"
                                : "bg-background"
                            }`}
                            placeholder={r === 0 && hasHeader ? `Header ${c + 1}` : ""}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {mode === "edit" && (
          <DialogFooter className="gap-2">
            {!initialHtml && (
              <Button type="button" variant="outline" onClick={() => setMode("size")}>
                Back
              </Button>
            )}
            <Button type="button" onClick={handleInsert}>
              {initialHtml ? "Update Table" : "Insert Table"}
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TableEditorDialog;
