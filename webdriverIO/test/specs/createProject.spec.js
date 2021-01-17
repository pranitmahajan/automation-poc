
import SignInPage  from '../pages/signin.page'
import ProjectPage from '../pages/projects.page'

describe('projects', function () {
    it('create project from scratch', function () {
        SignInPage.open();
        SignInPage.signIn('admin@user.com', 'test1234');
        ProjectPage.createInternalProjectFromScratch('Project 1');
    });
});
