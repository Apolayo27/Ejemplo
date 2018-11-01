$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mapolayom/git/Ejemplo/Include/features/ejemplo2.feature");
formatter.feature({
  "name": "Login2",
  "description": "  Test login",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "validate login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "I enter the url",
  "keyword": "Given "
});
formatter.match({
  "location": "login2.I_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the button",
  "keyword": "When "
});
formatter.match({
  "location": "login2.I_select_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I see the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "login2.I_see_the_login_page()"
});
formatter.result({
  "status": "passed"
});
});