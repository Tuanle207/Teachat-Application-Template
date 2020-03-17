{
  document.querySelector(".expand-button").addEventListener("click", e => {
    e.preventDefault();
    document
      .querySelector(".profile__expand-button")
      .classList.toggle("profile__expand-button--active");
    document
      .querySelector(".profile__expanded")
      .classList.toggle("profile__expanded--active");
    document.querySelector(".friends").classList.toggle("friends--active");
  });

  document
    .querySelector(".profile__card__user-icon")
    .addEventListener("click", () => {
      document.querySelector(".status").classList.toggle("status--active");
    });

  // let onScroll = false;
  // document.querySelector(".conversation").addEventListener("scroll", () => {
  //   onScroll = true;
  //   if (
  //     !document.querySelector(".conversation").classList.contains("on-scroll")
  //   ) {
  //     document.querySelector(".conversation").classList.add("on-scroll");
  //   }
  //   onScroll = false;
  //   setTimeout(() => {
  //     if (!onScroll) {
  //       document.querySelector(".conversation").classList.remove("on-scroll");
  //     }
  //   }, 1500);
  // });
}
