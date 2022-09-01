const cartBtn = document.querySelector('.cart');
let cartPage = document.querySelector('.cart-product-price-delBtn');
const menu = document.querySelector('.menu');
const bottomcartbtn = document.querySelector('.addtocartbtn')
let cartcounterinner = document.querySelector('.cart-counter').innerHTML;
let cartcounter = document.querySelector('.cart-counter'); 
// const cartcontentcount = document.querySelector('#cartcount').innerHTML;

// selection of HTML 
let cartcontent = document.querySelector('.cart-content')
const emptyCart = document.querySelector('.empty-msg')


//selection of big thumbnail images
const bigthumbnail = document.querySelector('#pdt-img');
const smallthumbnail = document.querySelectorAll('.thumbnailimg');

//selection of next and previous buttons
const directionBtns = document.querySelectorAll('.arrow');

// increment and decrement buttons selection
const amtbtns = document.querySelectorAll('.num');

// count inner text selection
const kount = document.querySelector('.count');

// harmburger buttons selection
const openBtn = document.querySelector('.harmburger');
const closeBtn = document.querySelector('.closeBtn');
const Menu = document.querySelector('.menu')

//selection of current, product and product-1 classes
const current = document.querySelector('.current');

const cartpageup = document.getElementById('cartpageup');
const hide = document.getElementsByClassName('hide');

//selection of delete button


// variable
let count = 0;
let newCount = 0;
let index = 1;
let imageIndex = 1;
let addtocartvalue;
let element;
let elementTwo
let zerovalue = 0

// event listeners
cartBtn.addEventListener('click', openCartPage);
openBtn.addEventListener('click', openSlideMenu);
closeBtn.addEventListener('click', closeSideMenu);
amtbtns.forEach(b => b.addEventListener('click', executeAmtBtns));
smallthumbnail.forEach(b => b.addEventListener('click', executeSmallThumbnailClick));
directionBtns.forEach(b => b.addEventListener('click', executeDirectionBtnsClick));
bottomcartbtn.addEventListener('click', executeAddCartBtnClicked);


// FUNCTIONS 

// functions for side menu
function openSlideMenu() {
    Menu.classList.toggle('open')
    Menu.setAttribute('fadein', '');
    Menu.removeAttribute('fadeout')
}

function closeSideMenu() {
    Menu.classList.add('open');
    Menu.setAttribute('fadeout', '');
    Menu.removeAttribute('fadein');
}

//function to close cart
function closecart(e) {
    e.currentTarget === e.target && openCartPage() // find out why this isn't working
}

// increment and decrement function
function executeAmtBtns(e) {
    if(e.currentTarget.id == 'decrease') {
        count == 0 ? null : count--
        updateCountValue()
    } else{
        count++;
        updateCountValue()
    }

    if(cartcounter.children.length == 1)
        if(e.currentTarget.id == 'decrease'){
            newCount == 0 ? null : newCount--  
        updateNewCountValue()
    } else{
        newCount++;
        updateNewCountValue()
    }
}

// reuseable functions for AmtBtns and AddtocartBtn
function updateCountValue() {
    return kount.textContent = count
}

function updateNewCountValue() {
    return kount.textContent = newCount;
}

function cartIconValue() {
    if(cartcounterinner = 0){
        cartcounter.classList.add('hidden')
    } else{
        cartcounter.classList.remove('hidden')
    }
}

function renderCartIconValue() {
    element = document.createElement('div')
   if(updateCountValue() > 0) {
        element.id = 'countadded'
        element.innerText = updateCountValue();
        return cartcounter.appendChild(element)    
    } 
}

// function for opening cart 
function openCartPage() {    
    cartcontent.classList.toggle('open-cart');
    if(updateCountValue() > 0) 
        if(countadded.textContent > 0){
        cartpageup.classList.remove('hiddenclass')
        emptyCart.classList.add('hiddenclass')
    } else{
        cartPage.classList.add('hiddenclass')
        emptyCart.classList.remove('hiddenclass')
    }    
}

// add to cart bottom button function
function executeAddCartBtnClicked() {
    cartcontent.classList.add('open-cart')
    
    // display the cart because it now contains some amounts
    if(updateCountValue() > 0)
       if(cartcounter.children.length == 0) {
        renderCartIconValue();
        cartIconValue()
    } else if(cartcounter.children.length == 1 && updateCountValue() > 0){
        const countAdded = document.getElementById('countadded')
        element.innerText = (countAdded.textContent * 1) + newCount  
        emptyCart.classList.add('hiddenclass')
        cartpageup.classList.remove('hiddenclass')
    } else if(updateCountValue() == 0 && cartcounter.children.length == 0) {
        emptyCart.classList.add('hiddenclass') 
        cartpageup.classList.remove('hiddenclass') 
    } 

    let countaddedvalue;
    
    if(cartcounter.children.length == 0) {
        countaddedvalue = 0
        // emptyCart.classList.remove('hiddenclass') 
        // cartpageup.classList.add('hiddenclass') 
    } else{
        countaddedvalue = countadded.textContent
        // emptyCart.classList.add('hiddenclass') 
        // cartpageup.classList.remove('hiddenclass')   
    }

    let price = 125;
    let total = price * countaddedvalue

    let activestate =  `
                            <div class="flex-class">
                                <div class="carth">
                                <img class="carh" src="images/image-product-1-thumbnail.jpg" alt="">
                                </div>
                                <div class="cart-text">
                                <div class="cart-text-head">
                                    <h2>Autumn Limited Edition...</h2>
                                </div>
                                <div class="price-total-container">
                                    <div class="font-style" id="cartcount">$${price}.00 x <span class="countaddedvalue" > ${countaddedvalue}</span> </div>
                                    <div class="price-total"><h3> $<span class="totalvalued"> ${total} </span></h3></div>
                                </div>
                                </div>
                                <div class="deletebtn">
                                <img id="deleteBtn" src="images/icon-delete.svg" alt="delete svg">
                                </div>
                            </div>
                            <div class="checkoutbtn">
                                <h2>Checkout</h2>
                            </div>
                        `;

                        
    if(updateCountValue() > 0) {
            cartPage.innerHTML = activestate    
    } else if(cartcounter.children.length == 1 && updateCountValue() > 0) {
            cartPage.innerHTML = activestate
     } else if(updateCountValue() == 0){
             emptyCart.classList.remove('hiddenclass')
             cartpageup.classList.add('hiddenclass')
     }

    if(cartcounter.children.length == 1) {
        const cartDelBtn = document.querySelector('.deletebtn')
        cartDelBtn.addEventListener('click', ()=>{            
           countadded.textContent == 0 ? null : countadded.textContent-- 
           countaddedvalue = countadded.textContent 

        if(cartcounter.children.length == 1){
            let countaddedvalued = document.querySelector('.countaddedvalue')
            let totalvalued = document.querySelector('.totalvalued')
            countaddedvalued.textContent = countaddedvalue
            totalvalued.innerHTML = countaddedvalue * price
        }

        // if(cartcounter.children.length == 1 && countaddedvalued.textContent == 0){
        //     emptyCart.classList.remove('hiddenclass')
        //     cartpageup.classList.add('hiddenclass')
        // }

        if(countadded.textContent == 0) {
            emptyCart.classList.remove('hiddenclass') 
            cartpageup.classList.add('hiddenclass')
            cartcounter.classList.add('hidden')
        }
    
    })  
       
       const checkoutbtn = document.querySelector('.checkoutbtn')
       checkoutbtn.addEventListener('click', () => {
        let countaddedvalued = document.querySelector('.countaddedvalue')
           emptyCart.classList.remove('hiddenclass')
           cartpageup.classList.add('hiddenclass')
           countadded.textContent = 0
           countaddedvalue = 0
           if(countadded.textContent == 0) {
               cartcounter.classList.add('hidden')
           }
           countaddedvalue = 0
           countaddedvalued.textContent = 0

       })
    }

    // if( countadded.textContent > 0){
    //     cartcounter.classList.remove('hidden')
    // }

    kount.textContent = 0
    newCount = 0 
    count = 0 
}





// display or not to display cart icon
if(cartcounterinner > 0){
    cartcounter.classList.remove('hidden')
} else{
    cartcounter.classList.add('hidden')
}

//changing images on the desktop version function
function executeSmallThumbnailClick (e) {
    bigthumbnail.src = e.currentTarget.src.replace('-thumbnail', '')
}

//function for direction buttons **CAROUSELS**
function executeDirectionBtnsClick(e) {
    if(e.currentTarget.id == 'next')
        if(imageIndex < 4) {
         imageIndex++ 
          setImageSrc()
    } else{
        imageIndex = 0
        imageIndex++
        setImageSrc()
    }
    if(e.currentTarget.id == 'previous')
        if(imageIndex > 1) {
            imageIndex--
            setImageSrc()
    } else{
        imageIndex = 5
        imageIndex--
        setImageSrc()
    }
}

function setImageSrc() {
   return bigthumbnail.src = `images/image-product-${imageIndex}.jpg`  
}