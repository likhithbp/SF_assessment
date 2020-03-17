import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
  elements.searchInput.value = "";
};

export const clearResults = () => {
  elements.searchResList.innerHTML = "";
  elements.searchResPages.innerHTML = "";
};

export const clearResultsRight = () => {
  elements.searching.innerHTML = "";
};

export const highlightSelected = id => {
  const resultsArr = Array.from(document.querySelectorAll(".results__link"));
  resultsArr.forEach(el => {
    el.classList.remove("results__link--active");
  });
  document
    .querySelector(`.results__link[href*="${id}"]`)
    .classList.add("results__link--active");
};

export const limitSearchTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split("").reduce((acc, curr) => {
      if (acc + curr.length <= limit) {
        newTitle.push(curr);
      }
      return acc + curr.length;
    }, 0);

    return `${newTitle.join("")} ...`;
  }
  return title;
};

const renderCust = cust => {
  const markup = `<li>
    <a class="results__link" href="#${cust.NAME}">
        <figure class="results__fig">
            <img src="img/oppoLogo.png" alt="${cust.NAME}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitSearchTitle(cust.NAME)}</h4>
            <p class="results__author">${cust.CITY}</p>
        </div>
    </a>
</li> `;

  elements.searchResList.insertAdjacentHTML("beforeend", markup);
};

const renderCustomerRight = cust => {
  const markup = `<li>
    <a class="results__link" href="#${cust.NAME}">
        <figure class="results__fig">
            <img src="img/customer.png" alt="${cust.NAME}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitSearchTitle(cust.NAME)}</h4>
            <p class="results__author">${cust.WEBSITE}</p>
        </div>
    </a>
</li> `;

  elements.searching.insertAdjacentHTML("beforeend", markup);
};

const renderRepsRight = cust => {
  const markup = `<li>
    <a class="results__link" href="#${cust.name}">
        <figure class="results__fig">
            <img src="img/reps.jpg" alt="${cust.name}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitSearchTitle(cust.name)}</h4>
            <p class="results__author">${cust.email}</p>
        </div>
    </a>
</li> `;

  elements.searching.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = cust => {
  cust.forEach(renderCust);
};

export const renderResultsOfCustomers = cust => {
  cust.forEach(renderCustomerRight);
};

export const renderResultsOfReps = cust => {
  cust.forEach(renderRepsRight);
};
