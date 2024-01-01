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

Cypress.Commands.add('getById', (id) => {
	cy.get(`[data-cy="${id}"]`);
});

Cypress.Commands.add('login', () => {
	cy.visit('/login');
	cy.getById('login-start').click();
	cy.getById('email-input').click();
	cy.getById('email-input').type('test@example.com');
	cy.getById('password-input').click();
	cy.getById('password-input').type('TestPassword1!');
	cy.getById('submit-login').click();
});

Cypress.Commands.add('seed', () => {
	cy.task('seedDatabase', {
		password: Cypress.env('DB_PASSWORD'),
		user: Cypress.env('DB_USER'),
		database: Cypress.env('DB_NAME'),
	});
});

Cypress.Commands.add('addTask', () => {
	cy.getById('add-task-button').click();

	cy.getById('title-input').click();
	cy.getById('title-input').type('Test title');

	cy.getById('description-input').click();
	cy.getById('description-input').type('Test description');

	cy.getById('category-select').select('work');

	cy.getById('importance-select').select('2');

	cy.getById('submit-task').click();

	cy.getById('see-new-task').click();

	cy.getById('task-title').should('contain', 'Test title');
});
