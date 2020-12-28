
describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')

    cy.contains('ivysaur').click()
  })

  it('navigate from the main page to ivysaur', function() {
    // cy.visit('http://localhost:5000/pokemon/')
    cy.contains('chlorophyll')
  })
})