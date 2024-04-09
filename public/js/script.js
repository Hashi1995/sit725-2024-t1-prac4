// const cardList = [
//   {
//     title: "Kitten 2",
//     image: "images/kitten2.jpg",
//     link: "About Kitten 2",
//     description: "Demo description about kitten 2",
//   },
//   {
//     title: "Kitten 3",
//     image: "images/kitten3.jpg",
//     link: "About Kitten 3",
//     description: "Demo description about kitten 3",
//   },
// ];
const clickMe = () => {
  alert("Thanks for clicking me. Hope you have a nice day!");
};
// const submitForm = () => {
//   let formData = {};
//   formData.first_name = $("#first_name").val();
//   formData.last_name = $("#last_name").val();
//   formData.password = $("#password").val();
//   formData.email = $("#email").val();
//   console.log("Form Data Submitted: ", formData);
// };

const submitForm = () => {
  let formData = {
    title: $("#title").val(),
    image: $("#path").val(),
    link: $("#color").val(),
    description: $("#des").val(),
  };

  // Send a POST request to add the new project
  $.post("/api/projects", formData, (response) => {
    if (response.statusCode === 201) {
      // Project added successfully
      alert("Card added succsfully");
      location.reload();
    } else {
      // Error adding project
      alert("Failed to add project. Please try again later.");
    }
  });
};

const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      "</a></p></div>" +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      "</p>" +
      "</div></div></div>";
    $("#card-section").append(itemToAppend);
  });
};

const getProjects = () => {
  $.get("/api/projects", (response) => {
    if (response.statusCode == 200) {
      addCards(response.data);
    }
  });
};

$(document).ready(function () {
  $(".materialboxed").materialbox();
  $("#formSubmit").click(() => {
    submitForm();
  });
  // addCards(cardList);

  getProjects();

  $(".modal").modal();
});