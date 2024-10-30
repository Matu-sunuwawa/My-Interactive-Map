

let C_Name_desktop = document.getElementById("name_desktop")
let C_Capital_desktop = document.getElementById("Capital_desktop")
let C_Map_desktop = document.getElementById("map_desktop")
let C_Name_mobile = document.getElementById("name_mobile")
let C_Capital_mobile = document.getElementById("Capital_mobile")
let C_Map_mobile = document.getElementById("map_mobile")

let Close_desktop = document.getElementById("close_desktop")
let Close_mobile = document.getElementById("close_mobile")
let d_container_desktop = document.getElementById("d_container_desktop")
let d_container_mobile = document.getElementById("d_container_mobile")

/* Show on medium and larger screens */
const mediumAndLargeScreen = window.matchMedia('(min-width: 768px)');
/* Show on small screens */
const smallScreen = window.matchMedia('(max-width: 768px)');


var svg = function() {
    console.log(document.getElementById('sinoptic').contentDocument)
    return  document.getElementById('sinoptic').contentDocument;
}
var myText = function(data) {
    // var ms = svg().getElementById('MR');
    var all_country = svg().querySelectorAll('path');

    all_country.forEach((country)=>{
        country.addEventListener("mouseover",()=>{
            country.style.cursor = 'pointer';
            country.style.fill = '#6B2A7E';
        })
        country.addEventListener("mouseout",()=>{
            country.style.cursor = 'auto';
            country.style.fill = '';
        })
    })
    // ms.onmouseover = function(e) {
    //     ms.style.cursor = 'pointer';
    //     ms.style.fill = '#6B2A7E';
    // };
    // ms.onmouseout = function(e) {
    //     ms.style.cursor = 'auto';
    //     ms.style.fill = '#D6D6D6';
    // };
}

var apifun = function(country_name){
    let api = `https://restcountries.com/v3.1/name/${country_name}`

    fetch(api).then((response)=>{
        return response.json()
    }).then((country_data)=>{
        console.log(country_data)
        if (mediumAndLargeScreen.matches) {
            C_Name_desktop.innerHTML=country_data[0].name.common
            C_Capital_desktop.innerHTML=country_data[0].capital[0]
            C_Map_desktop.href=country_data[0].maps.googleMaps
        }
        else if (smallScreen.matches) {
            C_Name_mobile.innerHTML=country_data[0].name.common
            C_Capital_mobile.innerHTML=country_data[0].capital[0]
            C_Map_mobile.href=country_data[0].maps.googleMaps
        }
    })
}

var animboxin = function(){
    gsap.fromTo(".box", {
        scale:0.1,
        y:40,
        autoAlpha:0
    },{
        duration: 1,
        scale: 1,
        y: 40,
        autoAlpha:1,
        ease: "power1.inOut",
        stagger: {
          grid: [7,15],
          from: "end",
          amount: 0.2
        }
      });
}

var myTitle = function(data) {
    // var all_country = svg().getElementById('MR');
    // var all_country = svg().querySelectorAll('path');
    var st0_country = svg().querySelectorAll('.st0');
    var st1_country = svg().querySelectorAll('.st1');
    var st2_country = svg().querySelectorAll('.st2');

    if (mediumAndLargeScreen.matches) {
        st0_country.forEach((country)=>{
            country.addEventListener("click",()=>{
                console.log(country.getAttribute('title'))
                d_container_desktop.style.display="flex"
                animboxin()
                apifun(country.getAttribute('title'))
            })
        })
        st1_country.forEach((country)=>{
            country.addEventListener("click",()=>{
                console.log(country.getAttribute('title'))
                d_container_desktop.style.display="flex"
                animboxin()
                apifun(country.getAttribute('title'))
            })
        })
        st2_country.forEach((country)=>{
            country.addEventListener("click",()=>{
                console.log(country.getAttribute('title'))
                d_container_desktop.style.display="flex"
                animboxin()
                apifun(country.getAttribute('title'))
            })
        })
    }
    else if (smallScreen.matches) {
        st0_country.forEach((country)=>{
            country.addEventListener("click",()=>{
                console.log(country.getAttribute('title'))
                d_container_mobile.style.display="flex"
                animboxin()
                apifun(country.getAttribute('title'))
            })
        })
        st1_country.forEach((country)=>{
            country.addEventListener("click",()=>{
                console.log(country.getAttribute('title'))
                d_container_mobile.style.display="flex"
                animboxin()
                apifun(country.getAttribute('title'))
            })
        })
        st2_country.forEach((country)=>{
            country.addEventListener("click",()=>{
                console.log(country.getAttribute('title'))
                d_container_mobile.style.display="flex"
                animboxin()
                apifun(country.getAttribute('title'))
            })
        })
    }
    // all_country.addEventListener("click",()=>{
    //     console.log(all_country.getAttribute('title'))
    //     d_container.style.display="flex"
    //     animboxin()
    //     apifun(all_country.getAttribute('title'))
    // })
}

var animboxOut = function(){
    gsap.to(".box", {
        duration: 1,
        scale: 0.1,
        y: 40,
        autoAlpha:0,
        ease: "power1.inOut",
        stagger: {
          grid: [7,15],
          from: "end",
          amount: 0.2
        },onComplete:() =>{
            d_container_desktop.style.display="none"
            d_container_mobile.style.display="none" 
        }
      });
}

var close = function(data){
    if (mediumAndLargeScreen.matches) {
        Close_desktop.addEventListener("click",()=>{
            animboxOut()
        })
    }
    else if(smallScreen.matches) {
        Close_mobile.addEventListener("click",()=>{
            animboxOut()
        })
    }
}

var resize = function(data) {
    window.addEventListener('resize', function(event){
        this.window.location.reload()
    });
}

var main = function() {
    myText();
    myTitle();
    close();
    resize();
    
    // mySquare();
}