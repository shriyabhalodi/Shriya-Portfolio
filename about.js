var tablinks = document.getElementById("tab-links");
var tabcontents = document.getElementById("tab-contents");

function opentab(tabname){

  for(tablink for tablinks){
    tablink.classList.remove("active-link");
  }
  for(tabcontent for tabcontents){
    tabcontent.classList.remove("active-tab");
  }
}