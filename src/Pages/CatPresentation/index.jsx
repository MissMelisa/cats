/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useQuery } from "react-query";

import CatPresentation from "../../Components/CatPresentation";
import fetchData from "../../Utils/fetchData";

function CatPresentationPage() {
  const { isLoading, error, data } = useQuery("repodata", () =>
    fetchData("breeds")
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has ocurred: " + error.message;
  return (
    <div
      css={{
        width: "100%",
        justifyContent: "center",
        maxWidth: "1000px",

        gap: "3em",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gridTemplateRows: "auto",
      }}
    >
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
