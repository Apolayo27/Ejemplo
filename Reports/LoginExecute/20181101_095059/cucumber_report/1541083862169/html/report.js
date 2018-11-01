$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mapolayom/git/Ejemplo/Include/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  Test the login functionality of the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@loginFeature"
    }
  ]
});
formatter.scenario({
  "name": "Test the login functionality of EA application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginFeature"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.I_navigate_to_the_login_page()"
});
