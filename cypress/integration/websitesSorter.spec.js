describe('Websites Sorter', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3003'); // החלף עם כתובת ה-URL של האפליקציה שלך
    });
  
    it('should sort by name when "Sort by name" button is clicked', () => {
      cy.get('.all-button button').click();
      cy.get('#Name-sort').click();
  
      cy.get('.all-websites ul li').then((listItems) => {
        const names = [...listItems].map((li) => li.textContent);
  
        expect(names).to.deep.equal([
          '👉 Name: Alice |📅 Date: 2023-06-01',
          '👉 Name: Bob |📅 Date: 2023-07-01',
          '👉 Name: John |📅 Date: 2023-05-01',
        ]);
      });
    });
  
    it('should sort by date when "Sort by Date" button is clicked', () => {
      cy.get('.all-button button').click();
      cy.get('#Date-sort').click();
  
      cy.get('.all-websites ul li').then((listItems) => {
        const dates = [...listItems].map((li) => li.textContent.match(/Date: (.+)/)[1]);
  
        expect(dates).to.deep.equal(['2023-05-01', '2023-06-01', '2023-07-01']);
      });
    });
  });