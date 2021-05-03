import { useQuery } from "react-query";

import CatPresentation from "../../Components/CatPresentation";
import fetchData from "../../Utils/fetchData";

import { makeStyles } from "@material-ui/core/styles";

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
});

function CatPresentationPage() {
  const classes = useStyles();
  const { isLoading, error, data } = useQuery("repodata", () =>
    fetchData("breeds")
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has ocurred: " + error.message;

  return (
    <div className={classes.containerCats}>
      {data.map((item) => (
        <CatPresentation
          description={item.description}
          image={item.image && item.image.url}
          name={item.name}
        />
      ))}
    </div>
  );
}
export default CatPresentationPage;
