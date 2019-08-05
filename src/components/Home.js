import React from "react";
import {
  makeStyles,
  Paper,
  InputBase,
  Divider,
  Button,
  Typography
} from "@material-ui/core";

import useInputState from "../hooks/useInputState";
import setUrlParams from "../utils/setUrlParams";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh"
  },
  root: {
    marginTop: 30,
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Home = ({ history }) => {
  const [search, handleOnSearchChange] = useInputState("");
  const classes = useStyles();

  const handleSearchSubordinates = () => {
    const url = setUrlParams({ query: search });
    history.push(`overview/?${url}`);
  };

  return (
    <div className={classes.wrapper}>
      <Typography variant="h3" gutterBottom>
        Employee Explorer
      </Typography>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Employee name"
          inputProps={{ "aria-label": "search employee" }}
          value={search}
          onChange={handleOnSearchChange}
          fullWidth
        />
        <Divider className={classes.divider} />
        <Button
          onClick={handleSearchSubordinates}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Search
        </Button>
      </Paper>
    </div>
  );
};

export default Home;
