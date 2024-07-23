export default async function getSelections(id:number) {
    try {
        const response = await fetch(`https://skypro-music-api.skyeng.tech/catalog/selection/${id}`, {
          method: "GET",
          headers: {
            "content-type": "application/json",
          },
        });
  
        if (response.status == 200) {
          const json = await response.json();
          return json
        } else {
          alert('Введенные данные неверны')
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
}