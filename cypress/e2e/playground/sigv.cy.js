//Test specified: https://jira.porscheinformatik.com/jira/browse/C3DEV-22029

describe('sigv', () => {
    it('sigv', () => {
        cy.on('uncaught:exception', (error, runnable) => {
            return false;
        });

        cy.visit('localhost:4200');

        cy.get('input[placeholder="order.item.misc-charging.search-placeholder"]', {timeout: 5000}).should('be.visible');

        cy.wait(500);
        const input = cy.get('clr-datalist-container').find('input').first();

        input.type("-");
        cy.get('datalist').find('option').first().invoke('val').then((value) => {
            input.type('{selectall}' + value);
            cy.get('form').submit({force: true});
        });

    });
});