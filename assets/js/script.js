// exercice 1 

function dateOfToday(){

    let date = new Date();
    let day =  date.getDate() ;
    let month = (date.getMonth()+1) ;
    let year = date.getFullYear();
    alert("Bonjour, nous sommes le " + day + "/" + month + "/" + year);
}

dateOfToday()

// exercice 2

function yourName (name){

    alert("Bonjour " + name + ", je suis content de te revoir !");
}

yourName("Jean")

// exercice 3 

function somme(nb1,nb2){

    console.log("La somme est : " + (nb1+nb2));
}

somme(26,4)

// exercice 4

function nombreDeVoyelle(chaineDeCaracteres){
    longueurChaine = chaineDeCaracteres.length
    let voyelle = 0
    for (let index=0; index < (longueurChaine+1); index = index +1){
        let minusculeChaine = chaineDeCaracteres.toLowerCase();
        if (minusculeChaine[index]=="a" || minusculeChaine[index]=="e" ||minusculeChaine[index]=="i"  || minusculeChaine[index]=="o"  ||minusculeChaine[index]=="u"  || minusculeChaine[index]=="y" ){
            voyelle = voyelle + 1;
        }  
    }
    console.log("Le nombre de voyelles dans la chaîne de caractère est : "+ voyelle);
    
}

nombreDeVoyelle("Je m'appelle Maud")
nombreDeVoyelle("NLMLKDFJQ")
nombreDeVoyelle("EAUeau")
nombreDeVoyelle("")

// exercice 5 

let nbAnneesBissextiles = (date1,date2) => {
    if (date1>date2) {
       console.log(parseInt((date1-date2)/4+1));
   }
   else if (date2>date1){
        console.log(parseInt((date2-date1)/4+1));
   }}

nbAnneesBissextiles(2025,2020)
nbAnneesBissextiles(2011,2020)
nbAnneesBissextiles(2000,2025)
nbAnneesBissextiles(2025,2000)

// exercice 6

function nbAleatoires(){
    let tableauNb = [];

    for (let index = 0; index<7;index=index+1){
        tableauNb.push(Math.floor(Math.random()*100));
    }   
    
    console.log(tableauNb)}

nbAleatoires()
nbAleatoires()

// exercice 7

function factorielle(nb){
    let total = 1
    for (let element=1; element <= nb; element = element+1){
        total = total * element
    }
    console.log(total)
}
factorielle(2)
factorielle(0)
factorielle(6)

// exercice 8

let getStringLength = string => {
    let stringLength;
    if(string.length === 1){
        stringLength = 'La chaîne contient un seul caractère';
    }
    else {
        stringLength=`La chaîne contient ${string.length} caractères`;
    }
    return stringLength
}
console.log(getStringLength("1"))
console.log(getStringLength("blabalbla"))
console.log(getStringLength(""))

// exercice 9

function getMassage(name){
    return `Bonjour, ${name} ! Comment vas-tu?`;
}
console.log(getMassage('Pierre'))
