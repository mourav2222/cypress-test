
describe("My first test", () => {
    it('Visit website', () => {
        cy.visit('http://www.python.org')
        cy.title().should('contains', 'Python')

    })

    it('Find pycon', () => {
        cy.visit('http://www.python.org')
        cy.title().should('contains', 'Python')
        // cy.get('[name="q"]').type('pycon{enter}')
        cy.get('[name="q"]').type('xaxa{enter}')
        cy.should('not.contain', 'No results found.')
        //cy.contains('CCCP')

    })
})
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })