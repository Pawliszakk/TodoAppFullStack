///<reference types="Cypress"/>

describe('Auth', () => {
	beforeEach(() => {
		if (
			!Cypress.mocha
				.getRunner()
				.suite.ctx.currentTest.title.includes(
					'should switch between forms if span is clicked'
				)
		) {
			cy.seed();
		}
	});

	it('should login user', () => {
		cy.login();
		cy.location('pathname').should('include', '/profile/');
		cy.get('[data-cy="logout-button"]').should('exist');
		cy.get('[data-cy="login-button"]').should('not.exist');
	});

	it('should logout', () => {
		cy.login();
		cy.wait(4000);
		cy.getById('logout-button').click();
		cy.location('pathname').should('eq', '/');
		cy.get('[data-cy="logout-button"]').should('not.exist');
		cy.get('[data-cy="login-button"]').should('exist');
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
	it('should display correct avatar photo in navigation', () => {
		cy.login();
		cy.wait(2000);
		cy.getById('user-avatar').should(
			'not.have.attr',
			'src',
			'/assets/avatars/avatarLogout.jpg'
		);
	});

	it('should switch between forms if span is clicked', () => {
		cy.visit('/login');
		cy.getById('login-start').click();
		cy.getById('create-span').click();
		cy.getById('signup-title').should('exist');
		cy.getById('login-span').click();
		cy.getById('login-title').should('exist');
	});
});
