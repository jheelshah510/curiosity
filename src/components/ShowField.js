import { ListItemText } from "@material-ui/core";
import React from "react";

const ShowField = ({ field }) => {
  const { fieldName } = field;
  return (
    <div>
      <ListItemText primary={fieldName} sx={{ height: 40 }} />
    </div>
  );
};

export default ShowField;
