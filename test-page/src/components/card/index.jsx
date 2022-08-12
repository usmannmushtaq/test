import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import ArrowForwardTwoToneIcon from "@mui/icons-material/ArrowForwardTwoTone";
import CreditCardTwoToneIcon from "@mui/icons-material/CreditCardTwoTone";
import Table from "../../components/table";
export default function Cards() {
  return (
    <Grid
      container
      style={{
        justifyContent: "space-between",
        display: "flex",
      }}
    >
      <Grid
        item
        container
        lg={5.8}
        md={12}
        sm={12}
        xs={12}
        className="card-1-main"
      >
        <Grid item lg={1} md={1} sm={1} xs={6}>
          <Typography className="pro">pro</Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={5} xs={6} className="button-align">
          <Button className="card-btn">current plan</Button>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12} className="text-align">
          <Typography className="pro">
            $25/<span>month</span>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className="head-para">
            You are currently on the pro plan.
          </Typography>
        </Grid>
        <Grid item xs={12} className="border-bottom"></Grid>
        <Grid item xs={12}>
          <Typography className="card-plans">
            Upgrade plans{" "}
            <ArrowForwardTwoToneIcon style={{ marginLeft: "10px" }} />
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        lg={5.8}
        md={12}
        sm={12}
        xs={12}
        className="card-1-main-2"
      >
        <Grid item xs={12}>
          <Typography className="pro">payment method</Typography>
        </Grid>
        <Grid item xs={12} container className="card-2-visa-div">
          <Grid item lg={8} md={8} sm={8} xs={12} style={{ display: "flex " }}>
            <CreditCardTwoToneIcon
              style={{ fontSize: "50px", color: "#fff" }}
            />
            <div style={{ display: "grid", paddingLeft: "10px" }}>
              <Typography style={{ color: "#fff" }}>Visa **** 65</Typography>
              <Typography style={{ color: "gray", fontSize: "12px" }}>
                Expiry 03/25
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={4}
            xs={12}
            style={{ justifyContent: "right", display: "flex" }}
          >
            <Button className="card-2-btn">Edit</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} container className="card-1-main-3">
        <Grid item xs={12}>
          <Typography style={{ color: "#fff" }}>Subscription Usage</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            style={{ color: "gray", fontSize: "12px", paddingTop: "5px" }}
          >
            Total logs ingested:
            <span style={{ color: "#fff", paddingLeft: "5px" }}>234565 MB</span>
          </Typography>
        </Grid>{" "}
        <Grid item xs={12}>
          <Typography>
            <Typography
              style={{ color: "gray", fontSize: "12px", paddingTop: "5px" }}
            >
              Total lambda ingested:
              <span style={{ color: "#fff", paddingLeft: "5px" }}>1.3mil</span>
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
