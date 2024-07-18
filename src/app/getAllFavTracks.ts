export default async function getAllFavTracks() {
    const accessToken = '124'
    try {
        const response = await fetch("https://skypro-music-api.skyeng.tech/catalog/track/favorite/all/", {
          method: "GET",
          headers: {
            "content-type": "application/json",
            'Authorization': `Bearer ${accessToken}`,
          },
        });
  
        if (response.status == 200) {
          const json = await response.json();
          console.log(json)
        } else {
          alert('Введенные данные неверны')
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
}