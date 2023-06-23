const like = document.querySelectorAll(".mainlike");
const likecheck = {};

like.forEach((element) => {
  let id = element.id;
  likecheck[id] = false;
  element.addEventListener("click", (event) => {
    console.log("check");
    if (likecheck[id] == false) {
      likecheck[id] = true;
      element.innerHTML = `<i class="fa-solid fa-heart likebutton once-beat" id="likeheart1"></i>`;
      element.querySelector("#likeheart1").addEventListener(
        "animationend",
        () => {
          console.log("이벤트 작동");
        },
        { once: true }
      );
    } else {
      likecheck[id] = false;
      element.innerHTML = `<i class="fa-regular fa-heart" id="likeheart1"></i>`;
    }
  });
});
