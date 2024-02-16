let images = [
    {
        name: "Beach in summers",
        thumbnail: "https://images.unsplash.com/photo-1690123629470-845b87224313?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Apple juice",
        thumbnail: "https://images.unsplash.com/photo-1583064313769-298cb7c85852?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Stawberry ice cream cake",
        thumbnail: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Mac pro laptop",
        thumbnail: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "White tiger in forest",
        thumbnail: "https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Disco night in goa",
        thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "New york city in sunset",
        thumbnail: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Grand canyon in skylight",
        thumbnail: "https://images.unsplash.com/photo-1682685796444-acc2f5c1b7b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        name: "Pink lotus of love",
        thumbnail: "https://images.unsplash.com/photo-1627800613742-a7d76911d899?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
]

const showCards = () => {
    let cards = "";

    images.forEach((obj) => {
        cards += `<div class="box">
                    <img class="cursor-pointer" src="${obj.thumbnail}" alt="image">
                    <div class="caption">${obj.name}</div>
                </div>`
    })

    document.querySelector('.container').innerHTML = cards 
}

const searchCards = () => {
    let search = document.querySelector('#searchinput')

    search.addEventListener("focus", () => {
        document.querySelector('.overlay').style.display = "block"
    })
    
    search.addEventListener("blur", () => {
        document.querySelector('.overlay').style.display = "none"
        document.querySelector('.searchdata').style.display = "none"
    })

    search.addEventListener("input", (e) => {
        let input = e.target.value.toLowerCase()
        const fillteredCards = images.filter((image) => image.name.includes(input))
        
        let searchData = ""
        let cards = ""
        fillteredCards.forEach((obj) => {
            searchData += `<div class="res flex px-8 py-3">
                            <i class="ri-search-line font-semibold mr-5"></i>
                            <h3 class="font-semibold">${obj.name}</h3>
                        </div>`
            cards += `<div class="box">
                            <img class="cursor-pointer" src="${obj.thumbnail}" alt="image">
                            <div class="caption">${obj.name}</div>
                        </div>`
        })


        document.querySelector('.searchdata').style.display = "block" 
        document.querySelector('.searchdata').innerHTML = searchData 

        document.querySelector('.container').innerHTML = cards 
    })
}

showCards();
searchCards();