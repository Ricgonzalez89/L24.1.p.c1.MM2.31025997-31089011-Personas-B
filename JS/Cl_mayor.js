export default class Cl_mayor{
    constructor(){
        this.acumEdad = 0;
        this.mayorEdad = 0;
        this.contPersona = 0;
    }

    procesarPersona(p){
        this.contPersona++;
        this.acumEdad += p.edad;
        if (p.sexo === "F" && p.edad >this.mayorEdad)
            this.mayorEdad = p.edad;
    }

    devolverMayorEdad(){
        return this.mayorEdad;
    }

    calcPromedioEdad(){
        if (this.contPersona > 0)
            return this.acumEdad / this.contPersona;
        else
            return 0;
    }
}