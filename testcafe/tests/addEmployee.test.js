
import SignInPage   from '../pages/signIn.page';
import WelcomePage  from '../pages/welcome.page';
import ProjectsPage from '../pages/projects.page';

const fs = require('fs');
let randomId = JSON.parse(fs.readFileSync('data.json')).randomId;

fixture `Invite & Add Employee`
    .page `https://app.productive.io/public/login`;

test('add employee to company workspace', async t => {
    await SignInPage.signIn('admin@user.com', 'test1234');

    await t
        .hover(WelcomePage.homeMenu)
        .click(WelcomePage.invitePeople)
        .click(WelcomePage.inviteEmployeeOption)
        .click(WelcomePage.inviteEmployeeEmailButton)
        .typeText(WelcomePage.inviteEmployeeEmailSearch, 'test'+ randomId +'@user.com')
        .click(WelcomePage.inviteEmployeeEmailList)
        .pressKey('esc')
        .click(WelcomePage.submitButton)
        .expect(WelcomePage.laterButton.exists).ok()
        .click(WelcomePage.submitButton)
});

test('add employee to project', async t => {
    await SignInPage.signIn('admin@user.com', 'test1234');

    await t
        .click(WelcomePage.projectsMenu)
        .click(ProjectsPage.projectListItemBlock)
        .click(ProjectsPage.newPeopleIcon)
        .click(ProjectsPage.selectPeopleButton)
        .typeText(ProjectsPage.userSearchInput, 'test '+ randomId)
        .click(ProjectsPage.userSearchListItem)
        .click(ProjectsPage.submitButton);
});

test('login with invited employee and verify project added', async t => {
    await SignInPage.signIn('test'+ randomId +'@user.com', 'test1234');

    await t
        .hover(WelcomePage.homeMenu)
        .click(WelcomePage.makeenCompanyMenu)
        .click(WelcomePage.projectsMenu)
        .expect(ProjectsPage.projectListItem.textContent).contains('Project');
});
