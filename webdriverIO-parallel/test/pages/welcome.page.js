
import Page from './page'

class WelcomePage extends Page {
   
    get videoModal()                { return $('iframe[name=intercom-modal-frame]') };
    get videoPlayButton()           { return $('.ytp-large-play-button') };
    get youtubeFrame()              { return $('iframe[title=youtube]') };
    get youtubeControls()           { return $('.ytp-chrome-controls') };
    get homeMenu()                  { return $('.main-sidebar__sidebar').$('div=Home') };
    get projectsMenu()              { return $('.main-sidebar__sidebar').$('div=Projects') };
    get invitePeople()              { return $('=Invite people') };
    get logoutButton()              { return $('button=Logout') };
    get makeenCompanyMenu()         { return $('=Makeen') };
    get inviteEmployeeOption()      { return $('div=Employee') };
    get inviteEmployeeEmailButton() { return $('div[data-test-invite-people-emails-field] button') };
    get inviteEmployeeEmailSearch() { return $('input[type=search]') };
    get inviteEmployeeEmailList()   { return $('button[role=option]') };
    get laterButton()               { return $('button=I\'ll do that later') };
    get submitButton()              { return $('button[type=submit]') };
    get notificationTitle()         { return $('.notification-item__title') };

    logout(){
        this.homeMenu.click();
        //this.homeMenu.moveTo();
        this.logoutButton.click();
    }

}

export default new WelcomePage();
