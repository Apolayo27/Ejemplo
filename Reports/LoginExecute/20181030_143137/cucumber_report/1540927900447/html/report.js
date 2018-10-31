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
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the following for Login",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin",
        "adminpassword"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.I_enter_the_following_for_login(User\u003e)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Unable to set text \u0027admin\u0027 of object \u0027Object Repository/Page_Execute Automation/input_Login_UserName\u0027 (Root cause: org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d70.0.3538.77)\n  (Driver info: chromedriver\u003d2.35.528157 (4429ca2590d6988c0745c24c8858745aaaec01ef),platform\u003dMac OS X 10.13.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.7.1\u0027, revision: \u00278a0099a\u0027, time: \u00272017-11-06T21:07:36.161Z\u0027\nSystem info: host: \u0027MOVMACTDI12.local\u0027, ip: \u0027fe80:0:0:0:43:dd92:3a2a:a254%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: com.kms.katalon.selenium.driver.CChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.35.528157 (4429ca2590d698..., userDataDir: /var/folders/mz/bwwvrrl97bs...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.77, webStorageEnabled: true}\nSession ID: b73b6e43d3ad7d0e09b0cdd4f8d1e830\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027UserName\u0027]})\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:36)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.stepFailed(WebUIKeywordMain.groovy:65)\n\tat com.kms.katalon.core.webui.keyword.internal.WebUIKeywordMain.runKeyword(WebUIKeywordMain.groovy:27)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:65)\n\tat com.kms.katalon.core.webui.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:37)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:53)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords.setText(WebUiBuiltInKeywords.groovy:950)\n\tat com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords$setText$1.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:48)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:113)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:133)\n\tat com.ea.steps.LoginSteps.I_enter_the_following_for_login(LoginSteps.groovy:47)\n\tat ✽.I enter the following for Login(/Users/mapolayom/git/Ejemplo/Include/features/Login.feature:26)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.I_Click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.I_Should_see_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});