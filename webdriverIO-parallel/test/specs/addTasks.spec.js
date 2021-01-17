
import SignInPage   from '../pages/signin.page';
import WelcomePage  from '../pages/welcome.page';
import ProjectsPage from '../pages/projects.page';
import assert       from 'assert';

describe('add tasks', function () {

    it('add task to the project', function () {
        SignInPage.open();
        SignInPage.signIn('employee5@user.com', 'test1234');
        if(WelcomePage.videoModal.isDisplayed()) browser.keys('Escape');
        WelcomePage.projectsMenu.click();
        ProjectsPage.projectListItemBlock.click();
        if(WelcomePage.videoModal.isDisplayed()) browser.keys('Escape');
        browser.pause(1000);
        ProjectsPage.addNewTaskIcon.click();
        ProjectsPage.taskTitle.addValue('Task 1');
        ProjectsPage.taskTrixEditor.addValue('New Task Created');
        ProjectsPage.submitButton.click();
        ProjectsPage.taskDescription.waitForExist();
    });

    it('add comment to task and tag admin', function () {
        ProjectsPage.commentTrixEditor.waitForExist();
        ProjectsPage.commentTrixEditor.addValue('This needs to be prioritised @');
        browser.keys('a');
        ProjectsPage.tagUserList.waitForExist();
        ProjectsPage.tagUserList.click();
        ProjectsPage.submitButton.click();
        ProjectsPage.commentExpandLink.waitForExist();
    });

    it('company admin should get notification and able to open task', function () {
        WelcomePage.logout();
        SignInPage.signIn('admin@user.com', 'test1234');
        WelcomePage.notificationTitle.waitForExist();
        assert.match(WelcomePage.notificationTitle.getText(), /Task 1/);
        browser.pause(1000);
        WelcomePage.notificationTitle.click();
        ProjectsPage.taskTitle.waitForExist();
    });

});
