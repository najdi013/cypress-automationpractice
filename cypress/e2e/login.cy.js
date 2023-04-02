describe('', () => {
})

it('should log in and redirect to My Account', () => {
    cy.visit('http://automationpractice.pl/index.php')
    cy.get('.login').click();
    cy.get('#email').type('najdi013@gmail.com');
    cy.get('#passwd').type('password');
    cy.get('#SubmitLogin').click();
    // Verify redirection to "My account" page
    cy.get('.page-heading').invoke('text').then((text) => {
        expect(text.toLowerCase()).to.contain('my account');
    });
    // Verify the user name is displayed in the top right corner
    cy.get('.account').should('contain', 'Joe Doe');
});
