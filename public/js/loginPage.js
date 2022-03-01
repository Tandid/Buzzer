$(".demoLoginButton").click(() => {
  autoCompleteLogin();
});

function autoCompleteLogin() {
  $(".usernameInput").val("DemoLogin@gmail.com");
  $(".passwordInput").val("password");
}
