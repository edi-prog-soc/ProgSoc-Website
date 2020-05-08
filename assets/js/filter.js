//Tabs within cards
$('#bologna-list a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "d-none");
    if (x[i].className.indexOf(c) > -1) w3RemoveClass(x[i], "d-none");
  }
}
filterDate("upcoming");
function filterDate(timeFrame){
  var x,i,t;
  if (timeFrame == "upcoming"){
    t = 1;
  } else if (timeFrame == "past"){
    t = -1;
  } else{
    t = 0;
  }
  var curr = new Date();
  x = document.getElementsByClassName("filterDiv");
  for (i = 0; i < x.length; i++) {
    w3AddClass(x[i], "d-none");
    var eventDate = Date.parse(x[i].className.split(" ")[0]);
    if (t*(eventDate-curr.getTime()) >= 0) w3RemoveClass(x[i], "d-none");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}