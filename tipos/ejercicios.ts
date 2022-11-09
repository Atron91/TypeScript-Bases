(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string,string] = [batman,superman];
    const villano: ( string | number | boolean )[] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum power {  acuman = 0,
                  batman = 1,
                  flash = 5,
                  superman = 100 }
    const fuerzaFlash = power.flash;
    const fuerzaSuperman = power.superman;
    const fuerzaBatman = power.batman;
    const fuerzaAcuaman = power.acuman;
  
    // Retorno de funciones
    
    activar_batiseñal( );
    function activar_batiseñal( ): string {

      return 'activada';
    }
    
    
    
    pedir_ayuda();
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  