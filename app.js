const poNumbers=document.querySelectorAll('#orderList tr');
const logo=document.querySelector('#logo');
const accordionListItems=document.querySelectorAll('.accordion-list-item');
const orderCards=document.querySelectorAll('.order-card');
const goBack=document.querySelector('.go-back');

for(let poNumber of poNumbers)
{
    poNumber.addEventListener('click',()=>{
        location.replace('./order-details.html');
    })
}

for(let card of orderCards)
{
    card.addEventListener('click',()=>{
        location.replace('./order-details.html'); 
    })
}

for(let item of accordionListItems)
{
    item.addEventListener('click',()=>{
        let vw=Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if(vw<=576)
            location.replace('./order-mobile.html');
    })
}

goBack.addEventListener('click',()=>{
    let vw=Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        if(document.URL.includes('order-details.html') && vw<=576)
            location.replace('./order-mobile.html');
        else
            location.replace('./index.html');
})


logo.addEventListener('click',()=>{
    location.replace('./index.html')
})