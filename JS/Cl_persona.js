export default class Cl_persona{
    constructor(n, e, s){
        this.nombre = n;
        this.edad = +e;
        this.sexo = s;
    }

    set nombre(n){
        this._nombre = n;
    }

    set edad(e){
        this._edad = +e;
    }

    set sexo(s){
        this._sexo = s;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    get sexo(){
        return this._sexo;
    }
}