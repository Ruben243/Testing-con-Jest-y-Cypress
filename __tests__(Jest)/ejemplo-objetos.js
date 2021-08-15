const cliente={
    nombre:'Ruben',
    dinero:500
}
describe('Testing al Cliente',()=>{
    test('El cliente es premiun',()=>{
        expect(cliente.dinero).toBeGreaterThan(400);
    });
    test('¿Es Ruben?',()=>{
        expect(cliente.nombre).toBe('Ruben');
    });

    test('No es otro Cliente',()=>{
        expect(cliente.nombre).not.toBe('Pedro');
    });
});