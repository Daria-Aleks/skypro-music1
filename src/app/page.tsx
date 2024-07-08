"use client"
import Image from "next/image";
import Sidebar from "@/components/Sidebar/Sidebar";
import Track from "@/components/Track/Track";
import Bar from "@/components/Bar/Bar";
import Menu from "@/components/Menu/Menu";
import { useState } from "react";
export default function Home() {
  const [showMenu, setShiowMenu] = useState(false);
  
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
            <div className="nav__burger burger" onClick={() => setShiowMenu(!showMenu)}>
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
              <div className="filter__button button-author _btn-text">
                исполнителю
              </div>
              <div className="filter__button button-year _btn-text">
                году выпуска
              </div>
              <div className="filter__button button-genre _btn-text">жанру</div>
            </div>
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
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
                <Track/>
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
