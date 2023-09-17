describe("template spec", () => {
  beforeEach(() => cy.visit("http://localhost:3000/"));
  it("passes", () => {});
  it("check the header title", () => {
    cy.get("header h1").contains("CoinGecko App");
  });
  it("check the page options", () => {
    cy.get("button").contains("Prev");
    cy.get("button").contains("Next");
    cy.get("button").contains("Search");
    cy.get('input[placeholder*="Search Coin on Full Name"]');
  });
  it("check the coins table", () => {
    cy.get("table");
    cy.get("table tbody tr").should("have.length", 100);
    cy.get("table tbody tr td:eq(1)").contains("Bitcoin");
    cy.get("button").contains("Next").click();
    cy.wait(1000)
    cy.get("table tbody tr td:eq(1)").contains("NEXO");
    cy.get("button").contains("Prev").click();
    cy.wait(1000)
    cy.get("table tbody tr td:eq(1)").contains("Bitcoin");
  });
});
