$("#apple").click((event) => {
  console.log("apple");
  console.log("event.target", event.target);
  $(".fruit").attr("src", "./image/apple.jpg");
});

$("#bananas").click((event) => {
  console.log("bananas");
  console.log("event.target", event.target);
  $(".fruit").attr("src", "./image/bananas.jpg");
});

$("#grapes").click((event) => {
  console.log("grapes");
  console.log("event.target", event.target);
  $(".fruit").attr("src", "./image/grapes.jpg");
});

$("#peaches").click((event) => {
  console.log("peaches");
  console.log("event.target", event.target);
  $(".fruit").attr("src", "./image/peaches.jpg");
});

// $('.btn').click((e) => {
//   const fruitName = $(e.target).attr('id');
//   $('.fruit').attr('src', `./image/${fruitName}.jpg`);
// });

// //$('.btn).click((e) => {
//   const imgName = $(e.target).attr('id');
//console.log(imgName);
//$('fruit').attr('src',`./image/${imgName}.jpg);
// }
