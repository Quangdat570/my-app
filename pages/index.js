import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ games }) {
  console.log((games))
  const category = [ "mmorpg", "shooter", "strategy", "moba"];
  const platform = ["pc", "browser","all"]

  
  return (
    <div className={styles.container}>
     

      <main className={styles.main}>
       

        <div className={styles.flexcolum}>
          <h4>Genres</h4>
          {category.map((cate) => 
             (
             
                
                <div >
                  <label key={cate}>
                    <input type="checkbox" value={cate}></input>
                    {cate}
                  </label>
                </div>
              
            )
          )}
        </div>
        <div className={styles.flex}>
          {games.map((game) => {
            return (
              <div>
                <h3>{game.title}</h3>
                <Link href={{
                  pathname:'/products/[pid]',
                  query: {pid: game.id }
                }}>
                  <img src={game.thumbnail}></img>
                  </Link>


              </div>
            )
          }
          )}
        </div>
      </main>
    </div>
  );
}

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

  console.log(data)

  return {
    props: {
      games: data,
    },
  };
};
