/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', () => {
	cy.visit('/login');
	cy.get('[data-cy="login-start"]').click();
	cy.get('[data-cy="email-input"]').click();
	cy.get('[data-cy="email-input"]').type('test@example.com');
	cy.get('[data-cy="password-input"]').click();
	cy.get('[data-cy="password-input"]').type('TestPassword1!');
	cy.get('[data-cy="submit-login"]').click();
});

Cypress.Commands.add('seed', () => {
	cy.task('seedDatabase', {
		password: Cypress.env('DB_PASSWORD'),
		user: Cypress.env('DB_USER'),
		database: Cypress.env('DB_NAME'),
	});
});

Cypress.Commands.add('addTask', () => {
	cy.get('[data-cy="add-task-button"]').click();

	cy.get('[data-cy="title-input"]').click();
	cy.get('[data-cy="title-input"]').type('Test title');

	cy.get('[data-cy="description-input"]').click();
	cy.get('[data-cy="description-input"]').type('Test description');

	cy.get('[data-cy="category-select"]').select('work');

	cy.get('[data-cy="importance-select"]').select('2');

	cy.get('[data-cy="submit-task"]').click();

	cy.get('[data-cy="see-new-task"]').click();

	cy.get('[data-cy="task-title"]').should('contain', 'Test title');
});
