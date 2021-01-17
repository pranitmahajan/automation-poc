
import Page        from './page';
import WelcomePage from './welcome.page';
import assert      from 'assert';

class ProjectsPage extends Page {
   
    get addProjectButton()        { return $('.organization-projects-route__action-button a') };
    get internalProjectButton()   { return $('button[data-test-project-wizard-type-option="1"]') };
    get createFromScratchOption() { return $('div=Create from scratch') };
    get nameInput()               { return $('div[data-test-project-wizard-details-name] input') };
    get privateMembersOption()    { return $('div=Only project members') };
    get submitButton()            { return $('button[type=submit]') };
    get projectTitle()            { return $('.project-navbar__title') };
    get projectListItemBlock()    { return $('.organization-projects-route__projects-list') };
    get projectListItem()         { return $('.organization-projects-route__projects-list a') };
    get newPeopleIcon()           { return $('.people-toolbar__new-person-button-icon') };
    get selectPeopleButton()      { return $('.people-toolbar__select-field') };
    get userSearchInput()         { return $('.form-select-field-2__search-input') };
    get userSearchListItem()      { return $('.form-select-field-2__options-list div[data-option-index="0"]') };
    get addNewTaskIcon()          { return $('a[aria-label="Add new task"]') };
    get taskTitle()               { return $('div[data-test-project-task-form-page-title-field] textarea') };
    get taskTrixEditor()          { return $('.task-description-form__field .trix-editor') };
    get taskDescription()         { return $('.task-description-form .text-editor-content__content div') };
    get commentTrixEditor()       { return $('.form-rich-text-field--comment .trix-editor') };
    get commentExpandLink()       { return $('.activity-item__expand-changes') };
    get tagUserList()             { return $('.mention-suggestion-item__title') };

    createInternalProjectFromScratch(name){
        WelcomePage.projectsMenu.waitForExist();
        WelcomePage.projectsMenu.click();
        this.addProjectButton.waitForExist();
        this.addProjectButton.click();
        this.internalProjectButton.click();
        this.createFromScratchOption.click();
        this.submitButton.click();
        this.nameInput.addValue(name);
        this.privateMembersOption.click();
        this.submitButton.click();
        this.projectTitle.waitForExist();
        assert.match(this.projectTitle.getText(), new RegExp(name));
    }
}

export default new ProjectsPage();
