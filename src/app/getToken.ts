export default async function getToken(email: string, password: string) {
    try {
      const response = await fetch("https://skypro-music-api.skyeng.tech/user/token/", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        const json = await response.json();
        return json;
      } else {
        alert('Введенные данные неверны');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }