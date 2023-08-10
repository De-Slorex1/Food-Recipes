const openModalTarget = document.querySelectorAll("[data-modal-target]")
const closeModalTarget = document.querySelectorAll("[data-close-button]")
const overlay = document.querySelector('#overlay')

openModalTarget.forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener("click", () => {
    const modals = document.querySelectorAll(".modal.active")
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalTarget.forEach(button => {
    button.addEventListener("click", () => {
        const modal = button.closest(".modal")
        closeModal(modal)
    })
})


function openModal(modal) {
    if(modal == null) return
    modal.classList.add("active")
    overlay.classList.add("active")
}

function closeModal(modal) {
    if(modal == null) return
    modal.classList.remove("active")
    overlay.classList.remove("active")
}

let cart = document.querySelectorAll("#add-cart"); 
let cartProduct = document.querySelector("#product")
let quantity = document.querySelectorAll("#cart_number")

for(let i=0; i < cart.length; i++) {
    cart[i].addEventListener("click", add_to_cart)
}

function add_to_cart(event) {
    let btn = event.target
    let btn_parent = btn.parentElement
    let btn_grandparent = btn.parentElement.parentElement
    let itemName = btn_parent.children[0].innerText
    let itemPrice = btn_parent.children[2].innerText
    let itemImage = btn_grandparent.children[0].src

    let itemContainer = document.createElement("div")
    itemContainer.innerHTML = `
            <div class=" flex font-bold my-3 items-center justify-between px-0" id="cart_item">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>                                  
                <img src="${itemImage}" alt="cart-image" class="rounded-full ml-10 mr-2 flex" id="cart-image imgae-circle" width="70px" height="70px" />
                <h3 class="item-name flex-1">${itemName}</h3>
                <p class="mr-24 cart-price">${itemPrice}</p>
                <input type="number" class="ml-11" id="cart_number" value="1" />
                <p class="mr-16 cart-total">${itemPrice}</p>
            </div>
    `

    cartProduct.append(itemContainer)

    for(let i=0; i < quantity.length; i++) {
        quantity[i].addEventListener("change", updateTotal)
    }
}

function updateTotal(event) {
    num_Item = event.target
    num_Item_Parent = num_Item.parentElement
    price_field = num_Item_Parent.document.getElementByClassName("cart-price")
    price_field_content = price_field.innerHTML
    console.log(price_field_content)

}



const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }, 
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 //validate
 const auth = firebase.auth()
 const firebase = firebase.database()

 //set up signup function 
 