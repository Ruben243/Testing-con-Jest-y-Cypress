const password="123456";

describe("valida que el password no este vacio y tenga 6 caracteres",()=>{
    test('Que el password tenga seis caracteres',()=>{
        expect(password).toHaveLength(6);
    });
    test('Password No vacio',()=>{
        expect(password).not.toHaveLength(0)
    })
});