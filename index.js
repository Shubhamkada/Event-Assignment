
console.clear();

function update_main_image(new_image) {

  console.log(new_image.src);
  let main_image = document.getElementById("main_image");


  document.getElementById(main_image.dataset.img).classList.remove("active");
  new_image.classList.add("active");

  main_image.src = new_image.src;
  main_image.dataset.img = new_image.id;
}