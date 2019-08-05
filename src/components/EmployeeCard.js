import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    minWidth: 200
  },
  title: {
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
});

const EmployeeCard = ({ name }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default EmployeeCard;
