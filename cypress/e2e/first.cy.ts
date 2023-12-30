describe('template spec', () => {
	it('passes', () => {
		// cy.task('seedDatabase');

		cy.visit('/');
		cy.log(Cypress.env('foo'));
	});
});
