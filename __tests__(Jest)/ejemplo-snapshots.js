const cliente={
    nombre:'Ruben Gines',
    dinero:500,
    tipo:'Premiun'
}

describe('Testing al Cliente',()=>{
    test('¿Es Ruben?',()=>{
        expect(cliente).toMatchSnapshot('Ruben');
    });
});