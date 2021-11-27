// let pass = /((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{8,})/;

$(document).ready(function () {
  $("input").keyup(function () {
    let value = $(this).val();
    if (!checkPasswordInput(value)) {
      $(this).removeClass("border-success").addClass("border-danger");
      $("#message")
        .addClass("text-danger").text("invlid");
        $("#hr") 
        .addClass("bg-danger")
        return;
    }
    $(this).removeClass("border-danger").addClass("border-success");
    $("#message")
      .removeClass("text-danger")
      .addClass("text-success")
      .text("currect"); 
    $("#hr") 
    .removeClass("bg-danger")
    .addClass("bg-success")
    });
  function checkPasswordInput(password) {
    if (!password) {
      return false;
    }
    const regex = /((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%?=*&]).{8,})/;
    if (!regex.test(password)) {
      return false;
    }
    return true;
  }
});
function myFunction() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
if ($('input#password').is(':placeholder-shown')) {
  $("#message")
  .removeClass("text-danger")
  .text("empty"); 
} 
$("input").blur(function(){
  $("#message")
  .removeClass("text-danger")
  .text("empty"); ;
});