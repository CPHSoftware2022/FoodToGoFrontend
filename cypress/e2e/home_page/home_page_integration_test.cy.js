describe('Navigation', () => {
    it('should be on homepage', () => {
      // Start from the index page
      cy.visit('/')
      cy.wait(1000)
  
      // The new page should contain an h1 with "About page"
      cy.get('h1').contains('Food To Go')
      cy.get('h1').contains('Welcome to')
      cy.get('h1').contains('Featured Item')
      cy.get('a').contains('Orders').click()
      cy.wait(1000)
 
      cy.get('h1').contains('Your orders')
      cy.get('th').contains('Order ID')
      cy.get('th').contains('Order Start')
      cy.get('th').contains('Order End')
      cy.get('button').contains('Give Feedback on latest Order')
    })
  })