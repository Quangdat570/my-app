import React from 'react'
import styles from './Products.module.css'

const Index = () => {
  

  return (
    <div className={styles.container}></div>
  )
}

export default Index;

export const getStaticProps = async (ctx) => {
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
    props: {
      games: data,
    },
  };
};

