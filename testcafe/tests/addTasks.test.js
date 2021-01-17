
import SignInPage   from '../pages/signIn.page'
import WelcomePage  from '../pages/welcome.page'
import ProjectsPage from '../pages/projects.page'

fixture `Add task & comment`
    .page `https://app.productive.io/public/login`;

test('add task to the project, comment & tag admin', async t => {
    await SignInPage.signIn('employee5@user.com', 'test1234');

    await t
        .click(WelcomePage.projectsMenu)
        .click(ProjectsPage.projectListItemBlock)
        .click(ProjectsPage.addNewTaskIcon)
        .typeText(ProjectsPage.taskTitle, 'Task 1')
        .typeText(ProjectsPage.taskTrixEditor, 'New Task Created')
        .click(ProjectsPage.submitButton)
        .expect(ProjectsPage.taskDescription.exists).ok()
        .typeText(ProjectsPage.commentTrixEditor, 'This needs to be prioritised ')
        .click(ProjectsPage.mentionIcon)
        .pressKey('a d')
        .click(ProjectsPage.tagUserList)
        .click(ProjectsPage.submitButton)
});

test('company admin should get notification and able to open task', async t => {
    await SignInPage.signIn('admin@user.com', 'test1234');

    await t
        .expect(WelcomePage.notificationTitle.exists).ok('', { timeout: 40000 })
        .expect(WelcomePage.notificationTitle.textContent).match(/Task 1/)
        .click(WelcomePage.notificationTitle)
        .expect(ProjectsPage.taskTitle.exists).ok();
});
