//*** Make sure the DOM has loaded before messing with it ***//

if (document.readyState === "complete") {
  runExpCode();
} else {
  window.addEventListener("onload", runExpCode, false);
}

function runExpCode() {
  
  console.log("script from github loaded");
  
  
  //*** Adding new CSS ***//

  let css = `
body, .site-content {background:#fefefe;}
.exp-bluebg {background:#00c8ff;}
    `,
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  

  //*** Adding a class to an HTML element ***

  let header = document.querySelector(".main-video__container");
  //make sure the element exists to avoid js errors
  if (typeof header != "undefined" && header != null) {
    //add new class
    header.classList.add("exp-bluebg");
  }
  

  //*** Changing text ***//

  let teaserHeader = document.querySelector(".teaser-block__header__title");
  //make sure the element exists to avoid js errors
  if (typeof teaserHeader != "undefined" && teaserHeader != null) {
    //change text
    teaserHeader.innerText = "höjdpunkter";
  }
  

  //*** Inserting new HTML element ***
 
  //This is what the new element should look like:
  //=========
  //<li class="site-footer__nav-link">
  //<a href="/sv-se/">Testlänk</a>
  //</li>
  
  let footerNav = document.querySelector(".site-footer__nav-wrapper ul");
  //make sure the element exists to avoid js errors
  if (typeof footerNav != "undefined" && footerNav != null) {
    //create element
    let newLi = document.createElement("li"),
      newHref = document.createElement("a"),
      newHrefText = document.createTextNode("Testlänk"); 
    newLi.classList.add("site-footer__nav-link");
    newHref.setAttribute("href", "/sv-se/");
    //insert element
    newHref.appendChild(newHrefText);
    newLi.appendChild(newHref);
    footerNav.appendChild(newLi);
  }
  
  
}
