import React from "react";

const Card = ({data:{name,url}}) => {
  return (
    <article className="pokemon-card">
      <h4>{name}</h4>
      <a href={url}>URL</a>
    </article>
  );
};

export default Card;
