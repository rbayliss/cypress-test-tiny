describe('page', () => {
  it('works', () => {
    cy.visit('https://www.mass.gov/guides/massachusetts-identification-id-requirements');
    cy.on('uncaught:exception', function(err) {
      // Ignore known GTM error.
      if(err.message.startsWith('$ is not a function')) {
          return false;
      }
    });
    cy.get('#main-content').screenshot();
  })
})
