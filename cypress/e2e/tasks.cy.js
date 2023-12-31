/// <reference types="Cypress" />

describe('tasks', () => {
	beforeEach(() => {
		cy.seed();
	});

	// it('should add task', () => {
	// 	cy.login();
	// 	cy.addTask();
	// });

	// it('should edit task', () => {
	// 	cy.login();
	// 	cy.addTask();
	// 	cy.get('[data-cy="edit-task-button"]').click();

	// 	cy.get('[data-cy="title-input"]').click();
	// 	cy.get('[data-cy="title-input"]').clear().type('Test title2');

	// 	cy.get('[data-cy="description-input"]').click();
	// 	cy.get('[data-cy="description-input"]').clear().type('Test description2');

	// 	cy.get('[data-cy="category-select"]').select('health');

	// 	cy.get('[data-cy="importance-select"]').select('3');

	// 	cy.get('[data-cy="edit-submit"]').click();

	//     cy.get('[data-cy="task-title"]').should('contain', 'Test title2');
	// });

	// it('should display correct category based on tile clicking', () => {
	// 	cy.login();

	// 	cy.get('[data-cy="category-tile-health"]').click();
	// 	cy.get('[data-cy="task-category-heading"]').should('contain', 'health');

	// 	cy.get('[data-cy="category-tile-work"]').click();
	// 	cy.get('[data-cy="task-category-heading"]').should('contain', 'work');

	// 	cy.get('[data-cy="category-tile-house"]').click();
	// 	cy.get('[data-cy="task-category-heading"]').should('contain', 'house');

	// 	cy.get('[data-cy="category-tile-personal"]').click();
	// 	cy.get('[data-cy="task-category-heading"]').should('contain', 'personal');

	// 	cy.get('[data-cy="category-tile-payments"]').click();
	// 	cy.get('[data-cy="task-category-heading"]').should('contain', 'payments');

	// 	cy.get('[data-cy="category-tile-ideas"]').click();
	// 	cy.get('[data-cy="task-category-heading"]').should('contain', 'ideas');
	// });

	it('should filter active or finished tasks', () => {
		cy.login();
		cy.addTask();
		cy.addTask();
		cy.addTask();
		cy.get(
			':nth-child(1) > .TaskTile_buttons__lm3lI > [data-cy="finish-task-button"]'
		).click();

		cy.get('[data-cy="finished-tasks-button"]').click();
		cy.get('[data-cy="task-category-heading"]').should('contain', 'finished');

		cy.get('[data-cy="task-tile"]').should('not.be.undefined');
	});
});
