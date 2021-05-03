import { useQuery, useQueryClient } from "react-query";
import { useState, useEffect } from "react";

import CatPresentation from "../../Components/CatPresentation";
import fetchData from "../../Utils/fetchData";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

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
});

function CatPresentationPage() {
  const queryClient = useQueryClient();
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const { status, data, error, isFetching, isPreviousData } = useQuery(
    ["breeds", page],
    () => fetchData(`breeds?limit=10&page=0&order=asc`),
    { keepPreviousData: true, staleTime: 5000 }
  );

  useEffect(() => {
    if (page !== 0) {
      queryClient.prefetchQuery(["breeds", page], () =>
        fetchData(`breeds?limit=10&page=${page}&order=asc`)
      );
    }
  }, [data, page, queryClient]);

  if (isFetching) return "Loading...";
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
  );
}
export default CatPresentationPage;
