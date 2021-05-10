import { useInfiniteQuery } from "react-query";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";

import CatPresentation from "../../Components/CatPresentation";
import fetchData from "../../Utils/fetchData";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Waypoint } from "react-waypoint";

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
    paddingBottom: "36px",
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
});

function CatPresentationPage() {
  const classes = useStyles();

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  function handleOnChangeSearch(event) {
    setSearch(event.target.value);
  }

  const fetchProjects = ({ pageParam = 0 }) =>
    fetchData(`breeds?limit=10&page=${pageParam}&order=asc`);

  const {
    data: listData = { pages: [] },
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery("breeds", fetchProjects, {
    getNextPageParam: () => {
      return page;
    },
    getPreviousPageParam: () => {
      return page - 1;
    },
  });

  function handleOnNextClick() {
    setPage(page + 1);
  }

  useEffect(() => {
    if (page !== 0) {
      fetchNextPage();
    }
  }, [fetchNextPage, page]);

  const { data: searchData = [], error } = useQuery(
    ["breeds", search],
    () => {
      if (search.length >= 3) return fetchData(`breeds/search?q=${search}`);
    },
    {
      keepPreviousData: true,
      staleTime: 5000,
    }
  );

  const data = !!searchData.length
    ? searchData
    : listData.pages.flatMap((item) => item);

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
      <div className={classes.containerCats}>
        {data.map((item) => (
          <CatPresentation
            id={item.id}
            description={item.description}
            image={item.image && item.image.url}
            name={item.name}
          />
        ))}
        {!isFetching && !isFetchingNextPage && !search && (
          <Waypoint onEnter={handleOnNextClick} />
        )}
        {isFetchingNextPage && "Loading more..."}
      </div>
    </div>
  );
}
export default CatPresentationPage;
