// function Voiture (marque, model){
//     this.marque = marque
//     this.model = model
// }

// let maVoiture = new Voiture("peugeot", "407");
// console.log(maVoiture);

// class MaListe {
//     constructor(nom, age, adresse){
//         this.nom = nom
//         this.age = age
//         this.adresse = adresse
//     }
// }

// let studientListe = new ("Marc", 30, "Rouen");
// console.log(studientListe);

class Personnage{
    nom = "";
    vie = 0;
    attack = 0;
    defense = 0;
    existe = false;
    constructor(_nom){
        if (_nom != ""){
            this.nom = _nom;
            this.vie = this.nombreAleatoire(0, 100);
            this.attack = this.nombreAleatoire(0, 100);
            this.defense = this.nombreAleatoire(0, 100);
            this.existe = true;
        }
        else{
            console.log("Vous devez renseigner un nom ");
        }   
       
    }
   nombreAleatoire (min, max) {
        return Math.round((max - min) * (Math.random()) + min);
   }
   info(){
    console.log(` nom : ${this.nom}, vie restant : ${this.vie}, nombre d'attaque : ${this.attack}, niveau de défense : ${this.defense}`);
   }
   attaquer(defenseur){
    console.log(` ${this.nom} attaque  ${defenseur.nom}`);
    if (this.attack > defenseur.defense ){
            defenseur.defense = defenseur.defense - 10;
    }
    if ( this.attack == defenseur.defense){
            defenseur.defense = defenseur.defense - 5;
    }
    if ( this.attack < defenseur.defense){
       this.attack = this.attack - 5; 
    }
    console.log(perso1.info());
    console.log(perso2.info());
   }
}

let perso1 = new Personnage("toto");
console.log(perso1);
let perso2 = new Personnage("boubou");
console.log(perso2);

console.log(perso1.info());
console.log(perso2.info());

perso1.attaquer(perso2);
// let perso1 = new Personnage("toto");
// console.log(perso1);

// let var_perso1 = perso1.info();

// let perso2 = new Personnage("boubou");
// console.log(perso2);

// let var_perso2 = perso2.info();





