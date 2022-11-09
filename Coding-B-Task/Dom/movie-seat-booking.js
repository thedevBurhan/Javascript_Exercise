const container=document.querySelector(".container");
const seats =document.querySelectorAll(".row .seat:not(.occupied)");
const count=document.getElementById("count");
const total=document.getElementById("total");
const movieSelect=document.getElementById('movie');

let ticketPrice =movieSelect.value;
// The target event property returns the element that triggered the event. The target property gets the element on which the event originally occurred,
// Enable or disable JavaScript without the hassle. Toggle JavaScript provides a simple, easy-to-access browser button to enable or disable JavaScript globally.

// Update total and count
function updateSelectedCount(){
    const selectedSeats =document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount=selectedSeats.length;
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount*ticketPrice;
}
// Movie Select Event
// The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).
movieSelect.addEventListener('change',function(a){
    ticketPrice=a.target.value;
    updateSelectedCount();
})

container.addEventListener('click',function(a){
   if(a.target.classList.contains('seat') && !a.target.classList.contains('occupied')
   ){
    a.target.classList.toggle('selected');

    updateSelectedCount();
   }
});
var x=25;
var x=21;
console.log(x);