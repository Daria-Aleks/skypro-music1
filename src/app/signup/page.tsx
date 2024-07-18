"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter()

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const response = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          username: email,
        }),
        headers: {
          "content-type": "application/json",
        },
      });
      if (response.status == 201) {
        router.push('/signin')
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login" onSubmit={handleSignup}>
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
            <input
              className="modal__input password-first"
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="modal__btn-signup-ent" type="submit" onClick={handleSignup}>
                <a>Зарегистрироваться</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
