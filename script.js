const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieselect = document.getElementById("movie");

let ticketprice = movieselect.value;

function updateselectedcount() {
  const selectedseats = document.querySelectorAll(".row .seat.selected");
  const selectedseatcount = selectedseats.length;

  count.innerText = selectedseatcount;
  total.innerText = selectedseatcount * ticketprice;
}

movieselect.addEventListener("change", (e) => {
  ticketprice = +e.target.value;
  updateselectedcount();
});

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateselectedcount();
  }
});
