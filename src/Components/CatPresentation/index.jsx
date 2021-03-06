import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardMedia: { height: "140px" },
  card: { maxWidth: "345px", height: "100%" },
  typography: { height: "100%" },
  description: { maxHeight: "200px" },
  button: {
    display: "flex",
    padding: "8px",
    alignItems: "center",
    justifyContent: "center",
  },
});
function CatPresentation({ id, image, name, description }) {
  const classes = useStyles();

  const history = useHistory();

  function handleOnClickRedirect() {
    history.push(id);
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.cardMedia} image={image} />
        <CardContent>
          <div className={classes.description}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
              {id}
            </Typography>
            <Typography
              className={classes.typography}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {description.length >= 100 ? (
                <div>{description.substring(0, 100)}...</div>
              ) : (
                { description }
              )}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.button}>
        <Button size="small" color="primary" onClick={handleOnClickRedirect}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
CatPresentation.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CatPresentation;
