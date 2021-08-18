///<reference types="cypress"/>

describe('Valida el formulario', () => {
    it('subit al formulario y mostrar la alerta de error', () => {
        cy.visit('/index.html');//primero visita la url sino fallara
        cy.get('[data-cy=formulario]')//Los elementos del doom se selecciona con get
            .submit();

        cy.get('[data-cy=alerta]')//seleccionar alerta
            .should('have.class', 'alert-danger')//verificar que tenga la clase alerte-danger
            .invoke('text')//le decimos que seleccione el texto
            .should('equal', 'Todos los campos son Obligatorios');//y que sea igual a 


    });

});