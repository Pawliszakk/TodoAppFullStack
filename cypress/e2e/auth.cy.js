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
		cy.get('[data-cy="logout-button"]').click();
		cy.location('pathname').should('eq', '/');
	});
	it('should create user and switch to profile page', () => {
		cy.visit('/login');
		cy.get('[data-cy="signup-start"]').click();

		cy.get('[data-cy="username-input"]').click();
		cy.get('[data-cy="username-input"]').type('Test User');
		cy.get('[data-cy="email-input"]').type('test2@example.com');
		cy.get('[data-cy="password-input"]').click();
		cy.get('[data-cy="password-input"]').type('TestPassword1!');
		cy.get('[data-cy="men-button"]').click();
		cy.get('[data-cy="avatar-3"] > img').click();
		cy.get('[data-cy="submit-signup"]').click();
		cy.url().should('include', '/profile/');
	});
});
