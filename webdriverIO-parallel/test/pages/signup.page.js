
import Page from './page'

class SignUpPage extends Page {
   
    get pageTitle()            { return $('.registration-page__title') };
    get emailInput()           { return $('.registration-email-form input') };
    get firstNameInput()       { return $('div[data-test-registration-user-details-form-first-name] input') };
    get lastNameInput()        { return $('div[data-test-registration-user-details-form-last-name] input') };
    get passwordInput()        { return $('div[data-test-registration-user-password-form-password-field] input') };
    get phoneInput()           { return $('div[data-test-registration-location-form-phone-field] input') };
    get companyNameInput()     { return $('div[data-test-registration-company-form-name-field] input') };
    get companyTypeOther()     { return $('label=Other') };
    get companySizeFreelance() { return $('label=Freelance') };
    get agreeCheckbox()        { return $('.form-checkbox-field__checkable-box') };
    get submitButton()         { return $('.form-actions__submit-button-label') };
    get sampleDataButton()     { return $('button[data-test-registration-sample-data-skip-button')} ;

    signup(){
        this.emailInput.addValue('employee'+ randomId +'@user.com');
        this.submitButton.click();
        this.firstNameInput.addValue('employee');
        this.lastNameInput.addValue(randomId);
        this.submitButton.click();
        this.passwordInput.addValue('test1234');
        this.submitButton.click();
        this.phoneInput.addValue('9767800751');
        this.submitButton.click();
        this.companyNameInput.addValue('Self');
        this.companyTypeOther.click();
        this.companySizeFreelance.click();
        this.agreeCheckbox.click();
        this.submitButton.click();
        this.sampleDataButton.click();
    }

}

export default new SignUpPage();
