let chair =[
    {
        imagePath:"images/chair.png",
        name: "Chair",
        dm:"20x50x120",
        price: "150$"
    },
    {
        imagePath:"images/chair1.jpg",
        name: "Chair",
        dm:"20x50x120",
        price: "250$"
    },

    {
        imagePath:"images/chair3.jpeg",
        name: "Chair",
        dm:"20x50x120",
        price: "50$"
    },

    {
        imagePath:"images/chair4.jpeg",
        name: "Chair",
        dm:"20x50x120",
        price: "300$"
    }


],

sofa =[
    {
        imagePath:"images/sofa1.jpeg",
        name: "Sofa",
        dm:"20x50x120",
        price: "150$"
    },
    {
        imagePath:"images/sofa2.jpeg",
        name: "Sofa",
        dm:"20x50x120",
        price: "100$"
    },

    {
        imagePath:"images/sofa3.jpeg",
        name: "Sofa",
        dm:"20x50x120",
        price: "200$"
    },
    {
        imagePath:"images/sofa4.jpeg",
        name: "Sofa",
        dm:"20x50x120",
        price: "150$"
    },
    {
        imagePath:"images/sofa2.jpeg",
        name: "Sofa",
        dm:"20x50x120",
        price: "100$"
    }

],

bed =[
    {
        imagePath:"images/bed1.jpeg",
        name: "Bed",
        dm:"20x50x120",
        price: "300$"
    },
    {
        imagePath:"images/bed2.jpeg",
        name: "Bed",
        dm:"20x50x120",
        price: "400$"
    },
    {
        imagePath:"images/bed3.jpeg",
        name: "Bed",
        dm:"20x50x120",
        price: "450$"
    },
    {
        imagePath:"images/bed4.jpeg",
        name: "Bed",
        dm:"20x50x120",
        price: "299$"
    }

],

table =[
    {
        imagePath:"images/table1.jpeg",
        name: "Table",
        dm:"20x50x120",
        price: "250$"
    },
    {
        imagePath:"images/table2.jpeg",
        name: "Table",
        dm:"20x50x120",
        price: "200$"
    },
    {
        imagePath:"images/table3.jpeg",
        name: "Table",
        dm:"20x50x120",
        price: "220$"
    },
    {
        imagePath:"images/table.jpg",
        name: "Table",
        dm:"20x50x120",
        price: "270$"
    },
    {
        imagePath:"images/table3.jpeg",
        name: "Table",
        dm:"20x50x120",
        price: "270$"
    }

];

let menuBtns = document.querySelectorAll("#menuBtn button");
let menuContainer = document.querySelector("#menu .container");
showAllData();
let addCards = document.querySelectorAll(".card button");

menuBtns[0].addEventListener('click',showAllData);
menuBtns[1].addEventListener('click',()=>{clearContainer(); showData(chair);  addCards = document.querySelectorAll(".card button"); });
menuBtns[2].addEventListener('click',()=>{clearContainer(); showData(sofa);   addCards = document.querySelectorAll(".card button"); });
menuBtns[3].addEventListener('click',()=>{clearContainer(); showData(bed);    addCards = document.querySelectorAll(".card button"); });
menuBtns[4].addEventListener('click',()=>{clearContainer(); showData(table);  addCards = document.querySelectorAll(".card button"); });

// UP button 
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

// count 
let span = document.getElementById("count");
if(getCookie("count")){
    span.textContent = getCookie("count");
}
else{
    span.textContent = 0;
    setCookie('count', 0);
}


// add button
setInterval(()=>{
    addCards = document.querySelectorAll(".card button");
    for(var i =0; i < addCards.length ; i++){
        addCards[i].onclick = function(){
            updateCounter();        
        }
    }
},100);

