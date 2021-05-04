import { useQuery } from "react-query";
import fetchData from "../../Utils/fetchData";

function Home() {
  const { isLoading, error } = useQuery("repodata", () =>
    fetchData("images/search")
  );

  if (isLoading) return "Loading...";
  if (error) return "An error has ocurred: " + error.message;
  return <div>Welcome</div>;
}

export default Home;
