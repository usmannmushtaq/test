import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import DashboardSidebar from "./components/sidebar";
import Drawer from "./components/drawer";
import { Grid, Typography } from "@mui/material";
import Table from "./components/table";
function App() {
  return (
    <div>
      <Grid container>
        <Grid item lg={3} md={3} sm={3} xs={3} className="dashboardsidebar">
          <DashboardSidebar />
        </Grid>
        <Grid item xs={12} className="drawer">
          <Drawer />
        </Grid>
        <Grid
          item
          container
          lg={9}
          md={9}
          sm={12}
          xs={12}
          className="padding-right "
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
            </Routes>
          </BrowserRouter>
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
            sm={12}
            style={{
              paddingTop: "40px ",
              paddingBottom: "40px ",
            }}
          >
            <Typography className="pro">Past Invoices</Typography>

            <Table />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
