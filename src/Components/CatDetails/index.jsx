import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Fab from "@material-ui/core/Fab";

import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

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
      <CardHeader title={name} />
      <Fab variant="extended" size="medium" color="default" theme={theme}>
        {origin}
      </Fab>
      <CardMedia className={classes.cardMedia} image={image} />
      <p className={classes.description}>{description}</p>
      <p className={classes.list}>Temperament: {temperament}</p>

      <span className={classes.list}>
        Weight: {weight} <i class="far fa-star" />
      </span>
      <span className={classes.list}> Child friendly: {childFriendly}</span>
      <span className={classes.list}>Adaptability:{adaptability}</span>
      <span className={classes.list}> Social Needs: {socialNeeds}</span>
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
