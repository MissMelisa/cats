import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },

  cardContainer: {
    width: "500px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    fontFamily: "",
  },
});

function CatDetails({
  id,
  socialNeeds,
  adaptability,
  childFriendly,
  name,
  image,
  origin,
  weight,
  description,
  temperament,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardHeader title={name} subheader={origin}>
        {id}
      </CardHeader>
      <CardMedia className={classes.cardMedia} image={image} />
      <Typography gutterBottom variant="h5" component="h2">
        <li>Brief description: {description}</li>
        <li className={classes.list}>Temperament: {temperament}</li>
        <li className={classes.list}>Weight: {weight}</li>
        <li className={classes.list}> Child friendly: {childFriendly}</li>
        <li className={classes.list}>Adaptability:{adaptability}</li>
        <li className={classes.list}> Social Needs: {socialNeeds}</li>
      </Typography>
    </Card>
  );
}
CatDetails.propTypes = {
  id: PropTypes.string.isRequired,
  socialNeeds: PropTypes.number,
  adaptability: PropTypes.number,
  childFriendly: PropTypes.number,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  origin: PropTypes.string,
  weigh: PropTypes.number,
  description: PropTypes.string.isRequired,

  temperament: PropTypes.string,
};
export default CatDetails;
