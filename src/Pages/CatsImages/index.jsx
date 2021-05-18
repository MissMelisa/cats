import { useQuery } from "react-query";
import { useState } from "react";

import fetchData from "../../Utils/fetchData";

import { makeStyles } from "@material-ui/core/styles";

const { Button, InputLabel, Select, MenuItem } = require("@material-ui/core");

const useStyles = makeStyles({
  mainContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridTemplateRows: " autofill,  1fr",
    gridGap: "20px",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    margin: "20px",
    width: "400px",
    height: "500px",
  },
});
function CatsCategories() {
  const classes = useStyles();

  const [category, setCategory] = useState(0);
  const [open, setOpen] = useState(false);
  const [openLimit, setOpenLimit] = useState(false);
  const [limit, setLimit] = useState();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLimit = (event) => {
    setLimit(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenLimit = () => {
    setOpenLimit(true);
  };
  const handleCloseLimit = () => {
    setOpenLimit(false);
  };
  const {
    isLoading,
    data: categories = [],
    error: categoriesError,
  } = useQuery("catcategory", () => fetchData("categories"));

  const { data: images = [], error: imagesError } = useQuery(
    ["catimages", category],
    () => fetchData(`images/search?category_ids=${category}&limit=${limit}`)
  );

  const error = !!categoriesError ? categoriesError : imagesError;

  if (isLoading) return "loading";
  if (error) return "An error has ocurred:" + error.message;

  return (
    <div>
      <Button>Category</Button>

      <InputLabel id="selectOption">
        <Select
          labelId="selectOption"
          id="selectOption"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
          <MenuItem>
            <em>none</em>
          </MenuItem>
          {categories.map((item) => (
            <MenuItem value={item.id}> {item.name}</MenuItem>
          ))}
        </Select>
      </InputLabel>

      <div>
        <Button>Limit</Button>
        <InputLabel id="selectLimit">
          <Select
            labelId="selectLimit"
            id="selectLimit"
            open={openLimit}
            onClose={handleCloseLimit}
            onOpen={handleOpenLimit}
            value={limit}
            onChange={handleLimit}
          >
            <MenuItem value="3">3</MenuItem>
            <MenuItem value="6">6</MenuItem>
            <MenuItem value="9">9</MenuItem>
          </Select>
        </InputLabel>
      </div>

      <div className={classes.mainContainer}>
        {images.map((item) => (
          <img
            className={classes.image}
            id={item.id}
            name={item.name}
            src={item.url}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default CatsCategories;
