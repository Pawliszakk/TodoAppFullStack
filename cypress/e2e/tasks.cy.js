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
		cy.get('[data-cy="edit-task-button"]').click();

		cy.get('[data-cy="title-input"]').click();
		cy.get('[data-cy="title-input"]').clear().type('Test title2');

		cy.get('[data-cy="description-input"]').click();
		cy.get('[data-cy="description-input"]').clear().type('Test description2');

		cy.get('[data-cy="category-select"]').select('health');

		cy.get('[data-cy="importance-select"]').select('3');

		cy.get('[data-cy="edit-submit"]').click();

        cy.get('[data-cy="task-title"]').should('contain', 'Test title2');
	});
});
