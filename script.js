document.querySelectorAll("details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    const icon = detail.querySelector(".icon-img");
    icon.src = detail.open
      ? "/assets/images/icon-minus.svg"
      : "/assets/images/icon-plus.svg";
  });
});
