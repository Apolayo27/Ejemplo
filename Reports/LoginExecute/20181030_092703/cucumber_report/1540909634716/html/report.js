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
  "name": "I click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepsfallido.I_Click_login_button()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to click on object (Root cause: java.lang.IllegalArgumentException: Object is null)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.click(ClickKeyword.groovy:86)\n\tat com.kms.katalon.core.webui.keyword.builtin.ClickKeyword.execute(ClickKeyword.groovy:67)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.click(WebUiBuiltInKeywords.groovy:616)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$click$2.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\n\tat com.ea.steps.LoginStepsfallido.I_Click_login_button(LoginStepsfallido.groovy:36)\n\tat ✽.I click login button(/Users/mapolayom/git/Ejemplo/Include/features/Loginparafalla.feature:26)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepsfallido.I_Should_see_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});