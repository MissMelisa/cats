import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Rating from "../Rating";

const theme = createMuiTheme({
  MuiFab: {
    "@global": {
      MuiFab: { alignSelf: "center" },
    },
  },
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardMedia: { height: "140px", width: "100%" },

  cardContainer: {
    marginLeft: "20px",
    marginRight: "20px",
    width: "500px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  description: {
    fontFamily: "Open Sans Condensed",
    fontSize: "24px",
  },
  list: {
    fontFamily: "arial",
    fontSize: "16px",
  },
  rating: {
    display: "flex",
    flexDirection: "column",
  },
  country: {
    marginLeft: "8px",
    marginRight: "auto",
    marginBottom: "8px",
  },
});

function CatDetails({
  id,
  link,
  socialNeeds,
  adaptability,
  childFriendly,
  name,
  image,
  origin,
  weight,
  description,
  temperament,
  intelligence,
}) {
  const classes = useStyles();
  return (
    <Card className={classes.cardContainer}>
      <CardHeader title={name} />
      <Fab
        className={classes.country}
        variant="extended"
        size="medium"
        color="default"
        theme={theme}
      >
        {origin}
      </Fab>
      <CardMedia className={classes.cardMedia} image={image} />
      <p className={classes.description}>{description}</p>
      <p className={classes.list}>Temperament: {temperament}</p>
      <span className={classes.list}>Weight: {weight} kilograms</span>

      <Rating detail="Intelligence" rating={intelligence} />
      <Rating detail="Child friendly" rating={childFriendly} />

      <Rating detail="Adaptability" rating={adaptability} />

      <Rating detail="Social Needs" rating={socialNeeds} />
      <Button variant="contained" color="primary" href={link}>
        Wikipedia
      </Button>
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
