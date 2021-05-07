import { useQuery } from "react-query";
import CatDetails from "../../Components/CatDetails";
import fetchData from "../../Utils/fetchData";

import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
function CatDetailsPage() {
  const classes = useStyles();
  let { id } = useParams();
  const { isLoading, data = [], error } = useQuery(["catdata", id], () =>
    fetchData(`images/search?breed_id=${id}`)
  );

  if (isLoading) return "loading";
  if (error) return "An error has ocurred:" + error.message;

  const item = data[0].breeds[0];
  return (
    <div className={classes.mainContainer}>
      <CatDetails
        id={item.id}
        link={item.wikipedia_url}
        intelligence={item.intelligence}
        name={item.name}
        weight={item.weight.metric}
        description={item.description}
        image={data[0].url}
        socialNeeds={item.social_needs}
        origin={item.origin}
        temperament={item.temperament}
        childFriendly={item.child_friendly}
        adaptability={item.adaptability}
      />
    </div>
  );
}
export default CatDetailsPage;
