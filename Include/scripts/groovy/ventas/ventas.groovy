package ventas
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import org.openqa.selenium.By.ByXPath
import org.openqa.selenium.WebDriver
import org.openqa.selenium.WebElement



class ventas {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("I navigate landing page")
	def I_navigate_landing_page() {
		WebUI.openBrowser('')
		WebUI.navigateToUrl('https://d8k3v48xvl3p5.cloudfront.net/#/welcome/eyJhbGciOiJSU0EtT0FFUCIsImVuYyI6IkEyNTZHQ00ifQ.Tc0zV0XQLe2I1M01yOEiqldUl4uhBpjyaeT1GgQiAac_s0P9i5rCCiIXKp_AXByg6rJ7EjVHyOiI5uOibotd5FQBTnfUYTxH9v31E0w3ox6292XEwG399oPur7Gqwrp0kaunx4Pw7fRAC8mMwmC2f9JV3k9ZBryKDm_2zLhk4xL5cT4bUZyUiMBrzyfJeueJMTtmNoWcfXIg6ZDUqVUvuwl8Q9Sa50bAc2j7z3GZDRppeazzGmM_N4IIrx44tKv4w2AYIQafycGZo4i__UNr-fwUjtBAP-Apba34pM2qWK2yCr2ar7kLeyOak9pL14gNVikhMTjkT4XUBad0wuegEg.P8G4GIl1kzu99cxE.f6Ys-0-0nCTcSH8U9is9KoUl3UHCKM_nJKcPWSCcjyHC5gSyi192wKgwhZMTAOaxnxhUfBl4zC6PWwuXgRbALthz7j_pwt__h_JNM8Dk1Khgq2Zv3VsE6v_2tl9XsqQuCULZQrB7KAc3j_cmBWAbBKM9ySd8hRwrxCv0CvC9hd5WqEYmFBuLt9bzrBxWKQiaESHyExcn9v-AHmzNAZS-hYESTUvIBhBWxcCpSgeJMQ2w-efWm_J1mbUp4EMnDhQ_onSpeFtefE_VKWlOCihd3Zw0fdYX6U6kmeCx6j5YxDGUvmwiNPbQIAbZxzYnmvEHYE3GTIYDQ2Fw1hPfVTFVZYrvONzjCjsiEVdiDHtoAsVU4HZwdoypmHTAZXEgfBH8Qgtv_ZQbYY-xn1IWpzu7LJVVvMpR7GWMwlr8c4LFS1KGRjCmcIdrqoO85AiDgRiV9NFt2VHmRxV_2Dl2Bfv9zVyI2ewK-tfaFRLRdV3zZtMIIlzKPVYPr0mZIlQ4Wkta7k5B1JYnb5nSeyv-SoFib7lxs3SvaWkHq5JcG8kYInqApXoBGv-gXreIKcs-gZsRdsCTvPJyzuXYKoG2NJABC0WWkCRMijwd_STLTOE8zXIp7Qd-s2z8wij8klHoTYbzDA.wF3EVoAnSirtYIIHSovWZA')
		WebUI.maximizeWindow()
	}

	@When("I select the La quiero button")
	def I_select_the_La_quiero_button() {
		WebDriver driver = DriverFactory.getWebDriver()
		driver.findElement(By.xpath('/html/body/app-root/app-welcome/div/div/div[2]/div/div/div[2]/button')).isDisplayed()
		System.out.println("encontrado")
		
	}

	@Then("I verify the (.*) in step")
	def I_verify_the_status_in_step(String status) {
		println status
	}
}