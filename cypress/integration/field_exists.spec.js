/// <reference types="cypress" />
describe("A field not exists", () => {
  it("Verify the presence of the field named Made Up Field that does not exist", () => {
    cy.visit("https://www.planday.com/signup/signup/#/form");

    cy.contains("Made Up Field , Error!This Field does not exist").should(
      "not.exist"
    );
    cy.get("[name='Made Up Field']").should("not.exist");
  });
});
