// const moviesList = [{ movieName: "Flash", price: 7 },{ movieName: "Spiderman", price: 5 },{ movieName: "Batman", price: 4 }]
// function UpdateMoveList(moveList){
//     if (moveList.movieName === "Flash"){
//         let moveElement = document.createElement("option")
//         moveElement.classList.add("moveOptions")
//         moveElement.value = moveList.movieName
//         moveElement.innerHTML = moveList.movieName
//         moveElement.textContent = moveList.movieName + " $" + moveList.price;
//         let parentElement = document.querySelector("#selectMovie")
//         parentElement.appendChild(moveElement)
//         parentElement.addEventListener("click",updateMovieNamePrcie)
//         let tragetFinalPrice = document.querySelector("#totalPrice")
//         // tragetFinalPrice.innerHTML = "$"+moveList.price
//       }
//         else{
//             let moveElement = document.createElement("option")
//             moveElement.classList.add("moveOptions")
//             moveElement.value = moveList.movieName
//             moveElement.innerHTML = moveList.movieName
//             moveElement.textContent = moveList.movieName + " $" + moveList.price; 
//             let parentElement = document.querySelector("#selectMovie")
//             parentElement.appendChild(moveElement)
//             parentElement.addEventListener("click",updateMovieNamePrcie)
//         }
       
       

    
// }

// function updateMovieNamePrcie() {
//     let selectedOption = document.querySelector("#selectMovie option:checked");
    
//     if (selectedOption) {
//       let targetMovieName = document.querySelector("#movieName")
//       let targetMoviePrice = document.querySelector("#moviePrice")
//       let tragetFinalPrice = document.querySelector("#totalPrice")
//       targetMovieName.innerHTML=selectedOption.value
//       targetMoviePrice.innerHTML="$ "+moviesList.find(movie => movie.movieName === selectedOption.value).price
//       ///tragetFinalPrice.innerHTML="$"+moviesList.find(movie => movie.movieName === selectedOption.value).price

//     }
//   }
//   /// for seats
//   function seats() {
//     let allSeats = document.querySelectorAll(".seat");
//     // Iterate through each seat and add the click event listener
//     allSeats.forEach(seat => {
//       seat.addEventListener("click", (e) => { seatInfo(e) });
//     });
//   }
//   let numberOfSeatsCount=0
//   let finalCount=0
//   let selectedSeatSection = document.querySelector("#selectedSeatsHolder")
//   let unSelected = document.querySelector(".noSelected")
//   function seatInfo(e) {
//     let currentSeatPrice = parseInt(document.querySelector("#moviePrice").textContent.split("$")[1])
//     let tragetFinalPrice = document.querySelector("#totalPrice")
//     let numberOfSeats = document.querySelector("#numberOfSeat")
//     if (e.srcElement.classList.contains("seat")){
//       if(!(e.srcElement.classList.contains("occupied"))){
//         // selectedSeatSection.appendChild(e.srcElement)
//         e.srcElement.classList.add("occupied","selected")
//         numberOfSeats.textContent =`${numberOfSeatsCount+=1}`;
//         finalCount+=currentSeatPrice
//         tragetFinalPrice.textContent= "$"+(finalCount)
//         unSelected.style.display="none"
//         console.log(e)
//       }
//     }
// }
// seats()
// let selectedSeats=document.querySelectorAll(".selected")
// let continueButton = document.querySelector(".proceedBtnEl")
// continueButton.addEventListener("click",checkSelectedSeats)
// function checkSelectedSeats(){
//   let numberOfSeats = document.querySelector("#numberOfSeat").textContent
//   console.log(numberOfSeats)

//   if (numberOfSeats==0){
//     alert("Oops! no seat Selected")
//   }
//   else{
//     selectedSeats.forEach((seat)=>{
//       seat.classList.add("occupied")
//       seat.classList.remove("selected")
//     })
//     alert("Yayy! Your Seats have been booked")
//   }
// }
// let cancelButton = document.querySelector(".cancelBtn")
// let targetMoviePrice = document.querySelector("#moviePrice")

// cancelButton.addEventListener("click", cancelFunction)

// function cancelFunction(){
//   targetMoviePrice.textContent=0

// }
//   // Call the seats function to initialize the event listeners

  



// moviesList.forEach((movie)=>{UpdateMoveList(movie)})

// //Add eventLister to each unoccupied seat
// //Add eventLsiter to continue Button
// //Add eventListerner to Cancel Button
// // const moviesList = [
// //     { movieName: "Flash", price: 7 },
// //     { movieName: "Spiderman", price: 5 },
// //     { movieName: "Batman", price: 4 }
// // ];

// // function updateMoviesList(movieList) {
// //     let movieElement = document.createElement("option");
// //     movieElement.value = movieList.movieName;
// //     movieElement.textContent = movieList.movieName + " $" + movieList.price;
// //     let parentElement = document.querySelector("#selectMovie");
// //     parentElement.appendChild(movieElement);
// // }

// // function updateEvents() {
// //     console.log("hello");
// // }

// // moviesList.forEach((movie) => {
// //     updateMoviesList(movie);
// // });

// // document.querySelector("#selectMovie").addEventListener("change", updateEvents);

//Create you project here from scratch
const moviesList = [
  { movieName: "Flash", price: 7 },
  { movieName: "Spiderman", price: 5 },
  { movieName: "Batman", price: 4 },
];
//input section
const selectMovieEl = document.getElementById("selectMovie");

const allSeatCont = document.querySelectorAll("#seatCont .seat");
console.log(allSeatCont)

const selectedSeatsHolderEl = document.getElementById("selectedSeatsHolder");

const moviePriceEl = document.getElementById("moviePrice");

const cancelBtnEL = document.getElementById("cancelBtn");

const proceedBtnEl = document.getElementById("proceedBtn");
//dynamic filling of movie-items in drop-down list
moviesList.forEach((movie) => {
  const optionEl = document.createElement("option");
  optionEl.innerHTML = `${movie.movieName} $${movie.price}`;
  selectMovieEl.appendChild(optionEl)
});

let moviePrice = 7;
let currentMovieName = "Tom and Jerry 2021";
//event-listener on the selected movie from the list
selectMovieEl.addEventListener("input", (e) => {
  let movieName = e.target.value.split("");
  let dollarIndex = movieName.indexOf("$");
  let movie = movieName.splice(0, dollarIndex - 1).join("");
  currentMovieName = movie;
  moviePrice = JSON.parse(movieName.splice(2, dollarIndex).join(""));

  updatMovieName(movie, moviePrice);
  updatePrice(moviePrice, takenSeats.length);
});
// looping on the seatsCont 
let initialSeatValue = 0;
allSeatCont.forEach((seat) => {
  const attr = document.createAttribute("data-seatid");
  attr.value = ++initialSeatValue;
  seat.setAttributeNode(attr);
});

let seatContEl = document.querySelectorAll("#seatCont .seat:not(.occupied)");
// console.log(seatContEl);
let takenSeats = [];
//adding ecent listener on each seats
seatContEl.forEach((seat) => {
  seat.addEventListener("click", (e) => {
    let isSelected = seat.classList.contains("selected");

    let seatId = JSON.parse(seat.dataset.seatid);

    if (!isSelected) {
      seat.classList.add("selected");
      takenSeats.push(seatId);
      takenSeats = [...new Set(takenSeats)];
    } else if (isSelected) {
      seat.classList.remove("selected");

      takenSeats = takenSeats.filter((seat) => {
        // console.log(seat,seatId)
        if (seat !== seatId) {
          return seat;
        }
      });
    }
    updateSeats();
    updatePrice(moviePrice, takenSeats.length);
  },{ once: true });
});
//updating seats once selected or some seats booked
function updateSeats() {
  selectedSeatsHolderEl.innerHTML = ``;

  takenSeats.forEach((seat) => {
    const seatHolder = document.createElement("div");
    seatHolder.classList.add("selectedSeat");
    selectedSeatsHolderEl.appendChild(seatHolder);

    seatHolder.innerHTML = seat;
  });

  if (!takenSeats.length) {
    const spanEl = document.createElement("span");
    spanEl.classList.add("noSelected");
    spanEl.innerHTML = "NO SEAT SELECTED";
    selectedSeatsHolderEl.appendChild(spanEl);
  }

  seatCount();
}
//get the count of seats
function seatCount() {
  const numberOfSeatEl = document.getElementById("numberOfSeat");
  numberOfSeatEl.innerHTML = takenSeats.length;
}
//updating movie name when selected from list
function updatMovieName(movieName, price) {
  const movieNameEl = document.getElementById("movieName");
  const moviePriceEl = document.getElementById("moviePrice");
  movieNameEl.innerHTML = movieName;
  moviePriceEl.innerHTML = "$" +`${price}`;
  
}
//updating price
function updatePrice(price, seats) {
  const totalPriceEl = document.getElementById("totalPrice");
  let total = seats * price;
  totalPriceEl.innerHTML = "$"+ `${total}`;
}

cancelBtn.addEventListener("click", (e) => {
  cancelSeats();
});
//to cancel the seats
function cancelSeats() {
  takenSeats = [];
  seatContEl.forEach((seat) => {
    seat.classList.remove("selected");
  });
  updatePrice(0, 0);
  updateSeats();
}

proceedBtnEl.addEventListener("click", (e) => {
  if (takenSeats.length) {
    alert("Yayy! Your Seats has been booked");
    uncancelSeats();
  } else {
    alert("Oops no seat Selected");
  }
});
//to recancel the seats
function uncancelSeats() {
  takenSeats = [];
  console.log(seatContEl);
  seatContEl.forEach((seat) => {
    if(seat.classList.contains("selected")){
      console.log(seat);
    seat.classList.remove("selected");
      seat.classList.add("seat")
    seat.classList.add("occupied");
    }
  });
  updatePrice(0, 0);
  updateSeats();
  }