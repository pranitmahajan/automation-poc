
import Page from './page'

class SignInPage extends Page {
   
    get signUpLink()    { return $('=Sign up') };
    get emailInput()    { return $('div[data-type=email] input') };
    get passwordInput() { return $('div[data-type=password] input') };
    get signInButton()  { return $('button[type=submit]') }

    open () {
        super.open('public/login');
    }

    signIn(email, password){
        this.emailInput.waitForExist();
        this.emailInput.addValue(email);
        this.passwordInput.addValue(password);
        this.signInButton.click();
    }
}

export default new SignInPage();
