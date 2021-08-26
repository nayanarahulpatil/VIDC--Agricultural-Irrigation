
 function clickme(){
  alert("hi")
}
function btn_play_video(){
  alert("hi")
}
function openNav() { 
  console.log("log")
    var navbar1= document.getElementById("primarynavbar");
  navbar1.style.width="70%";
  console.log("hi")
  navbar1.classList.replace("nav","overlay");
  document.getElementById("closebtn").classList.replace("closebtnhide","closebtn");
  document.getElementById("listcontainer").classList.replace("secondry_nav_menu","secondry_nav_menu_mobile")
  document.getElementById("navitemlist").classList.replace("secondry_menu_container_items","secondry_menu_container_items_mobile")
  document.getElementById("primary_list_container").classList.replace("primary_menu_container","primary_menu_container_mobile")
  document.getElementById("primary_list_container_items").classList.replace("primary_menu_container_items","primary_menu_container_items_mobile")

  }
  
  function closeNav() {
    var navbar2= document.getElementById("primarynavbar");
    navbar2.style.width = "0%"
    navbar2.classList.replace("overlay","nav");
    document.getElementById("closebtn").classList.replace("closebtn","closebtnhide");
    document.getElementById("listcontainer").classList.replace("secondry_nav_menu_mobile","secondry_nav_menu")
    document.getElementById("navitemlist").classList.replace("secondry_menu_container_items_mobile","secondry_menu_container_items")
    document.getElementById("primary_list_container").classList.replace("primary_menu_container_mobile","primary_menu_container")
    document.getElementById("primary_list_container_items").classList.replace("primary_menu_container_items_mobile","primary_menu_container_items")
  }
 function btn_knowMore(){
alert("hi");
  }