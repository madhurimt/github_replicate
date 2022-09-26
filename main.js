const copy_button = document.querySelectorAll("input");

copy_button.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const element = e.currentTarget;
    element.select();
    navigator.clipboard.writeText(element.name);
    element.value = "copied";
  });
});
