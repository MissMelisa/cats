import { useQuery } from "react-query";
import CatDetails from "../../Components/CatDetails";
import fetchData from "../../Utils/fetchData";

function CatDetailsPage() {
  const { isLoading, data = [], error } = useQuery("catdata", () =>
    fetchData(`images/search?breed_id=beng`)
  );

  if (isLoading) return "loading";
  if (error) return "An error has ocurred:" + error.message;

  const item = data[0].breeds[0];

  return (
    <div>
      <CatDetails
        id={item.id}
        name={item.name}
        description={item.description}
        image={data.image && data.url}
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
