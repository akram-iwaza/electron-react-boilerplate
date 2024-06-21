import { Table, Column, AutoSizer } from "react-virtualized";
import "react-virtualized/styles.css";
import { Checkbox } from "../../ui/checkbox";

const TableComponent = <T extends { id: number }>({
  tasks,
  columns,
  handleSelectAll,
  handleSelectTask,
  selectedTasks,
}: TableComponentProps<T>) => {
  const rowGetter = ({ index }: { index: number }) => tasks[index];

  return (
    <div className="!w-full !h-[85vh]">
      <AutoSizer>
        {({ width, height }) => (
          <Table
            width={width}
            height={height}
            headerHeight={50}
            rowHeight={50}
            rowCount={tasks.length}
            rowGetter={rowGetter}
            className="text-white !w-full !h-[85vh] !font-normal"
          >
            <Column
              label={
                <Checkbox
                  checked={selectedTasks.length === tasks.length}
                  onCheckedChange={(checked) => handleSelectAll(checked)}
                  id="select-all"
                  className="w-[1.125rem] h-[1.125rem] rounded-[0.25rem] border border-solid border-border mt-3"
                />
              }
              dataKey="select"
              width={50}
              cellRenderer={({ rowIndex }) => (
                <Checkbox
                  checked={selectedTasks.includes(tasks[rowIndex].id)}
                  onCheckedChange={() => handleSelectTask(tasks[rowIndex].id)}
                  id={`select-task-${tasks[rowIndex].id}`}
                  className="w-[1.125rem] h-[1.125rem] rounded-[0.25rem] border border-solid border-border"
                />
              )}
            />
            {columns.map((column) => (
              <Column
                key={String(column.dataKey)}
                label={column.label}
                dataKey={String(column.dataKey)}
                width={column.width}
                headerRenderer={() => (
                  <div style={{ textTransform: "capitalize" }}>
                    {column.label}
                  </div>
                )}
                cellRenderer={column.cellRenderer}
              />
            ))}
          </Table>
        )}
      </AutoSizer>
    </div>
  );
};

export default TableComponent;
