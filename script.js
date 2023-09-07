const addbtn = document.querySelector(".form__btn");
const input = document.querySelector(".form__input");
const container = document.querySelector(".container");
//adding task
addbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.length === 0) {
    return;
  } else {
    const html = `
        <div class="task">
        <p class="task__text">${input.value}</p>
        <svg width="35" height="35" class="delete__btn">
          <use xlink:href="./Assets/sprite.svg#icon-bin"></use>
        </svg>
      </div>
        `;
    container.insertAdjacentHTML("beforeend", html);
    //removing button by using event delegation
    const deletebtn = document.querySelectorAll(".delete__btn");
    deletebtn.forEach((d) => {
      d.addEventListener("click", function () {
        d.parentNode.style.display = "none";
      });
    });
    input.value = "";
  }
});
//removing task
