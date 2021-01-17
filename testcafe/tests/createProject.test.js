
import SignInPage  from '../pages/signIn.page'
import ProjectPage from '../pages/projects.page'

fixture `Create Project`
    .page `https://app.productive.io/public/login`;

test('create project from scratch', async t => {
    await SignInPage.signIn('admin@user.com', 'test1234');
    await ProjectPage.createInternalProjectFromScratch('Project 1');
});
