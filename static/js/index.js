window.addEventListener("resize",()=>{ window.location.reload()});

const main_content = document.querySelector("main");
const nav_mobile = document.querySelector(".nav-mobile");
const nav_links = document.querySelector(".nav-links");

if(window.innerWidth < 992){
  add_mobile_events();
}

function add_mobile_events() {
  document.querySelector(".menu-open").addEventListener("click", ()=>show_menu());
  document.querySelector(".menu-close").addEventListener("click", ()=>hide_menu());
  document.querySelectorAll(".section-link").forEach(link=>{
    link.addEventListener("click", ()=>hide_menu());
  });
}

function show_menu() {
  nav_mobile.style.display = "none";
  nav_links.classList.remove("drop-up");
  nav_links.classList.add("drop-down");
  nav_links.style.display = "flex";
  main_content.style.pointerEvents = "none";
  main_content.style.scrollBehavior = "none";
}

function hide_menu() {
  nav_links.classList.remove("drop-down");
  nav_links.classList.add("drop-up");
  setTimeout(() => {
    nav_mobile.style.display = "flex"
    nav_links.style.display = "none"
  }, 1000); 
}