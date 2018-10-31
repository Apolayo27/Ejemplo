$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/mapolayom/git/Ejemplo/Include/features/Loginparafalla.feature");
formatter.feature({
  "name": "Login",
  "description": "  Test the login functionality of the application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@loginparafallafeature"
    }
  ]
});
formatter.scenario({
  "name": "Test the login functionality of EA application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@loginparafallafeature"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I navigate the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepsfallido.I_navigate_to_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"admin\" password \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepsfallido.I_enter_username_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsfallido.I_Click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the button save",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsfallido.I_should_see_the_button_save()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to verify text \u0027Clic for Generating JavaScript Alert\u0027 is present  (Root cause: Text \u0027Clic for Generating JavaScript Alert\u0027 is not present on page )\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword.verifyTextPresent(VerifyTextPresentKeyword.groovy:83)\n\tat com.kms.katalon.core.webui.keyword.builtin.VerifyTextPresentKeyword.execute(VerifyTextPresentKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.verifyTextPresent(WebUiBuiltInKeywords.groovy:1693)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$verifyTextPresent$3.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\n\tat com.ea.steps.LoginStepsfallido.I_should_see_the_button_save(LoginStepsfallido.groovy:43)\n\tat ✽.I should see the button save(/Users/mapolayom/git/Ejemplo/Include/features/Loginparafalla.feature:28)\n",
  "status": "failed"
});
});