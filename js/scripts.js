function newItem() {
  //add new item to to do list
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);

  if (inputValue === "") {
    alert("you must write something here");
  } else {
    $("#list").append(li);
  }

  // strikethrough items
  li.dblclick(function () {
    li.toggleClass("strike");
  });

  //adding delete button
  let crossOutButton = $("<crossoutbutton></crossoutbutton>");
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

  //delete button functionality
  crossOutButton.click(function () {
    li.addClass("delete");
  });

  // make list items moveable
  $("#list").sortable();
}
