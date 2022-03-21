import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const History = ({ rows, columns, onClickBack }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "Stone" }}>Purged Contracts</h1>
      <Button variant="contained" color="primary" onClick={onClickBack}>
        Back
      </Button>
      <span className="horizontal-line" />
      <div className="centerDiv" style={{ height: 380, width: 950 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
        />
      </div>
      <br />
    </div>
  );
};

export default History;
