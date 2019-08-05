import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

import {
  makeStyles,
  Typography,
  Grid,
  CircularProgress
} from "@material-ui/core";

import EmployeeCard from "../components/EmployeeCard";

import getUrlParams from "../utils/getUrlParams";
import getAllSubordinates from "../utils/getAllSubordinates";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    height: "100vh",
    maxWidth: 800,
    margin: "0 auto",
    padding: "0 20px"
  },
  typography: {
    marginBottom: 30
  },
  subtitle: {
    marginBottom: 30,
    fontSize: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  pos: {
    marginBottom: 12
  },
  Image: {
    marginTop: 30
  }
});

const Overview = ({ location }) => {
  const [state, setState] = useState({
    employees: [],
    loading: true,
    error: null
  });
  const classes = useStyles();
  const { query } = getUrlParams(location);

  useEffect(() => {
    getSubordinates(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getSubordinates = async employeeName => {
    try {
      const allSubordinates = await getAllSubordinates(employeeName);
      setState({ ...state, employees: allSubordinates, loading: false });
      toast.success(`Employee ${query}`);
    } catch (error) {
      setState({ ...state, employees: [], loading: false, error: error });
      toast.error(`${error}`);
    }
  };

  const { employees, loading, error } = state;

  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" gutterBottom>
        Employee Overview
      </Typography>
      <Typography
        variant="subtitle1"
        gutterBottom
        className={classes.typography}
      >
        Subordinates of employee {query}
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid
          container
          spacing={4}
          direction="row"
          justify="center"
          alignItems="center"
        >
          {employees.length === 0 && !error && (
            <div className={classes.Image}>
              <Typography
                variant="subtitle1"
                className={classes.subtitle}
                color="textSecondary"
              >
                {query} does not have any direct subordinates
              </Typography>
              <img
                src={require("../images/empty.svg")}
                alt="Error 404"
                width="500"
              />
            </div>
          )}
          {employees.length !== 0 &&
            employees.map((employee, index) => (
              <EmployeeCard key={index} name={employee} />
            ))}
        </Grid>
      )}
      {error && (
        <div className={classes.Image}>
          <p>{error}</p>
          <img
            src={require("../images/error.svg")}
            alt="Error 404"
            width="500"
          />
        </div>
      )}
    </div>
  );
};

export default Overview;
