import React from "react";
import Cards from "../../components/card";
import { Typography } from "@mui/material";

export default function Index() {
  return (
    <div>
      <Typography className="subscription">subscription</Typography>
      <Typography className="head-para">
        Manage your billing information and invoices.
      </Typography>
      <Cards />
    </div>
  );
}
