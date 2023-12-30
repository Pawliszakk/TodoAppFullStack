///<reference types="Cypress"/>

describe('profile', () => {
	beforeEach(() => {
		cy.seed();
	});

	it('should delete user account', () => {
		cy.login();
		cy.get('[data-cy="delete-button"]').click();
		cy.get('[data-cy="password-input"]').click();
		cy.get('[data-cy="password-input"]').type('TestPassword1!');
		cy.get('[data-cy="delete-submit"]').click();
		cy.wait(3000);
		cy.location('pathname').should('eq', '/');
	});
	it('should edit user account', () => {
		cy.login();
		cy.get('[data-cy="edit-button"]').click();
		cy.get('[data-cy="username-input"]').click();
		cy.get('[data-cy="username-input"]').clear().type('new test name');
		cy.get('[data-cy="edit-submit"]').click();
		cy.get('[data-cy="username-heading"]').should(
			'contain',
			'Welcome new test name!'
		);
	});

	it('should edit user password and login with new correctly', () => {
		cy.login();
		cy.get('[data-cy="password-button"]').click();

		cy.get('[data-cy="oldPassword-input"]').click();
		cy.get('[data-cy="oldPassword-input"]').type('TestPassword1!');

		cy.get('[data-cy="newPassword-input"]').click();
		cy.get('[data-cy="newPassword-input"]').type('TestPassword2!');

		cy.get('[data-cy="checkNewPassword-input"]').click();
		cy.get('[data-cy="checkNewPassword-input"]').type('TestPassword2!');

		cy.get('[data-cy="submit-changePassword"]').click();

		cy.get('[data-cy="logout-button"]').click({ force: true });

		cy.get('[data-cy="login-button"]').click({ force: true });
		cy.get('[data-cy="login-start"]').click();
		cy.get('[data-cy="email-input"]').click();
		cy.get('[data-cy="email-input"]').type('test@example.com');
		cy.get('[data-cy="password-input"]').click();
		cy.get('[data-cy="password-input"]').type('TestPassword2!');
		cy.get('[data-cy="submit-login"]').click();

		cy.location('pathname').should('include', '/profile/');
	});
});
