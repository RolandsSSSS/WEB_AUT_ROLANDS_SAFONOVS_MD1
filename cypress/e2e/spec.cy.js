import SelectablePage from "../pageObjects/selectable.page";

describe('Scenarios', () => {
  context("Selectable scenarios", () => {
    beforeEach(() => {
      cy.visit("https://demoqa.com/selectable", { failOnStatusCode: false });
    });

    it("Select specific items in grid and validate", () =>{
      cy.contains("Grid").click();

      SelectablePage.clickGridNumbers('Two', 'Four', 'Six', 'Eight');
      SelectablePage.validatePickedNumbers('Two', 'Four', 'Six', 'Eight');
      SelectablePage.validateNotPickedNumbers('One', 'Three', 'Five', 'Seven', 'Nine');
    });
  });
});