
import SignInPage  from '../pages/signin.page';
import ProjectPage from '../pages/projects.page';
import assert      from 'assert';

describe('projects', function () {
    it('create project from scratch', function () {
        SignInPage.open();
        SignInPage.signIn('admin@user.com', 'test1234');
        ProjectPage.createInternalProjectFromScratch('Project 1');
        assert.match(ProjectPage.projectTitle.getText(), new RegExp('Project 1'));
    });
});
