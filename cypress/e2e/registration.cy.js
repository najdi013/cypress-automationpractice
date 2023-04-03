describe('', () => { })

it('should register new account and redirect to My account page', () => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.get('.login').click()
    cy.get('#email_create').type('xd123@example.com')
    cy.get('#SubmitCreate').click()
    cy.get('#customer_firstname').type('Test')
    cy.get('#customer_lastname').type('Test')
    cy.get('#passwd').type('password')
    cy.get('#submitAccount').click()

    // Verify redirection to "My account" page
    cy.location().should((loc) => {
        expect(loc.href).to.eq('http://automationpractice.pl/index.php?controller=my-account')
    })

    cy.get('.page-heading').should('have.text', 'My account');

    // Verify the user name is displayed in the top right corner
    cy.get('.account').should('contain.text', 'Test Test');
});
