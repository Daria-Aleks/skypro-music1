export default async function getFavTracks(token: any) {
    try {
        const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
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