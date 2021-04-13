import React, { useState } from "react";
import {
  Typography,
  TextField,
  Card,
  Button,
  Container,
  Grid
} from "@material-ui/core";

import { Link } from "react-router-dom"
import styles from "./style";
import { MovieIcon } from '../../icons';

export default ({ history }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const handleClearClick = event => {
    setSearchText("");
  };

  const handleSearchClick = event => {
    history.push(`/results?movieName=${searchText}`);
  };

  const classes = styles();

  console.log(useState())
  return (
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}>Welcome to OMDB</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.moviesIcon} />
          </Grid>
        </Grid>

        <TextField
          value={searchText}
          placeholder="Buscar"
          onChange={handleSearchTextChange}
          margin="normal"
          className={classes.textFieldSearch}
        />
        <Grid className={classes.buttonsContainer}>
          <Link to="/signup" style={{color:"inherit", textdecoration: "none"}}>
            <Button
              variant="contained"
              color="primary"
              className={classes.searchButton}
              size="large">
              Sign Up
          </Button>
          </Link>
          <Button
            onClick={handleSearchClick}
            variant="contained"
            color="primary"
            className={classes.searchButton}
            size="large"
          >
            Buscar
          </Button>
        </Grid>
      </Card>
    </Container>
  );
};
