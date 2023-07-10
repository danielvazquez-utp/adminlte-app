describe('Pruebas del componente Demo', () => { 

    test('Esta prueba es de demostración', () => {
      
        // if( true === true ){
        //     throw new Error('No se puede realizar la acción');
        // }
    
        // 1. Inicialización
        const message = 'Hola mundo';
    
        // 2. Estímulo
        const message2 = message.trim();
    
        // 3. Observación del comportamiento
        expect(message).toBe( message2)
    
    })

})
