import { useQuery } from "react-query";

import CatPresentation from "../../Components/CatPresentation";
import fetchData from "../../Utils/fetchData";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  containerCats: {
    width: "100%",
    justifyContent: "center",
    maxWidth: "1000px",

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
});

function CatPresentationPage() {
  const classes = useStyles();
  const { isLoading, error, data } = useQuery("repodata", () =>
    fetchData("breeds")
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has ocurred: " + error.message;

  return (
    <div>
      <div className={classes.containerSearch}>
        <Paper component="form" className={classes.root}>
          <InputBase
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
