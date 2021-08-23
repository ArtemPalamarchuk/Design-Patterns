interface Column {
  width: number,
  columns?: Column[],
}

const columns: Column[] = [
  {width: 100, columns: [{width: 100, columns: []}]},
  {width: 200, columns: []},
  {width: 300, columns: [{width: 300, columns: []}, {width: 200, columns: [{width: 600, columns: []}]},]},
  {width: 100, columns: []},
]

let result = 0

const calculateColumnsWidth = (cols: Column[]) => {
  cols.forEach(el => {
    result += el.width
    if (el.columns) calculateColumnsWidth(el.columns)
  })
}

calculateColumnsWidth(columns)


export const Composite_Result = () => {
  console.log(result);
}