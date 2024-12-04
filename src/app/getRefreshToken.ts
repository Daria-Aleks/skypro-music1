export default async function getRefreshToken(token) {
    // const token = useAppSelector((state) => state.auth.userTokens);
    try {
        const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/refresh/", {
          method: "POST",
          body: JSON.stringify({
            refresh: token,
          }),
          headers: {
            "content-type": "application/json",
          },
        });
  
        if (response.status == 200) {
          const json = await response.json();
          return json;
        } else {
          alert('Введенные данные неверны')
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
}