var popupoverlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("add-button")

addbutton.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var popupcancelbook=document.getElementById("popup-cancel-book")

popupcancelbook.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var popupaddbook=document.getElementById("popup-add-book")
var popupbookname=document.getElementById("popuop-book-name")
var popupauthorname=document.getElementById("popup-author-name")
var popuptextarea=document.getElementById("popup-textarea")

popupaddbook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","container-content")
    div.innerHTML=`<h2>${popupbookname.value}</h2>
    <h5>${popupauthorname.value}</h5>
    <hp>${popuptextarea.value}</hp><br>
    <button onclick="deleteContainer(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

function deleteContainer(event){
    event.target.parentElement.remove()
}