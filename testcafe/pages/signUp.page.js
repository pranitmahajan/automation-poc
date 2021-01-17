
import { Selector, t } from 'testcafe'

class SignUpPage {

    constructor () {
        this.pageTitle            = Selector('.registration-page__title');
        this.emailInput           = Selector('.registration-email-form input');
        this.firstNameInput       = Selector('div[data-test-registration-user-details-form-first-name] input');
        this.lastNameInput        = Selector('div[data-test-registration-user-details-form-last-name] input');
        this.passwordInput        = Selector('div[data-test-registration-user-password-form-password-field] input');
        this.phoneInput           = Selector('div[data-test-registration-location-form-phone-field] input');
        this.companyNameInput     = Selector('div[data-test-registration-company-form-name-field] input');
        this.companyTypeOther     = Selector('label').withText('Other');
        this.companySizeFreelance = Selector('label').withText('Freelance');
        this.agreeCheckbox        = Selector('.form-checkbox-field__checkable-box');
        this.submitButton         = Selector('.form-actions__submit-button-label');
        this.sampleDataButton     = Selector('button[data-test-registration-sample-data-skip-button');
    }

    async signup (name) {
        await t
            .typeText(this.emailInput, 'test12@user.com')
            .click(this.submitButton)
            .typeText(this.firstNameInput, 'test')
            .typeText(this.lastNameInput, '12')
            .click(this.submitButton)
            .typeText(this.passwordInput, 'test1234')
            .click(this.submitButton)
            .typeText(this.phoneInput, '9767800751')
            .click(this.submitButton)
            .typeText(this.companyNameInput, 'Self')
            .click(this.companyTypeOther)
            .click(this.companySizeFreelance)
            .click(this.agreeCheckbox)
            .click(this.submitButton)
            .click(this.sampleDataButton)
    }
}

export default new SignUpPage();
