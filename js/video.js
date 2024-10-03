// fetch,load,show categories on html

// loadCategories function
const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
   
}
// video fetching
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error))
}
// // card demo
// const cardDemo = {
//     "category_id": "1001",
//     "video_id": "aaaa",
//     "thumbnail": "https://i.ibb.co/L1b6xSq/shape.jpg",
//     "title": "Shape of You",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             "profile_name": "Olivia Mitchell",
//             "verified": ""
//         }
//     ],
//     "others": {
//         "views": "100K",
//         "posted_date": "16278"
//     },
//     "description": "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// }

// display videos function
const displayVideos = (videos) =>{
   const videosContainer = document.getElementById('videos')
   videos.forEach((video) =>{
    console.log(video);
    const card = document.createElement('div')
    card.classList = "card card-compact"
    card.innerHTML =`
     <figure class="h-[200px]">
    <img
      src= ${video.thumbnail}
      alt="Shoes" class="w-full h-full object-cover" />
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
  <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture} />
  </div>
  <div>
  <h2 class="font-bold">${video.title}</h2>
  <div class="flex items-center gap-2">
  <p class="text-gray-400">${video.authors[0].profile_name}</p>
  <img class="w-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" />
  </div>
  
  <p></p>
  </div>
   
  </div>
    `;
    videosContainer.append(card)
   });
};



// displayCategories function
const displayCategories = (categories) =>{
    // getting nav div by id
    const categoriesContainer = document.getElementById('categories')
    categories.forEach((item) => {
        // create btn
        const button = document.createElement('button')
        button.classList.add('btn')
        button.innerText = item.category;
        categoriesContainer.append(button)
    })
}


loadCategories()
loadVideos()
