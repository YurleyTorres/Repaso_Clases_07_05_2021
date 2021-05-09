class persona{
    static ejecutar = null;
    static historico = [];
    constructor({...arg}){
        this.nombre = arg.nombre;
        this.edad = arg.edad;
        this.genero = arg.genero;
    }
    static getInst({...arg}){
        return (!(this.ejecutar instanceof Object))
                ? this.ejecutar = new persona(arg)
                : this.ejecutar.Accesos(arg);
    }
    Accesos({...arg}){
        let obj = []; 
 
        obj['Storage'] = [];
        obj.Storage.sessionStorage = [];
        obj.Storage.localStorage = [];
        for(let data in Object.assign({}, persona.ejecutar)){
            if(data!= 'ejecutar') obj[data] = eval(`persona.ejecutar.${data}`);
        }
   
        //Opcional
        for(let data in obj.Storage){
            switch (data) {
                case 'sessionStorage':
                    for(let i=0; i<sessionStorage.length; i++) {
                        let key = sessionStorage.key(i);
                        obj.Storage.sessionStorage[key] = sessionStorage.getItem(key);
                    }
                    break;
                case 'localStorage':
                    for(let i=0; i<localStorage.length; i++) {
                        let key = localStorage.key(i);
                        obj.Storage.localStorage[key] = localStorage.getItem(key);
                    }
                    break;
                default:

                    break;
            }
            
        }


        persona.historico.push(obj);
        console.log(persona.historico);
        persona.ejecutar = new persona(arg);
        return this.ejecutar;
    }
    set setNombre(p1){
        this.nombre = p1;
    }
    Saludar(){
        this.saludo = `Hola señor(a) ${this.nombre}`;
        return this.saludo;
    }
}

persona.getInst({nombre: "Marly Yurley Torres Silva", edad: 33, genero: "Femenino"});
persona.ejecutar.Saludar();
persona.ejecutar.setNombre = "Yurley";
persona.getInst({});
// for(let data in sessionStorage){
//     if(data!='length' && data!='clear' && data!='clear'){
//         console.log(data);
//     }
// }
localStorage.setItem('Marly',34,"Femenino"); 
sessionStorage.setItem('Hola',"buen día");
