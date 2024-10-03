// fetch,load,show categories on html

// loadCategories function
const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
   
}



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
