
import { Selector, t } from 'testcafe'
import WelcomePage     from './welcome.page'

class ProjectsPage {

    constructor () {
        this.addProjectButton        = Selector('.organization-projects-route__action-button a');
        this.internalProjectButton   = Selector('button[data-test-project-wizard-type-option="1"]');
        this.createFromScratchOption = Selector('.project-wizard-select-template__option-title').withText('Create from scratch');
        this.nameInput               = Selector('div[data-test-project-wizard-details-name] input');
        this.privateMembersOption    = Selector('.form-radio-field__checkable-label').withText('Only project members');
        this.submitButton            = Selector('button[type=submit]');
        this.projectTitle            = Selector('.project-navbar__title');
        this.projectListItemBlock    = Selector('.organization-projects-route__projects-list');
        this.projectListItem         = Selector('.organization-projects-route__projects-list a');
        this.newPeopleIcon           = Selector('.people-toolbar__new-person-button-icon');
        this.selectPeopleButton      = Selector('.people-toolbar__select-field');
        this.userSearchInput         = Selector('.form-select-field-2__search-input');
        this.userSearchListItem      = Selector('.form-select-field-2__options-list div[data-option-index="0"]');
        this.addNewTaskIcon          = Selector('a[aria-label="Add new task"]');
        this.taskTitle               = Selector('div[data-test-project-task-form-page-title-field] textarea');
        this.taskTrixEditor          = Selector('.task-description-form__field .trix-editor');
        this.taskDescription         = Selector('.task-description-form .text-editor-content__content div');
        this.commentTrixEditor       = Selector('.form-rich-text-field--comment .trix-editor');
        this.commentExpandLink       = Selector('.activity-item__expand-changes');
        this.tagUserList             = Selector('.mention-suggestion-item__title');
        this.mentionIcon             = Selector('.trix-button-mention');
    }

        async createInternalProjectFromScratch(name) {
            await t
                .click(WelcomePage.projectsMenu)
                .pressKey('esc')
                .click(this.addProjectButton)
                .click(this.internalProjectButton)
                .click(this.createFromScratchOption)
                .click(this.submitButton)
                .typeText(this.nameInput, name)
                .click(this.privateMembersOption)
                .click(this.submitButton)
                .expect(this.projectTitle.textContent).contains(name)
        }
}

export default new ProjectsPage();
