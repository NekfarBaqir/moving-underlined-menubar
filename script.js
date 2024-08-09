const menu = document.querySelector("nav ul");
const menuLists = document.querySelectorAll("nav ul li");
const activeLine = document.querySelector(".line");

const moveHandler = (e) => {
  const left = e.target.offsetLeft;
  const width = e.target.offsetWidth;
  activeLine.style.opacity = 1;
  
  activeLine.style.left = `${left}px`;
  activeLine.style.width = `${width}px`;
};

// add mouse over event listeners to each menu list
menuLists.forEach((list) => {
  list.addEventListener("mouseover", moveHandler);
});

// add mouse out event listener to the menu
menu.addEventListener("mouseout", () => {
  activeLine.style.opacity = 0;
});

// init
menuLists[0].dispatchEvent(new Event("mouseover"));
