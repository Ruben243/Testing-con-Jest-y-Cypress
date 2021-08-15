import Citas from "../js/classes/Citas";//Importsar archivo donde estan las funciones
describe('Probear la clase de Citas', () => {
    const id = Date.now();//id de manera global para que sea el mismo para todos
    const citas = new Citas();//nueva instancia de citas
    test('Crear nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Fox',
            propietario: 'Ruben',
            telefono: '34235235232',
            fecha: '10-12-2021',
            hora: '10:30',
            sintomas: 'No duerme'
        };

        citas.agregarCita(citaObj);//metodo para agregar cita
        expect(citas).toMatchSnapshot();//crea el snapshot
    });
    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Cat',
            propietario: 'Ruben',
            telefono: '34235235232',
            fecha: '10-12-2021',
            hora: '10:30',
            sintomas: 'No duerme'
        };
        citas.editarCita(citaActualizada);//metodo para editar cita
        expect(citas).toMatchSnapshot();
    });
    test('Eliminar cita', () => {
        citas.eliminarCita(id);//eliminar cita
        expect(citas).toMatchSnapshot();
    })
});