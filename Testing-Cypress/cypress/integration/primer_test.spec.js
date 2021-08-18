//mejora el autocompletado
///<reference types="cypress"/>

describe('Carga la pagina principal', () => {
    it('Carga la pagina principal', () => {
        cy.visit('/index.html');//primero visita la url sino fallara
        cy.get('[data-cy="titulo-proyecto"]')//verifica que exista el elemento y contenga un texto.
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');


        //Verificar el texto de las citas
        cy.get('[data-cy=citas-heading')
            .invoke('text')
            .should('equals', 'No hay Citas, comienza creando una')


    });
});