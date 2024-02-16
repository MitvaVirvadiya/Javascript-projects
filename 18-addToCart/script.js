const products = [
    {name: "Bass Guitar", headline: "Play your own music", price: "1,800", image: "https://plus.unsplash.com/premium_photo-1664194584355-25196f114804?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Nike retro 1970", headline: "Just do it", price: "89,000", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Bousnep Cosmetic", headline: "Be yourself", price: "20,000", image: "https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Canon sneakers", headline: "Feel and play", price: "7,500", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Apple Watch", headline: "Time is yours", price: "24,000", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

const popular = [
    {name: "Nike Jordans", headline: "Just do it", price: "1,80,00", image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Sunflower serum", headline: "Facial is all it", price: "2,500", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Chanel Paris Perfume", headline: "Be yourself", price: "14,000", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Sony Lens R55-ND", headline: "capture it all", price: "75,000", image: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "Apple Watch", headline: "Time is yours", price: "24,000", image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

let cart = []
let isOpen = false

const showProducts = () => {
    let clutter = ""
    products.forEach((product, index) => {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                        <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden"><img class="w-full h-full object-cover" src="${product.image}" alt=""></div>
                        <div class="data w-full px-2 py-5">
                            <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                            <div class="flex justify-between w-full items-center mt-2">
                                <div class="w-1/2">
                                    <h3 class="font-semibold opacity-20">${product.headline}</h3>
                                    <h4 class="font-semibold mt-2">${product.price}</h4>
                                </div>
                                <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                                        data-index="${index}" class="add ri-add-line"></i></button>
                            </div>
                        </div>
                    </div>`
    })

    document.querySelector(".products").innerHTML = clutter
}

const showPopularProducts = () => {
    let clutter = ""
    popular.forEach((product) => {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                        <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                            <img class="w-full h-full object-cover"
                                src="${product.image}"
                                alt="">
                        </div>
                        <div class="data py-2 w-full">
                            <h1 class="leading-none font-semibold">${product.name}</h1>
                            <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                            <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
                        </div>
                    </div>`
    })

    document.querySelector(".populars").innerHTML = clutter 
}

const addToCart = () => {
    document.querySelector(".products").addEventListener("click", (details) => {
        if(details.target.classList.contains("add")){
            cart.push(products[details.target.dataset.index])
            console.log(cart)
        }
    })
}

const showCart = () => {
    document.querySelector(".carticon").addEventListener("click", () => {
        const cartexpnd = document.querySelector(".cartexpnd");
        if (isOpen) {
            cartexpnd.style.display = "none"; // Hide the cart when closed
        } else {
            cartexpnd.style.display = "block"; // Show the cart when opened
            let clutter = "";
            cart.forEach((product) => {
                clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                                <div class="w-10 h-10 rounded-lg flex-shrink-0 overflow-hidden"><img class="w-full h-full object-cover" src="${product.image}" alt=""></div>
                                <div>
                                    <h3 class="font-semibold">${product.name}</h3>
                                    <h5 class="text-sm font-semibold opacity-80">${product.price}</h5>
                                </div>
                            </div>`;
            });
            cartexpnd.innerHTML = clutter;
        }
        isOpen = !isOpen;
    });
};


showProducts()
showPopularProducts()
addToCart()
showCart()