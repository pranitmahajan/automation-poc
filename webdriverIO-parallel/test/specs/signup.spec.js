
import SignInPage  from '../pages/signin.page'
import SignUpPage  from '../pages/signup.page'
import WelcomePage from '../pages/welcome.page'

describe('sign up', function () {
    it('user should be able to sign up', function () {
        SignInPage.open();
        SignInPage.signUpLink.click();
        SignUpPage.pageTitle.waitForExist();
        SignUpPage.signup();
    });

    it('play introduction video after sign up', function () {
        WelcomePage.videoModal.waitForExist();
        browser.switchToFrame(WelcomePage.videoModal);
        WelcomePage.youtubeFrame.waitForExist();
        browser.switchToFrame(WelcomePage.youtubeFrame);
        WelcomePage.videoPlayButton.click();
        WelcomePage.youtubeControls.waitForExist();
    });
});
