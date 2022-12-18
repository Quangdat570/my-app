import React from 'react'
import context from 'react-bootstrap/esm/AccordionContext';

const ProductDetail = ({game}) => {
    return (
        <div>{game.title}</div>
    )
};

export default ProductDetail;

export const getStaticProps = async (ctx) => {
    const {pid} = ctx.params;
    const res = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?id=" + pid,
      {
        headers: {
          'X-RapidAPI-Key': '595decacd1msha8c222da77f6b33p150d5ejsnea1ba80e02af',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      }
    );
    const data = await res.json();
  
    return {
      props: {
        data,
      },
    };
  };


export const getStaticPaths = async () => {
    const res = await fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games",
      {
        headers: {
          'X-RapidAPI-Key': '595decacd1msha8c222da77f6b33p150d5ejsnea1ba80e02af',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      }
    );
    const data = await res.json();
    
  
    return {
      paths: data.map((item) => {{params : {pid: String(item.id)}}}),
      fallback: false,
    };
  };


