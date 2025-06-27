import React from "react";
import DataTable from "react-data-table-component";

interface TableProps {
  columns: any;
  data: any;
  progressComponent?: any;
  paginationDefaultPage: number;
  paginationTotalRows: number;
  progressPending: boolean;
  paginationRowsPerPageOptions: Array<number>;
  onChangePage: (page: any) => void;
  onChangeRowsPerPage: (newPerPage: any, page: any) => void;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  onChangePage,
  onChangeRowsPerPage,
  progressPending,
  paginationDefaultPage,
  paginationTotalRows,
  progressComponent,
  paginationRowsPerPageOptions,
}) => {
  const customStyles: any = {
    noData: {
      style: {
        color: "#0e4687",
        fontSize: "14px",
        fontWeight: "bold",
        textAlign: "center",
        padding: "10px",
      },
    },
    header: {
      style: {
        color: "#0e4687",
        whiteSpace: "normal",
      },
    },
    headRow: {
      style: {
        color: "#0e4687",
        minHeight: "60px",
      },
    },
    headCells: {
      style: {
        color: "#0e4687",
        fontSize: "13px",
        fontWeight: "bold !important",
        padding: "0",
        margin: "0",
        justifyContent: "center",
        textAlign: "center",
        whiteSpace: "normal",
        wordWrap: "break-word",
      },
    },
    rows: {
      style: {
        color: "#0e4687",
        minHeight: "56px",
      },
    },
    cells: {
      style: {
        color: "#0e4687",
        fontSize: "12px",
        fontWeight: "600 !important",
        padding: "2px",
        margin: "0",
        justifyContent: "center",
        textAlign: "center",
        whiteSpace: "normal",
        wordWrap: "break-word",
      },
    },
  };

  return (
    <div className="w-full">
      <DataTable
        striped
        columns={columns}
        data={data}
        pagination
        paginationServer
        customStyles={customStyles}
        paginationDefaultPage={paginationDefaultPage}
        paginationTotalRows={paginationTotalRows}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        progressPending={progressPending}
        progressComponent={progressComponent}
      />
    </div>
  );
};

export default Table;
