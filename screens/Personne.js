export default class Personne {
    constructor(nom,prenom,age,sexe,poid,taille){
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._sexe = sexe;
        this._poid = poid;
        this._taille = taille;
    }

    get nom() {
        return this._nom;
    }

    set nom(value) {
        this._nom = value;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(value) {
        this._prenom = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get sexe() {
        return this._sexe;
    }

    set sexe(value) {
        this._sexe = value;
    }

    get poid() {
        return this._poid;
    }

    set poid(value) {
        this._poid = value;
    }

    get taille() {
        return this._taille;
    }

    set taille(value) {
        this._taille = value;
    }

    afficher(){
        console.log("prenom" + this.prenom + " nom" + this.nom + " Sexe" + this._sexe + " Poid" + this.poid +" Taille" + this.taille)
    }
}
