import StarBorderIcon from "@material-ui/icons/StarBorder";

function Rating({ rating, detail }) {
  rating = Math.round(rating * 2) / 2;
  let stars = [];

  for (let i = rating; i >= 1; i--)
    stars.push(<StarBorderIcon htmlColor="yellow" />);
  for (let i = 5 - rating; i >= 1; i--) stars.push(<StarBorderIcon />);

  //   const starsArray = new Array(5).fill(null);
  //   const stars = starsArray.map((_, idx) => (
  //     <StarBorderIcon htmlColor={idx < rating ? "yellow" : "none"} />
  //   ));

  return (
    <div>
      <span> {detail}</span>
      <div>{stars}</div>
    </div>
  );
}

export default Rating;
