import { useQuery } from "react-query";
import { useHistory } from "react-router";
import fetchData from "../../Utils/fetchData";

import { Button } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  homeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

function Home() {
  const classes = useStyles();

  const history = useHistory();

  function handleOnClickRedirect() {
    history.push("/catPresentation");
  }

  const { isLoading, error } = useQuery("repodata", () =>
    fetchData("images/search")
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has ocurred: " + error.message;
  return (
    <div className={classes.homeContainer}>
      <h1>Welcome </h1>
      <img
        src="https://lh3.googleusercontent.com/proxy/PGKow55jhzSgcClXUTF-PxAuM4gajIoS2NN4fsjLJIfuTkfZGwCZBGANNYHGg0oqtko7WgdYv0qPpD4o19bUC9qD"
        alt="logo"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleOnClickRedirect}
      >
        Visit us!
      </Button>
    </div>
  );
}

export default Home;
