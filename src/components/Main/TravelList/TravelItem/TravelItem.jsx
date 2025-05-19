import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./TravelItem.css";

const TravelItem = ({ data, remove }) => {
  const { title, description, price, img_url } = data;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={img_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
          <br />
          {price}€
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={remove}>Borrar</Button>
      </CardActions>
    </Card>
  );

  // <article >
  //   <h4>{title}</h4>
  //   <p>{description}</p>
  //   <p>Precio: {price}€</p>
  //   <img className="picture_item" src={img_url} alt={title} />
  //   <button onClick={remove}>Borrar</button>
  // </article>;
};

export default TravelItem;
