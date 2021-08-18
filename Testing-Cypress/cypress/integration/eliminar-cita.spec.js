///<reference types="cypress"/>

describe('Crea cita', () => {
    it('subit al formulario y mostrar la alerta de error', () => {
        cy.visit('/index.html');//primero visita la url sino fallara
        cy.get('[data-cy=mascota-input]')
            .type('Fox');
        cy.get('[data-cy=propietario-input]')
            .type('Ruben');
        cy.get('[data-cy=telefono-input]')
            .type('123456');
        cy.get('[data-cy=fecha-input]')
            .type('2021-07-24');
        cy.get('[data-cy=hora-input]')
            .type('16:10');
        cy.get('[data-cy=sintomas-input]')
            .type('El perro no come')
        cy.get('[data-cy=submit-input]')
            .click();

        cy.get('[data-cy=btn-eliminar]')
            .click()
        cy.screenshot();  //toma una captura


    });

});