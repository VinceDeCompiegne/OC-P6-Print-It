const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

describe('Tests du carrousel', () => {
  beforeEach(() => {

    cy.visit('http://127.0.0.1:5500/index.html');

  });

  it('Test du premier click sur le premier dot', () => {
 
    
    // Cliquez sur le premier dot (ou ajustez l'index selon vos besoins)
        cy.get('.dot').first().should('be.visible').click();
        
        // Obtenez l'index après avoir cliqué
        cy.get('.dot').first().invoke('index').then((clickedIndex) => {
          // Vérifiez que l'image et la légende sont correctes
          cy.get('.banner-img').should('have.attr', 'src', `./assets/images/slideshow/${slides[clickedIndex].image}`);
          cy.get('p.tag-line').should('have.html', `${slides[clickedIndex].tagLine}`);
        });

    });

    it('Test du premier click sur le dernier dot', () => {
   
        // Cliquez sur le dernier dot (ou ajustez l'index selon vos besoins)
        cy.get('.dot').last().should('be.visible').click();

        // Obtenez l'index après avoir cliqué
        cy.get('.dot').last().invoke('index').then((clickedIndex) => {
          // Vérifiez que l'image et la légende sont correctes
          cy.get('.banner-img').should('have.attr', 'src', `./assets/images/slideshow/${slides[clickedIndex].image}`);
          cy.get('p.tag-line').should('have.html', `${slides[clickedIndex].tagLine}`);
        });

    });

    it('Nombre de dot correspond à la taille du tableau "slides"', () => {
   
      cy.get('.dot').should('have.length', `${slides.length}`);

    });

    it('Test du premier click sur la flêche de droite', () => {

      for (let i=0 ; i < 5; i++){

        // Cliquez sur le dernier dot (ou ajustez l'index selon vos besoins)
        cy.get('.arrow_right').first().should('be.visible').click();

        // Obtenez l'index après avoir cliqué
        cy.get('.dot_selected').first().invoke('index').then((clickedIndex) => {
          // Vérifiez que l'image et la légende sont correctes
          cy.get('.banner-img').should('have.attr', 'src', `./assets/images/slideshow/${slides[clickedIndex].image}`);
          cy.get('p.tag-line').should('have.html', `${slides[clickedIndex].tagLine}`);
        });

      }

    });

    it('Test du premier click sur la flêche de gauche', () => {

      for (let i=0 ; i < 5; i++){

        // Cliquez sur le dernier dot (ou ajustez l'index selon vos besoins)
        cy.get('.arrow_left').first().should('be.visible').click();

        // Obtenez l'index après avoir cliqué
        cy.get('.dot_selected').first().invoke('index').then((clickedIndex) => {
          // Vérifiez que l'image et la légende sont correctes
          cy.get('.banner-img').should('have.attr', 'src', `./assets/images/slideshow/${slides[clickedIndex].image}`);
          cy.get('p.tag-line').should('have.html', `${slides[clickedIndex].tagLine}`);
        });

      }

    });

});






