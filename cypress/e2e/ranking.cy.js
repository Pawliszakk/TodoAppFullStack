/// <reference types="Cypress" />

describe('ranking', () => {
	beforeEach(() => {
		cy.seed();
	});

	it('should fetch user to a list', () => {
		cy.visit('/');
		cy.getById('ranking-link').click();
		cy.getById('user-tile').should('exist');
	});

	it('list should display newly created account', () => {
		cy.visit('/login');
		cy.getById('signup-start').click();

		cy.getById('username-input').click();
		cy.getById('username-input').type('Test User');
		cy.getById('email-input').type('test2@example.com');
		cy.getById('password-input').click();
		cy.getById('password-input').type('TestPassword1!');
		cy.getById('men-button').click();
		cy.get('[data-cy="avatar-3"] > img').click();
		cy.getById('submit-signup').click();

		cy.wait(4000);
		cy.getById('ranking-link').click();
		cy.getById('user-tile').should('have.length', 2);
	});

	it('list should not display account if deleted', () => {
		cy.login();
		cy.getById('delete-button').click();
		cy.getById('password-input').click();
		cy.getById('password-input').type('TestPassword1!');
		cy.getById('delete-submit').click();

		cy.wait(5000);
		cy.getById('ranking-link').click({ force: true });
		cy.getById('user-tile').should('have.length', 0);
	});
});
