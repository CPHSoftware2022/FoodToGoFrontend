describe('Navigation', () => {
    it('should be on homepage', () => {
      // Start from the index page
      cy.visit('/')

  
      // The new page should contain an h1 with "About page"
      cy.get('h1').contains('Food To Go')
      cy.get('h1').contains('Welcome to')
      cy.get('h1').contains('Featured Item')

    })
  })