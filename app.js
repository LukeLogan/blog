var timeForPost = document.getElementById('postTime');

// var today = new Date();
var today2 = Date.now();

// console.log(today)
// console.log(today2)

function setTime() {
  var today = new Date();
  var day = today.getDate()
  var month = today.getMonth() + 1
  var year = today.getFullYear()
  var date = month + '-' + day + '-' + year

  timeForPost.innerHTML = date
}

setTime();