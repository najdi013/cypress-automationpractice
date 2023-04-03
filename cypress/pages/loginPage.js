class LoginPage {
    get emailInput() {
        return cy.get('#email');
    }

    get passwordInput() {
        return cy.get('#passwd');
    }

    get loginButton() {
        return cy.get('#SubmitLogin');
    }

    login(email, password) {
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.loginButton.click();
    }
}

export default new LoginPage();