package com.ea.steps
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import cucumber.api.TypeRegistry;
import cucumber.api.TypeRegistryConfigurer;
import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import io.cucumber.datatable.DataTableType;
import io.cucumber.datatable.TableEntryTransformer;


class LoginStepsfallido {	
	@Given("I navigate the login page")
	
	
	def I_navigate_to_the_login_page() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl('http://www.executeautomation.com/demosite/Login.html')
	}


	//Obsolete step
	@When('I enter username "(.*)" password "(.*)"')
	def I_enter_username_password(String userName1, String password1) {
		WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_UserName'), userName1)

		WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_Password'), password1)

	}


	@And("I click login button")
	def I_Click_login_button() {
		WebUI.click(findTestObject('Object Repository/Page_Execute Automation/input_Login_Login'))
	}

	@Then("I should see the button save")
	def I_should_see_the_button_save(){
		//WebUI.verifyElementPresent(findTestObject('Object Repository/Page_Execute Automation/input_EnglishHindi_Save'), 20)
		WebUI.verifyTextPresent('Click for Generating JavaScript Alert', true)
		WebUI.closeBrowser()
	}
}

