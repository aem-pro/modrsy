document.addEventListener("DOMContentLoaded", () => {
  const elements = [...document.getElementsByClassName("scroll")];
  elements.forEach((element) => {
    new SimpleBar(element, { direction: "rtl" });
  });
  const nav = document.getElementById("masterNav");
  const isTransparent = true;
  document.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 10 && isTransparent) {
      nav.classList.remove("transparent");
    } else {
      nav.classList.add("transparent");
    }
  });
});
