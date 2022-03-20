import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Button } from "@material-ui/core";

const ElegibleContracts = ({ rows, columns, onSelectionChange, onPurge }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontFamily: "Stone" }}>Elegible Contracts</h1>
      <span className="horizontal-line" />
      <div className="centerDiv" style={{ height: 380, width: 950 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          checkboxSelection
          onSelectionChange={onSelectionChange}
        />
      </div>
      <br />
      <Button variant="contained" color="primary" onClick={onPurge}>
        Purge
      </Button>
    </div>
  );
};

export default ElegibleContracts;
