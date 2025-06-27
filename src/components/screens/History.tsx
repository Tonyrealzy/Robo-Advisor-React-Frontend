import React, { useEffect, useMemo, useState } from "react";
import { useGetResponses } from "../../hooks/useGetResponses";
import CustomSkeletonLoader from "../loader/SkeletonLoader";
import Table from "../customTables/Table";
import { formatDateTime, getCurrency } from "../../utils/formatter";
import { useNavigate } from "react-router-dom";

const History: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const params = useMemo(
    () => ({
      page: pageNumber,
      limit: pageSize,
    }),
    [pageNumber, pageSize]
  );

  const { data, isLoading, isFetching, refetch } = useGetResponses(params);
  const paginationRowsPerPageOptions = [10, 20, 25, 50];
  const [totalRows, setTotalRows] = useState(0);
  const [dataToRender, setDataToRender] = useState([]);

  useEffect(() => {
    refetch();

    if (data?.data) {
      setDataToRender(data.data);
    }
    if (data?.page) {
      setTotalRows(data.page);
    }
  }, [data]);

  const handlePageChange = (page: any) => {
    setPageNumber(page);
  };

  const onChangeRowsPerPage = (newPerPage: any, page: any) => {
    setPageSize(newPerPage);
    setPageNumber(page);
  };

  const handleViewDetails = (row: any) => {
    navigate("/view", { replace: true, state: row?.data });
  };

  const columns = [
    {
      name: "S/N",
      selector: (_: any, index: any) => (pageNumber - 1) * pageSize + index + 1,
      sortable: false,
      wrap: true,
    },
    {
      name: "Principal",
      selector: (row: any) =>
        getCurrency(row?.query?.currency) + row?.query?.amount,
      sortable: true,
      wrap: true,
    },
    {
      name: "Created At",
      selector: (row: any) => formatDateTime(row?.created_at, "PPPP hh:mm a"),
      sortable: true,
      wrap: true,
    },
    {
      name: "Investment Purpose",
      selector: (row: any) => row?.query?.investmentPurpose,
      sortable: true,
      wrap: true,
    },
    {
      name: "Action",
      selector: (row: any) => (
        <button
          className="bg-firstgold text-[10px] font-bold text-primary h-10 w-24 md:w-32 flex justify-center items-center rounded-lg cursor-pointer hover:bg-firstgold hover:text-primary"
          onClick={() => handleViewDetails(row)}
        >
          VIEW DETAILS
        </button>
      ),
      sortable: true,
      wrap: true,
    },
  ];

  return (
    <div
      className="h-full w-full justify-center items-center"
      style={{ padding: "20px" }}
    >
      <Table
        data={dataToRender}
        columns={columns}
        paginationTotalRows={totalRows}
        onChangePage={handlePageChange}
        paginationDefaultPage={pageNumber}
        onChangeRowsPerPage={onChangeRowsPerPage}
        paginationRowsPerPageOptions={paginationRowsPerPageOptions}
        progressPending={isLoading || isFetching}
        progressComponent={<CustomSkeletonLoader />}
      />
    </div>
  );
};

export default History;
