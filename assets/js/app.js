const elMealName = document.querySelector("#name");
const elMealCost = document.querySelector("#price");
const elMealImgLink = document.querySelector("#img-url");
const elMealChef = document.querySelector("#chef");
const elRestaurant = document.querySelector("#restaurant");
const elOrderWrapper = document.querySelector("#order-wrapper");
const elForm = document.querySelector("#form");
const elModal = document.querySelector("#modal");
const elAcceptBtn = document.querySelector('.btn-accept');
const elRejectBtn = document.querySelector('.btn-reject');
const elExitIcon = document.querySelector('.exit');

elForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const order = document.createElement('div');
  order.className = "order";
  elOrderWrapper.prepend(order);

  const mealImg = document.createElement('img');
  mealImg.src = elMealImgLink.value;
  order.appendChild(mealImg);

  const MealDescription = document.createElement("div");
  const mealName = document.createElement('p');
  const mealCost = document.createElement('p');
  const mealChef = document.createElement('p');
  const restaurant = document.createElement('p');
  mealName.innerHTML = `<strong>Taom nomi</strong>: ${elMealName.value}`;
  mealCost.innerHTML = `<strong>Taom narxi: $${elMealCost.value}</strong>`;
  mealChef.innerHTML = `<strong>Taom Oshpazi</strong> ${elMealChef.value}`;
  restaurant.innerHTML = `<strong>Taom restorani</strong>: ${elRestaurant.value}`;
  MealDescription.appendChild(mealName);
  MealDescription.appendChild(mealCost);
  MealDescription.appendChild(mealChef);
  MealDescription.appendChild(restaurant);
  order.appendChild(MealDescription);

  const buttons = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const completeBtn = document.createElement('button');
  const showTimeBtn = document.createElement('button');
  const time = new Date();
  const createdTime = String(time.getMonth()).padStart(2, '0') + '/' + String(time.getDate()).padStart(2, '0') + '/' + String(time.getFullYear());
  deleteBtn.innerText = "Taomni o'chirish";
  showTimeBtn.innerHTML = createdTime;
  completeBtn.innerText = 'Taom tugadi';

  buttons.appendChild(deleteBtn);
  buttons.appendChild(showTimeBtn);
  buttons.appendChild(completeBtn);
  order.appendChild(buttons);

  completeBtn.addEventListener('click', () => {
    order.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    elModal.style.display = 'grid';
    elAcceptBtn.addEventListener('click', () => {
      order.remove();
      elModal.style.display = 'none';
      elMealName.focus();
    })
  });
})

function modalClocer() {
  elModal.style.display = 'none';
}

elExitIcon.addEventListener("click", modalClocer);
elRejectBtn.addEventListener('click', modalClocer);