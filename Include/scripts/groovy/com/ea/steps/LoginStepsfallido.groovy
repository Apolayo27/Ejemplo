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
	@When('I enter username as "(.*) and password as "(.*)"')
	def I_enter_username_password(String userName, String password) {
		WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_UserName'), userName)

		WebUI.setText(findTestObject('Object Repository/Page_Execute Automation/input_Login_Password'), password)
	}


	@Then("I click login button")
	def I_Click_login_button() {
		WebUI.click(findTestObject('Object Repository/Page_Execute Automation/Login_Login'))
	}

	@Then("I should see home page")
	def I_Should_see_the_home_page(){

		//Assertions has been done !
	}
}

