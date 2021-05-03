import { useQuery } from "react-query";
import { useState } from "react";

import CatPresentation from "../../Components/CatPresentation";
import fetchData from "../../Utils/fetchData";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  containerCats: {
    width: "100%",
    justifyContent: "center",
    maxWidth: "1400px",
    marginLeft: "60px",
    gap: "3em",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gridTemplateRows: "auto",
  },
  containerSearch: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "40px",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  button: { marginBottom: "30px" },
});

function CatPresentationPage() {
  const classes = useStyles();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  function handleOnChangeSearch(event) {
    setSearch(event.target.value);
  }

  const { data: searchData = [], error: searchError } = useQuery(
    ["breeds", search],
    () => {
      if (search.length >= 3) return fetchData(`breeds/search?q=${search}`);
    },
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );

  const { data: listData = [], error: listError } = useQuery(
    ["breeds", page],
    () => fetchData(`breeds?limit=10&page=${page}&order=asc`),
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );

  const data = !!searchData.length ? searchData : listData;

  const error = !!listError ? listError : searchError;
  if (error) return "An error has ocurred: " + error.message;

  return (
    <div>
      <div className={classes.containerSearch}>
        <Paper component="form" className={classes.root}>
          <InputBase
            onChange={handleOnChangeSearch}
            className={classes.input}
            placeholder="Search "
            inputProps={{ "aria-label": "search " }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>

          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          ></IconButton>
        </Paper>
      </div>
      {!search && (
        <div className={classes.button}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage(page + 1)}
          >
            next
          </Button>
        </div>
      )}
      <div className={classes.containerCats}>
        {data.map((item) => (
          <CatPresentation
            description={item.description}
            image={item.image && item.image.url}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
}
export default CatPresentationPage;
