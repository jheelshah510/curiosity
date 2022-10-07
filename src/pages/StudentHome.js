import { Button } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import Navbar from "../components/Navbar";

const StudentHome = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{ marginTop: 40, p: 2, border: "1px grey", textAlign: "center" }}
      >
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{
            maxWidth: "100px",
            maxHeight: "200px",
            minWidth: "100px",
            minHeight: "100px",
          }}
        >
          Ask Doubt
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            marginLeft: 10,
            maxWidth: "100px",
            maxHeight: "200px",
            minWidth: "100px",
            minHeight: "100px",
          }}
        >
          Previous Doubt
        </Button>
      </Box>
    </div>
  );
};

export default StudentHome;
