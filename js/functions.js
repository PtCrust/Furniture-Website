function createCard(element){
    let menuContainer = document.querySelector("#menu .container");
    let div = document.createElement("div"),
    img = document.createElement("img"),
    h2 = document.createElement("h2"),
    h3 = document.createElement("h3"),
    addBtn = document.createElement("button");

    div.setAttribute("class", "card");
    img.setAttribute("src", element.imagePath);
    h2.textContent = element.name + " " + element.price;
    h3.textContent = element.dm;
    addBtn.textContent ="Add to Card";
    // addBtn.setAttribute("onclick",'updateCounter');

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(addBtn);
    menuContainer.appendChild(div);     
   
}

function showData(element){
    element.forEach(item => {
    createCard(item);   
   });
}

function showAllData(){
    clearContainer();
    showData(bed);
    showData(chair);
    showData(sofa);
    showData(table);
}

function clearContainer(){
    let menuContainer = document.querySelector("#menu .container");
    menuContainer.innerHTML=null;
}


function setCookie(cookieName, cookieValue) {
    var date = new Date();
    date.setDate(date.getDate() + 1);
    document.cookie = `${cookieName}=${cookieValue};expires=${date};`;
}

function getCookie(cookieName) {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      cookies[i] = cookies[i].replace(" ", "");
      cookies[i] = cookies[i].split("=");
      if (cookies[i][0] == cookieName) {
        return cookies[i][1];
      }
    }
  }

  function updateCounter(){
    let count = parseInt(getCookie("count"));   
    count++;
    setCookie("count", count);
    var counter = document.getElementById("count");
    counter.textContent = count;
}



let myspan = document.getElementById("count");
if(getCookie("count")){
    myspan.textContent= getCookie("count");
}
else{
    myspan.textContent = 0;
    setCookie('count',0);
}

// When the user scrolls down 200px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
