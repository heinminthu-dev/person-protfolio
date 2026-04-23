// function checkFlexGap(){
//     var flex = decodeURIComponent.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexDirection = "column";
//     flex.style.rowGap = "1px";
//     flex.appendChild(document.createElement("div"));
//     flex.appendChild(document.createElement("div"));
//     document.body.appendChild(flex);
//     var isSupported = flex.scrollHeight === 1;
//     flex.parentNode.removeChild(flex);
//     console.log(isSupported);
//     if(!isSupported) document.body.classList.add("no-flexbox-gap");

 
// }
// checkFlexGap();
// //sticky nav
// const sectionHeroEl = document.querySelector(".section-hero");
// const obs = new IntersectionObserver(
//     function(entries){
//         const ent = entries[0];
//         console.log(ent);
//         if(ent.isIntersectiog === false){
//             document.body.classList.add("sticky");
//         }
//         if(ent.isIntersecting === true){
//             document.body.classList.remove("sticky");

//         }
//     },
//    { 
//     root:null,
//     threshold:0,
//     rootMargin:"-80px",
// }
// );
// obs.observe(sectionHeroEl);
//////more details

const btnMoreDetails = document.querySelector(".btn--more-details");
btnMoreDetails.addEventListener("click", function(e){
    e.preventDefault();
    const id = btnMoreDetails.getAttribute("href");

    document.querySelector(id).scrollIntoView({behavior:"smooth"});
});

const text = document.querySelector(".sec-text");

const textload= ()=>{
    setTimeout(()=>{
        text.textContent = "Software Developer";
    }, 0);
    setTimeout(()=>{
        text.textContent = "Junior Developer";
    }, 4000);
    setTimeout(()=>{
        text.textContent = "Web Developer";
    }, 8000);
}

setInterval(textload, 12000);