
//percentANDprice function ==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==
percentANDprice=(element)=>{
    //percent
    let originalPrice = parseFloat(element.querySelector('.originalPrice').textContent);
    let percent=parseFloat(element.querySelector('.percent').textContent);
    let finalPrice = originalPrice/100*(100-percent).toFixed(0);
    //price
    element.querySelector('.finalPrice').textContent = finalPrice.toLocaleString();
    element.querySelector('.originalPrice').textContent = originalPrice.toLocaleString()
}

//Pass function ==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==+==
let background = document.querySelector('.background')
let div;
let pass = (mode) => {
    
    if(mode == "show"){
        
        scrollPosition = window.scrollY;
        document.body.style.position = "fixed";
        isBodyFixed = true;
        document.body.style.top = `-${scrollPosition}px`;
        
        background.style.visibility= "visible"
        background.style.opacity= "1"
        
        div.style.visibility="visible"
        div.style.transform= "translateY(0%)";
        div.style.opacity="1"
    }
    if(mode == "hidden"){
        
        document.body.style.position = ''
        isBodyFixed = false; 
        window.scrollTo(0, scrollPosition)
        
        background.style.opacity= ''
        background.style.visibility= ''
        
        div.style.transform= ''
        div.style.opacity=''
        div.style.visibility=''
    }
}
background.onclick = ()=> {
    pass("hidden")
    setTimeout(() => {
        background.style.zIndex = ""
    }, 300);
}




// #insApp ------------------------------------------------------------------------------------------------------------
function close_insApp(){
    document.getElementById("insApp").style.display="none";
}



// #header.phone-------------------------------------------------------------------------------------------------------
// city
let city_phone= document.querySelector("header.phone .city")

let isBodyFixed = false;
window.addEventListener('scroll',()=>{
    if (isBodyFixed) return;
    
    let scrollPosition = window.scrollY || window.pageYOffset;
    if(scrollPosition < 500){
        city_phone.style.height= ''
        city_phone.style.paddingTop= ''
    }
    if(scrollPosition >= 500 + height){
        city_phone.style.padding= "0px"
        city_phone.style.height= "0px"
    }
})



// .cityPass ----------------------------------------------------------------------------------------------------------
let city_desk = document.querySelector('nav.desk .city')
let cityPass= document.querySelector(".cityPass")
let cityPassI= document.querySelector(".cityPass i")
    
city_phone.onclick = () => {
    div = cityPass
    pass("show")
}
city_desk.onclick = (e) =>{
    e.stopPropagation()
    if(div == searchPass_desk || category_pass){
        pass("hidden")
        background.style.zIndex = ''
    }
    background.style.zIndex = ''
    div = cityPass
    pass("show")
}

cityPassI.onclick = () => {
    pass("hidden")
} 
cityPass.onclick = (event) =>
    event.stopPropagation()



//.searchPass-phone ---------------------------------------------------------------------------------------------------
let search_phone = document.querySelector('header.phone .search')
let searchPass_phone = document.querySelector('.searchPass-phone')
let searchPassI_phone = document.querySelector('.searchPass-phone i')
let searchPassInput_phone = document.querySelector('.searchPass-phone input[type="search"]')

search_phone.onclick = ()=> {
    div = searchPass_phone
    pass("show")
    setTimeout(() => {
        searchPassInput_phone.focus();
    }, 50); 
}
searchPass_phone.onclick = e => e.stopPropagation();

searchPassI_phone.onclick = ()=> 
    pass("hidden")



//.searchPass-desk ----------------------------------------------------------------------------------------------------
let nav_desk = document.querySelector('nav.desk')
let header_desk = document.querySelector('header.desk')
let search_desk = document.querySelector('header.desk .search')
let searchPass_desk = header_desk.querySelector('header.desk .searchPass-desk')
let searchPassInput_desk = searchPass_desk.querySelector('input')

search_desk.onclick = (e)=> {
    e.stopPropagation();
    div = searchPass_desk
    background.style.zIndex = "99"
    pass("show")
    setTimeout(() => {
        searchPassInput_desk.focus()
    }, 50);
}
header_desk.onclick = () => {
    pass("hidden")
    setTimeout(() => {
        background.style.zIndex = ""
    }, 300);
}
nav_desk.onclick = () => {
    pass("hidden")
    setTimeout(() => {
        background.style.zIndex = ""
    }, 300);
}
searchPass_desk.onclick = e => e.stopPropagation()



// nav.desk -----------------------------------------------------------------------------------------------------------
//nav.desk
let headerDesk_height = header_desk.offsetHeight
let navDesk_height = nav_desk.offsetHeight

let scroll_initial = window.scrollY || window.pageYOffset;

window.addEventListener("scroll", () => {
    if (isBodyFixed) return;
    
    let scroll_now =  window.scrollY || window.pageYOffset;
    
    if (scroll_initial < scroll_now && scroll_now > 150){
        nav_desk.style.transform = 'translateY(-39px)'
    }
    if (scroll_initial >= scroll_now){
        nav_desk.style.transform = ''
    }
    scroll_initial = scroll_now
});
//menu_underline
let menu_underline= nav_desk.querySelector('.menu_underline');
let menu= nav_desk.querySelector('.menu')
let menuX= menu.getBoundingClientRect().left;
menu_underline.style.left = `${menuX}px`;

menu_underline.style.transition = "all 0.2s"

menuHover = (child) => {
    hoverTimeout= setTimeout(() => {        
        requestAnimationFrame(() => {
            let ChildRect = child.getBoundingClientRect();
            menu_underline.style.left = `${ChildRect.left}px`;
            menu_underline.style.width = `${ChildRect.width}px`;
        });
    }, 200);
}

menuUnhover = () => {
    menu_underline.style.width = '0';          
    setTimeout(() => {
        menu_underline.style.width = '0';          
    }, 200);
}



//.menuCategory-pass --------------------------------------------------------------------------------------------------
let category = document.querySelector('nav.desk .menuCategory')
let category_pass = document.querySelector('nav.desk .menuCategory-pass')

category.addEventListener('mouseover', (e) => {
    e.stopPropagation();
    if(div == searchPass_desk){
        pass("hidden")
    }
    div = category_pass;
    pass("show");
    background.style.zIndex = '99';
})
category.addEventListener('mouseout', () => {
    pass("hidden")
    background.style.zIndex = '';
})



//#present-products ---------------------------------------------------------------------------------------------------
//scrollButton
let present_products = document.querySelector('#present-products > div')
let ppR = document.querySelector('#present-products .scrollButton.R')
let ppL = document.querySelector('#present-products .scrollButton.L')
let ppScroll = present_products.clientWidth

ppR.onclick = ()=> present_products.scrollBy({ left: ppScroll, behavior: "smooth" }); // اسکرول به راست
    
ppL.onclick = ()=> present_products.scrollBy({ left: -ppScroll, behavior: "smooth" }); // اسکرول به چپ



// #slider ------------------------------------------------------------------------------------------------------------
// main function
let s= document.querySelector('#slider')
let picture=document.querySelector('#slider picture');
let a=document.querySelectorAll('#slider a');
let dots=document.querySelector('#slider .dots');
let number = a.length;
let x= 1;  
let y= number;

function slider(direction,button){
    
    a.forEach(element => {
        element.style.transition= "none";
    });
    
    a.forEach((element,index)=>{
        
        element.style.pointerEvents= "initial"
        
        let translate = new WebKitCSSMatrix(window.getComputedStyle(element).transform).m41 - endloc
        let elementWidth= element.offsetWidth;
        element.style.transition= "transform 0.3s";
        if(direction=="L"){
            
            element.style.transform = `translateX(${translate + elementWidth}px)`;
            
            if (index+1 == x){
                element.style.transition= "transform 0s";
                element.style.transform = `translateX(${translate - (elementWidth*(number-1))}px)`;
                y=x+1
            }
            
            if(button){
                reset_setinterval()
            }
        }
        
        if(direction=="R"){
            
            element.style.transform = `translateX(${translate - elementWidth }px)`;
            
            if (index+1 == y){
                element.style.transition= "transform 0s";
                element.style.transform = `translateX(${translate + (elementWidth*(number-1))}px)`; 
                x=y-1
            }
            
            if(button){
                reset_setinterval()
            }
        }
    })
    endloc=0
    
    spans.forEach((element,index) => {
        if(index==x || index+number==x){
            element.style.width="15px"
            element.style.backgroundColor="#ffffff"
        }
        else{
            element.style.width="7px"
            element.style.backgroundColor="#ffffff63"
        }
    });
    x = (x == number) ? 1 : x + 1;
    y = (y == 1) ? number : y - 1;
}
// creat dots
for(let i=0; i<number; i++){
    const span = document.createElement('span');
    dots.appendChild(span);
}
let spans=document.querySelectorAll('#slider .dots span');
// mouse and touch events
let touchMove,touchStart
let mousedown=false
let touchStartStatic
let endloc=0
let size
start = (event) => {
    touchStart = event.clientX || (event.touches && event.touches[0].clientX);
    touchStartStatic = event.clientX || (event.touches && event.touches[0].clientX);
    mousedown = true;
}

move = (event) => {
    if (mousedown) {
        touchMove = event.clientX || (event.touches && event.touches[0].clientX);
        let added = touchMove - touchStart;

        a.forEach(element => {
            element.style.pointerEvents = "none";
            element.style.transition = "none";
            let translate = new WebKitCSSMatrix(window.getComputedStyle(element).transform).m41;
            element.style.transform = `translateX(${translate + added}px)`;
            size = element.offsetWidth / 5;
        });
        touchStart = touchMove;
        clearInterval(intervalId);
    }
}

end = () => {
    if (mousedown) {
        endloc = touchMove - touchStartStatic;
        if (endloc > size) {
            slider("L");
            intervalId = setInterval(() => { slider("L") }, 5000);
        } else if (endloc < -size) {
            slider("R");
            intervalId = setInterval(() => { slider("L") }, 5000);
        } else {
            a.forEach(element => {
                element.style.pointerEvents = "initial";
                element.style.transition = "transform 0.3s";
                let translate = new WebKitCSSMatrix(window.getComputedStyle(element).transform).m41;
                element.style.transform = `translateX(${translate - endloc}px)`;
            });
            endloc = 0;
            reset_setinterval();
        }
    }
    mousedown = false;
}

picture.addEventListener('mousedown',start)
window.addEventListener('mousemove',move)
window.addEventListener('mouseup',end)
picture.addEventListener('touchstart',start)
window.addEventListener('touchmove',move)
window.addEventListener('touchend',end)
// setinterval
let intervalId= setInterval(()=>{slider("L")}, 5000);

function reset_setinterval()
{
    clearInterval(intervalId)
    intervalId= setInterval(()=>{slider("L")}, 5000);
}
// reset translate
function reset_translate()
{ 
    spans.forEach((element,index) => {
        element.style.width = ''
        element.style.backgroundColor = ''
    });

    a.forEach(element =>{
        element.style.transition= "none"
        element.style.transform = ''
    })
    x=1
    y=number
    reset_setinterval()
}

window.addEventListener('resize', reset_translate)

document.addEventListener('visibilitychange', reset_translate);


// .supermarket_pin----------------------------------------------------------------------------------------------------
let supermarket_div = document.querySelector('.supermarket_div')
let supermarket_pin = document.querySelector('.supermarket_pin')
let supermarket_pin_phone = document.querySelector('.supermarket_pin.phone')
let supermarket_pin_desk = document.querySelector('.supermarket_pin.desk')
let supermarket_pin_desk_p = supermarket_pin_desk.querySelector('i + p')
let supermarket_pin_desk_span = supermarket_pin_desk.querySelector('span')
let supermarket_pass= document.querySelector('.supermarketPass')
let supermarketI_pass = document.querySelector('.supermarketPass i')
let header = document.querySelector('header')

window.addEventListener('scroll', supermarketPin_phone)
window.addEventListener('scroll', supermarketPin_desk)

function supermarketPin_phone(){
    let loc_header = header.getBoundingClientRect().bottom
    let loc_supermarket_div = supermarket_div.getBoundingClientRect().bottom

    if(loc_supermarket_div <= loc_header+10)
        supermarket_pin_phone.style.transform = "translateX(-50%) translateY(-70px)"
    else
    supermarket_pin_phone.style.transform = "translateX(-50%) translateY(0px)"
}
function supermarketPin_desk(){
    
    let scrollPosition = window.scrollY || window.pageYOffset;
    if(scrollPosition > 700){
        supermarket_pin_desk_p.style.width = '133px'
        supermarket_pin_desk_span.style.width = '1.5px'
        supermarket_pin_desk.style.gap = '10px'
    }
    else{
        supermarket_pin_desk_p.style.width = '0'
        supermarket_pin_desk_span.style.width = '0'
        supermarket_pin_desk.style.gap = '3px'
    }
}



// .supermarketPass ---------------------------------------------------------------------------------------------------
supermarket_pin_phone.onclick = () => {
    div = supermarket_pass
    pass("show");
}
supermarket_pin_desk.onclick = () => {
    div = supermarket_pass
    pass("show");
}
    
supermarket_div.onclick = () => {
    div = supermarket_pass
    pass("show");
} 
supermarketI_pass.onclick = () => {
    pass("hidden");
}
supermarket_pass.onclick = e => e.stopPropagation()



// #digikala_services -------------------------------------------------------------------------------------------------
// scrollBar
get_varible = ()=>{
    digikala_services = document.getElementById('digikala_services');
    container = digikala_services.querySelector('.container');
    scrollcontainer = digikala_services.querySelector('.scroll');
    scrollspan = scrollcontainer.querySelector('span');

    containerFullWidth = container.scrollWidth
    containerShowWidth = container.offsetWidth

    scrollspan.style.width = `${scrollcontainer.offsetWidth/(containerFullWidth/containerShowWidth)}px`

    scrollcontainer.style.opacity = (containerFullWidth == containerShowWidth) ? '0' : '1';
}
get_varible()

window.addEventListener('resize', get_varible)

container.addEventListener('scroll', ()=>{

let scroll_left = container.scrollLeft

scrollspan.style.transform = `translateX(${scrollcontainer.offsetWidth/(containerFullWidth / scroll_left)}px)`
})



// .digikala_services-pass --------------------------------------------------------------------------------------------
let more = document.querySelector('#digikala_services .more')
let digikala_services_pass = document.querySelector('.digikala_services-pass')
let digikala_services_passI=document.querySelector('.digikala_services-pass i')

more.onclick = () => {
    div = digikala_services_pass
    pass("show");
}
digikala_services_passI.onclick = ()=> 
    pass("hidden")
digikala_services_pass.onclick = e => e.stopPropagation()



// #amazing -----------------------------------------------------------------------------------------------------------
// scrollButton
let amazing = document.querySelector('#amazing .suggestions')
let aR = document.querySelector('#amazing .scrollButton.R')
let aL = document.querySelector('#amazing .scrollButton.L')
let aScroll = amazing.clientWidth

aR.onclick = ()=> amazing.scrollBy({ left: aScroll, behavior: "smooth" }); // اسکرول به راست
    
aL.onclick = ()=> amazing.scrollBy({ left: -aScroll, behavior: "smooth" }); // اسکرول به چپ
// timer
let amazing_timer

let media = () => {
    if (window.innerWidth >= 1024)
        amazing_timer= document.querySelector('#amazing  .suggestions .timer') 
    else 
        amazing_timer= document.querySelector('#amazing  .top-bar .timer')
}

window.addEventListener('resize', () => {
    media()
    amazingTimeH = amazing_timer.querySelector('.H')
    amazingTimeM = amazing_timer.querySelector('.M')
    amazingTimeS = amazing_timer.querySelector('.S')
});

media()

let amazingTimeH = amazing_timer.querySelector('.H')
let amazingTimeM = amazing_timer.querySelector('.M')
let amazingTimeS = amazing_timer.querySelector('.S')

let H=22, M=0, S=0

let interval = setInterval(() => {
    if(S==0 && M==0 && H==0){
        clearInterval(interval)
        S++
    }
    if(S==0 && M==0 && H>0){
        M=60
        H--
    }
    if(S==0 && M>0){
        S=60
        M--
    }
    S--

    amazingTimeH.textContent=String(H).padStart(2, '0');
    amazingTimeM.textContent=String(M).padStart(2, '0');
    amazingTimeS.textContent=String(S).padStart(2, '0');
}, 1000);       
// price and percent
let suggestions = document.querySelectorAll('#amazing .suggestions a:not(.all):not(.right)');

suggestions.forEach(element => {

    percentANDprice(element)
});



// #shopingBYcategory -------------------------------------------------------------------------------------------------
// scrollButton
let shopingBYcategory = document.querySelector('#shopingBYcategory > div')
let scR = document.querySelector('#shopingBYcategory .scrollButton.R')
let scL = document.querySelector('#shopingBYcategory .scrollButton.L')
let scScroll = shopingBYcategory.clientWidth

scR.onclick = ()=> shopingBYcategory.scrollBy({ left: scScroll, behavior: "smooth" }); // اسکرول به راست
    
scL.onclick = ()=> shopingBYcategory.scrollBy({ left: -scScroll, behavior: "smooth" }); // اسکرول به چپ



// #MostPopularBrands -------------------------------------------------------------------------------------------------
// scrollButton
let MostPopularBrands = document.querySelector('#MostPopularBrands > div')
let mpbR = document.querySelector('#MostPopularBrands .scrollButton.R')
let mpbL = document.querySelector('#MostPopularBrands .scrollButton.L')
let mpbScroll = MostPopularBrands.clientWidth

mpbR.onclick = ()=> MostPopularBrands.scrollBy({ left: mpbScroll, behavior: "smooth" }); // اسکرول به راست
    
mpbL.onclick = ()=> MostPopularBrands.scrollBy({ left: -mpbScroll, behavior: "smooth" }); // اسکرول به چپ



// #best-selling ------------------------------------------------------------------------------------------------------
// scrollButton
let best_selling = document.querySelector('#best-selling > div')
let bsR = document.querySelector('#best-selling .scrollButton.R')
let bsL = document.querySelector('#best-selling .scrollButton.L')
let bsScroll = best_selling.clientWidth

bsR.onclick = ()=> best_selling.scrollBy({ left: bsScroll, behavior: "smooth" }); // اسکرول به راست
    
bsL.onclick = ()=> best_selling.scrollBy({ left: -bsScroll, behavior: "smooth" }); // اسکرول به چپ



// #selected-discounts ------------------------------------------------------------------------------------------------
// price and percent
let selected_discounts = document.querySelectorAll('#selected-discounts .container a')

selected_discounts.forEach(element => {

    percentANDprice(element)
});



// #hot ---------------------------------------------------------------------------------------------------------------
// scrollButton
let hot = document.querySelector('#hot > div')
let hotR = document.querySelector('#hot .scrollButton.R')
let hotL = document.querySelector('#hot .scrollButton.L')
let hotScroll = hot.clientWidth

hotR.onclick = ()=> hot.scrollBy({ left: hotScroll, behavior: "smooth" }); // اسکرول به راست
    
hotL.onclick = ()=> hot.scrollBy({ left: -hotScroll, behavior: "smooth" }); // اسکرول به چپ



// footer.phone--------------------------------------------------------------------------------------------------------
//open and close .links
dropdown = (element)=>{
    let span = element.querySelector('span')
    let links = element.querySelector('.links')
    
    if(links.style.height == "0px" || links.style.height === ""){
        links.style.height = "auto"
        span.style.transform = "rotate(90deg)"
    }
    else{
        links.style.height = "0px"
        span.style.transform = "rotate(-90deg)"
    }   
}



// footer.desk---------------------------------------------------------------------------------------------------------
// emailInput
let email = document.querySelector('footer.desk .four .left input')
let button = document.querySelector('footer.desk .four .left button')
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
email.addEventListener("input", function () {
    if (!validateEmail(email.value)) {
        button.style.backgroundColor = ""
    } else {
        button.style.backgroundColor = "#d83155"
    }
});



// article.introduction -----------------------------------------------------------------------------------------------
//copy text
let article_phone = document.querySelector('footer.phone article')
let article_desktop = document.querySelector('footer.desk article')
article_desktop.innerHTML = article_phone.innerHTML
//close and open introduction for phone and desktop
let introductions = document.querySelectorAll('.introduction')
let position = "close"

introductions.forEach(introduction => {
    let introduction_button = introduction.querySelector('button')
    
    introduction_button.onclick = ()=>{
        if(position == "close"){
            introduction.style.height = "auto"
            introduction_button.innerHTML = "بستن &#x276F"
            position = "open"
        }
        else{
            introduction.style.height = ""
            introduction_button.innerHTML = "مشاهده بیشتر &#x276F"
            position = "close"
        }
    }
    
})



// .onlineSupport -----------------------------------------------------------------------------------------------------
let qustions = document.querySelectorAll('.OnlineSupport .box .FAQ div')
let box = document.querySelector('.OnlineSupport .box')
let closeButton = document.querySelector('.OnlineSupport .box .head > i')
let icon = document.querySelector('.OnlineSupport')

let position_answer = 'none'

qustions.forEach(qustion => { 
    qustion.onclick = () => {
        let answer = qustion.querySelector('p')
        let arrow = qustion.querySelector('h6 i')
        let position = getComputedStyle(answer).getPropertyValue('display');   
    if(position == 'none'){
        answer.style.display = 'block';
        arrow.style.transform= 'rotate(180deg)'
    }
    else{
        answer.style.display = 'none' ;
        arrow.style.transform= 'rotate(0deg)'
    }
}
});
box_position = 'none'

closeButton.onclick = () => {
    box.style.display = 'none'
    box_position = 'none'
}
icon.onclick = () => {
    debugger
    if(box_position == 'none'){
        box.style.display = 'block'
        box_position = 'block'
    }    

    else{
        box.style.display = 'none'
        box_position = 'none'
    }
}

box.onclick = (e) => e.stopPropagation()
