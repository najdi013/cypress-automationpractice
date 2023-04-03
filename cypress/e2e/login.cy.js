import LoginPage from '/cypress/pages/loginPage.js';

describe('Login', () => { })

it('should log in and redirect to My Account', () => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.get('.login').click();
    LoginPage.login('najdi013@gmail.com', 'password');

    // Verify redirection to "My account" page
    cy.get('.page-heading').should('have.text', 'My account');

    // Verify the user name is displayed in the top right corner
    cy.get('.account').should('contain.text', 'Joe Doe');
});
