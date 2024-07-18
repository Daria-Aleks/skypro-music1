"use client"
import { useState } from 'react';
import { setAuth, setUser, setUserTokens } from "../../store/features/authSlice";
import { setAllFavs } from "../../store/features/traksSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useRouter } from 'next/navigation'
import getToken from '../getToken'
import getFavTracks from '../getFavTracks';
import Link from 'next/link';

interface UserTokens {
  refresh: string;
  access: string;
}

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.userDate);
  const handleSignin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "content-type": "application/json",
        },
      });

      if (response.status == 200) {
        const json = await response.json();
        dispatch(setUser({...json, password: password}))
        dispatch(setAuth(true))
        router.push('/')
        const tokens: UserTokens = await getToken(email, password);
        dispatch(setUserTokens(tokens))
        const allFavTracks = await getFavTracks(tokens.access);
        dispatch(setAllFavs(allFavTracks))
      } else {
        alert('Введенные данные неверны')
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login" onSubmit={handleSignin}>
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="modal__input password-first"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="modal__btn-signup-ent" type="submit" onClick={handleSignin}>
              <a>Войти</a>
            </button>
            <button className="btn" type="submit">
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}