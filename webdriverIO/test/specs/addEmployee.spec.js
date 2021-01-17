
import SignInPage   from '../pages/signin.page';
import WelcomePage  from '../pages/welcome.page';
import ProjectsPage from '../pages/projects.page';
import assert       from 'assert';

describe('add employee', function () {
    it('add employee to company workspace', function () {
        SignInPage.open();
        SignInPage.signIn('admin@user.com', 'test1234');
        WelcomePage.homeMenu.waitForExist();
        WelcomePage.homeMenu.click();
        WelcomePage.invitePeople.click();
        WelcomePage.inviteEmployeeOption.click();
        WelcomePage.inviteEmployeeEmailButton.click();
        WelcomePage.inviteEmployeeEmailSearch.addValue('employee'+ randomId +'@user.com');
        WelcomePage.inviteEmployeeEmailList.click();
        browser.keys('Escape');
        WelcomePage.submitButton.click();
        WelcomePage.laterButton.waitForExist();
        WelcomePage.submitButton.click();
    });

    it('add employee to project', function () {
        browser.pause(2000);
        WelcomePage.projectsMenu.click();
        ProjectsPage.projectListItemBlock.waitForExist();
        ProjectsPage.projectListItemBlock.click();
        ProjectsPage.newPeopleIcon.click();
        ProjectsPage.selectPeopleButton.click();
        ProjectsPage.userSearchInput.addValue('employee '+ randomId);
        ProjectsPage.userSearchListItem.click();
        ProjectsPage.submitButton.click();
        browser.keys('Escape');
    });

    it('login with invited employee and verify project added', function () {
        WelcomePage.logout();
        SignInPage.open();
        SignInPage.signIn('employee'+ randomId +'@user.com', 'test1234');
        WelcomePage.homeMenu.waitForExist();
        browser.pause(1000);
        browser.keys('Escape');
        WelcomePage.homeMenu.click();
        WelcomePage.makeenCompanyMenu.click();
        WelcomePage.projectsMenu.click();
        assert.match(ProjectsPage.projectListItem.getText(), /Project/);
    });
});
