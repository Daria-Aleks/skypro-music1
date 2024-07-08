"use client"
import Image from "next/image";
import Sidebar from "@/components/Sidebar/Sidebar";
import Track from "@/components/Track/Track";
import Bar from "@/components/Bar/Bar";
import Menu from "@/components/Menu/Menu";
import { useState, useEffect } from "react";

interface Track {
  id: number;
  name: string;
  author: string;
  album: string;
  duration: string;
  release_date: Date;
  genre: string;
}


export default function Home() {
  const [showMenu, setShowMenu] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/all/");
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.statusText}`);
        }
        const data = await response.json();
        setTracks(data)
      } catch (err) {
        alert(err)
      }
    };

    fetchTracks();
  }, []);

  const uniqueAuthors = Array.from(new Set(tracks.map(track => track.author)));
  const uniqueYears = Array.from(new Set(tracks.map(track => new Date(track.release_date).getFullYear())));
  const uniqueGenres = Array.from(new Set(tracks.map(track => track.genre)));
  console.log(uniqueAuthors)

  return (
    <>
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <nav className="main__nav nav">
            <div className="nav__logo logo">
              <Image className="logo__image" src="/img/logo.png" alt="image"
              width={250}
              height={150} />
            </div>
            <div className="nav__burger burger" onClick={() => setShowMenu(!showMenu)}>
              <span className="burger__line" />
              <span className="burger__line" />
              <span className="burger__line" />
            </div>
            {
              showMenu ? <Menu showMenu={showMenu}/> : <div></div>
            }
          </nav>
          <div className="main__centerblock centerblock">
            <div className="centerblock__search search">
              <svg className="search__svg">
                <use xlinkHref="img/icon/sprite.svg#icon-search" />
              </svg>
              <input
                className="search__text"
                type="search"
                placeholder="Поиск"
                name="search"
              />
            </div>
            <h2 className="centerblock__h2">Треки</h2>
            <div className="centerblock__filter filter">
              <div className="filter__title">Искать по:</div>
              <div className="filter__button button-author _btn-text"
               onClick={() => setActiveFilter(activeFilter === 'author' ? null : 'author')}>
                исполнителю
              </div>
              {activeFilter === 'author' && (
                  <div className="filter__dropdown">
                    {uniqueAuthors.map(author => (
                      <div key={author}>{author}</div>
                    ))}
                  </div>
                )}
              <div className="filter__button button-year _btn-text"
              onClick={() => setActiveFilter(activeFilter === 'year' ? null : 'year')}>
                году выпуска
              </div>
              {activeFilter === 'year' && (
                <div className="filter__dropdown">
                  {uniqueYears.map((year, index)=> (
                    <div key={index}>{year}</div>
                      ))}
                    </div>
                  )}
              <div className="filter__button button-genre _btn-text"
              onClick={() => setActiveFilter(activeFilter === 'genre' ? null : 'genre')}>жанру</div>
            </div>
            {activeFilter === 'genre' && (
                  <div className="filter__dropdown">
                    {uniqueGenres.map(genre => (
                      <div key={genre}>{genre}</div>
                    ))}
                  </div>
                )}
            <div className="centerblock__content playlist-content">
              <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">Исполнитель</div>
                <div className="playlist-title__col col03">Альбом</div>
                <div className="playlist-title__col col04">
                  <svg className="playlist-title__svg">
                    <use xlinkHref="img/icon/sprite.svg#icon-watch" />
                  </svg>
                </div>
              </div>
              <div className="content__playlist playlist">
              {tracks?.map((track, index) => (
                <Track 
                  key={index}
                  track={track}
                />    
                ))}
              </div>
            </div>
          </div>
    <Sidebar/>
        </main>
        <Bar/>
      </div>
    </div>
  </>
  
  );
}
