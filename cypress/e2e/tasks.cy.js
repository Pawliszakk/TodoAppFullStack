/// <reference types="Cypress" />

describe('tasks', () => {
	beforeEach(() => {
		cy.seed();
	});

	it('should add task', () => {
		cy.login();
		cy.addTask();
	});

	it('should edit task', () => {
		cy.login();
		cy.addTask();
		cy.getById('edit-task-button').click();

		cy.getById('title-input').click();
		cy.getById('title-input').clear().type('Test title2');

		cy.getById('description-input').click();
		cy.getById('description-input').clear().type('Test description2');

		cy.getById('category-select').select('health');

		cy.getById('importance-select').select('3');

		cy.getById('edit-submit').click();

		cy.getById('task-title').should('contain', 'Test title2');
	});

	it('should display correct category based on tile clicking', () => {
		cy.login();

		cy.getById('category-tile-health').click();
		cy.getById('task-category-heading').should('contain', 'health');

		cy.getById('category-tile-work').click();
		cy.getById('task-category-heading').should('contain', 'work');

		cy.getById('category-tile-house').click();
		cy.getById('task-category-heading').should('contain', 'house');

		cy.getById('category-tile-personal').click();
		cy.getById('task-category-heading').should('contain', 'personal');

		cy.getById('category-tile-payments').click();
		cy.getById('task-category-heading').should('contain', 'payments');

		cy.getById('category-tile-ideas').click();
		cy.getById('task-category-heading').should('contain', 'ideas');
	});

	it('should filter active or finished tasks', () => {
		cy.login();
		cy.addTask();
		cy.addTask();
		cy.addTask();
		cy.get(
			':nth-child(1) > .TaskTile_buttons__lm3lI > [data-cy="finish-task-button"]'
		).click();

		cy.getById('finished-tasks-button').click();
		cy.getById('task-category-heading').should('contain', 'finished');

		cy.getById('task-tile').should('have.length', 1);

		cy.getById('active-tasks-button').click();
		cy.getById('task-tile').should('have.length', 2);
	});

	it('should add points if task is finished', () => {
		cy.login();
		cy.addTask();
		cy.getById('task-points').should('contain', '0');
		cy.getById('finish-task-button').click();
		cy.getById('task-points').should('contain', '10');
	});
	it('should delete task', () => {
		cy.login();
		cy.addTask();
		cy.getById('close-task-button').click();
		cy.getById('task-tile').should('have.length', 0);
		cy.getById('finished-tasks-button').click();
		cy.getById('task-tile').should('have.length', 0);
		cy.getById('task-points').should('contain', '0');
	});
});
