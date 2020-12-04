/// <reference types="cypress" />

describe("submit with invalid data", () => {
  it("Submit form with invalid data without checking the check box", () => {
    cy.visit("https://www.planday.com/signup/signup/#/form");

    cy.get("input[name=email]").first().type("invalid email");
    cy.get("input[name=fullname]").type("invalid");
    cy.get("input[name=company]").type("invalid");
    cy.get("#consentLabel");
    cy.get(".btn.btn-primary.w-100.next_step").click();
    cy.get("[name=industry]");
    cy.get("[name=employees]");
    cy.get("input[name=phone]").type("9999");
    cy.get("input[name=password]").type("jjj");
    cy.get("span").contains("Start Your Free Trial").click();

    cy.get("#emailInvalid").should("exist");
    cy.get("#fullnameInvalid").should("exist");
    cy.get("#companyInvalid").should("exist");
    cy.get("#industryInvalid").should("exist");
    cy.get("#employeesInvalid").should("exist");
    cy.get("#phoneInvalid").should("exist");
    cy.get("#passwordInvalid").should("exist");
  });
});
