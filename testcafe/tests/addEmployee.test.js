
import SignInPage   from '../pages/signIn.page'
import WelcomePage  from '../pages/welcome.page'
import ProjectsPage from '../pages/projects.page'

fixture `Invite & Add Employee`
    .page `https://app.productive.io/public/login`;

test('add employee to company workspace', async t => {
    await SignInPage.signIn('admin@user.com', 'test1234');

    await t
        .hover(WelcomePage.homeMenu)
        .click(WelcomePage.invitePeople)
        .click(WelcomePage.inviteEmployeeOption)
        .click(WelcomePage.inviteEmployeeEmailButton)
        .typeText(WelcomePage.inviteEmployeeEmailSearch, 'test14@user.com')
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
        .typeText(ProjectsPage.userSearchInput, 'test 14')
        .click(ProjectsPage.userSearchListItem)
        .click(ProjectsPage.submitButton);
});

test('login with invited employee and verify project added', async t => {
    await SignInPage.signIn('test14@user.com', 'test1234');

    await t
        .hover(WelcomePage.homeMenu)
        .click(WelcomePage.makeenCompanyMenu)
        .click(WelcomePage.projectsMenu)
        .expect(ProjectsPage.projectListItem.textContent).contains('Project');
});
