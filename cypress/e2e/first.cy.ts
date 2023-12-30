describe('template spec', () => {
	it('passes', () => {
		cy.task('seedDatabase', {
			password: Cypress.env('DB_PASSWORD'),
			user: Cypress.env('DB_USER'),
			database: Cypress.env('DB_NAME'),
		});

		// const password = Cypress.env('DB_PASSWORD');
		// const user = Cypress.env('DB_USER');
		// const database = Cypress.env('DB_NAME');

		cy.visit('/');
		cy.log(Cypress.env('host'));
	});
});
