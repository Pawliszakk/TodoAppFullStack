///<reference types="Cypress"/>

describe('profile', () => {
	beforeEach(() => {
		cy.seed();
	});

	it('should delete user account', () => {
		cy.login();
		cy.getById('delete-button').click();
		cy.getById('password-input').click();
		cy.getById('password-input').type('TestPassword1!');
		cy.getById('delete-submit').click();
		cy.wait(3000);
		cy.location('pathname').should('eq', '/');
	});
	it('should edit user account', () => {
		cy.login();
		cy.getById('edit-button').click();
		cy.getById('username-input').click();
		cy.getById('username-input').clear().type('new test name');
		cy.getById('edit-submit').click();
		cy.getById('username-heading').should('contain', 'Welcome new test name!');
	});

	it('should edit user password and login with new correctly', () => {
		cy.login();
		cy.getById('password-button').click();

		cy.getById('oldPassword-input').click();
		cy.getById('oldPassword-input').type('TestPassword1!');

		cy.getById('newPassword-input').click();
		cy.getById('newPassword-input').type('TestPassword2!');

		cy.getById('checkNewPassword-input').click();
		cy.getById('checkNewPassword-input').type('TestPassword2!');

		cy.getById('submit-changePassword').click();

		cy.getById('logout-button').click({ force: true });

		cy.getById('login-button').click({ force: true });
		cy.getById('login-start').click();
		cy.getById('email-input').click();
		cy.getById('email-input').type('test@example.com');
		cy.getById('password-input').click();
		cy.getById('password-input').type('TestPassword2!');
		cy.getById('submit-login').click();

		cy.location('pathname').should('include', '/profile/');
	});
});
