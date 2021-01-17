
import SignInPage  from '../pages/signIn.page'
import SignUpPage  from '../pages/signUp.page'
import WelcomePage from '../pages/welcome.page'

fixture `Sign Up`
    .page `https://app.productive.io/public/login`

test('user should be able to sign up and play introduction video', async t => {
    await t.click(SignInPage.signUpLink)
           .expect(SignUpPage.pageTitle.exists).ok();
           
    await SignUpPage.signup();

    // await t
    //     .switchToIframe(WelcomePage.videoModal)
    //     .switchToIframe(WelcomePage.youtubeFrame)
    //     .click(WelcomePage.videoPlayButton)
    //     .expect(WelcomePage.youtubeControls.exists).ok();
});
