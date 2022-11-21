import { Grid, Card, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{
        marginTop: "50px",
        marginBottom: "20px",
        gap: "40px",

        flexDirection: {
          sm: "column",
          xs: "column",
          md: "row",
          lg: "row",
          xl: "row",
        },
      }}
    >
      <Grid item>
        <Card
          sx={{
            width: "500px",
            minHeight: "300px",
            padding: "25px",
            backgroundColor: "primary.light",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          <Typography variant="body2" color="inherit">
            Create Projects I had created many Projects in HTML, CSS,
            JAVASCRIPT, php. for sample you checkout my github
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{
            backgroundColor: "primary.light",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            width: "500px",
            minHeight: "300px",
            padding: "25px",
          }}
        >
          <Typography variant="body2" color="inherit">
            Create Projects I had created many Projects in HTML, CSS,
            JAVASCRIPT, php. for sample you checkout my github
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{
            backgroundColor: "primary.light",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
            width: "500px",
            minHeight: "300px",
            padding: "25px",
          }}
        >
          <Typography variant="body2" color="inherit">
            Create Projects I had created many Projects in HTML, CSS,
            JAVASCRIPT, php. for sample you checkout my github
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Services;
