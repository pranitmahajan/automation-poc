
import { Selector, t } from 'testcafe'

class WelcomePage {
    
    constructor () {
        this.videoModal                = Selector('iframe[name=intercom-modal-frame]');
        this.videoPlayButton           = Selector('.ytp-large-play-button');
        this.youtubeFrame              = Selector('iframe[title=youtube]');
        this.youtubeControls           = Selector('.ytp-chrome-controls');
        this.homeMenu                  = Selector('.main-sidebar__sidebar div').withText('Home');
        this.projectsMenu              = Selector('.main-sidebar__sidebar div').withText('Projects');
        this.invitePeople              = Selector('a').withText('Invite people');
        this.logoutButton              = Selector('button').withText('Logout');
        this.makeenCompanyMenu         = Selector('a').withText('Makeen');
        this.inviteEmployeeOption      = Selector('.invite-option__title').withText('Employee');
        this.inviteEmployeeEmailButton = Selector('div[data-test-invite-people-emails-field] button');
        this.inviteEmployeeEmailSearch = Selector('input[type=search]');
        this.inviteEmployeeEmailList   = Selector('button[role=option]');
        this.laterButton               = Selector('.action-link');
        this.submitButton              = Selector('button[type=submit]');
        this.notificationTitle         = Selector('.notification-item__title');
    }

    async logout () {
        await t
            .click(this.homeMenu)
            .hover(this.homeMenu)
            .click(this.logoutButton)
    }
}

export default new WelcomePage();
