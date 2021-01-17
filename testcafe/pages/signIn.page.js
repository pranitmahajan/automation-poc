
import { Selector, t } from 'testcafe';

class SignInPage {

    constructor () {
        this.signUpLink    = Selector('a').withText('Sign up');
        this.emailInput    = Selector('div[data-type=email] input');
        this.passwordInput = Selector('div[data-type=password] input');
        this.signInButton  = Selector('button[type=submit');
    }

    async signIn(email, password){
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passwordInput, password)
            .click(this.signInButton);
    }
}

export default new SignInPage();
