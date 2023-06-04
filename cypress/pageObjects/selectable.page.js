class SelectablePage {
    static clickGridNumbers(...Numbers){
        Numbers.forEach((number) => {
            return cy.get('.list-group-item.list-group-item-action').contains(number).click();
        });
    }

    static validatePickedNumbers(...Numbers){
        Numbers.forEach((number) => {
            return cy.contains(number).should('have.class', 'active');
        });
    }

    static validateNotPickedNumbers(...Numbers){
        Numbers.forEach((number) => {
            return cy.contains(number).should('not.have.class', 'active');
        });
    }
}

export default SelectablePage;