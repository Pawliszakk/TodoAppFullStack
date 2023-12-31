///<reference types="Cypress"/>

describe('Auth', () => {
	beforeEach(() => {
		cy.seed();
	});

	it('should login user', () => {
		cy.login();
		cy.location('pathname').should('include', '/profile/');
	});

	it('should logout', () => {
		cy.login();
		cy.wait(4000);
		cy.getById('logout-button').click();
		cy.location('pathname').should('eq', '/');
	});
	it('should create user and switch to profile page', () => {
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
		cy.url().should('include', '/profile/');
	});
});
