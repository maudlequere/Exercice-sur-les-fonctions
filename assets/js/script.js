// exercice 1 

function dateOfToday(){

    let date = new Date();
    let day =  date.getDate() ;
    let month = (date.getMonth()+1) ; // 0 à 11 
    let year = date.getFullYear();
    alert("Bonjour, nous sommes le " + day + "/" + month + "/" + year); // pour plus de lisibilité écrire le message dans une variable et alert(message)
}

dateOfToday();

// exercice 2

function yourName (name){

    alert("Bonjour " + name + ", je suis content de te revoir !");
}

yourName("Jean");

// exercice 3 

function somme(nb1,nb2){

    console.log("La somme est : " + (nb1+nb2));
} /* if (isNaN(nbr1) || isNaN(nbr2)){
        console.log("Nombres invalides");
        return;
    }
    Pour que si à la place de nb1 ou nb2 l'argument n'est pas un nombre, cela ne renvoie pas NaN*/

somme(26,4);

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
    console.log("Le nombre de voyelles dans la chaîne de caractère est : " + voyelle);
    
}

nombreDeVoyelle("Je m'appelle Maud");
nombreDeVoyelle("NLMLKDFJQ");
nombreDeVoyelle("EAUeau");
nombreDeVoyelle("");

/* approche de yanis : 

function compterVoyelles(chaine) {

    const voyelles = 'aeiouy';
    let chaine_minuscule = chaine.toLowerCase();

    let compteur = 0;
    for (let lettre of chaine_minuscule) {
        if (voyelles.includes(lettre)) {
            compteur++;
        }
    }
    return compteur;
}

console.log("Nombre de voyelles :", compterVoyelles("Bonjour"));

*/

// exercice 5 

let nbAnneesBissextiles = (date1,date2) => {
    if (date1>date2) {
       console.log(parseInt((date1-date2)/4+1));
   }
   else if (date2>date1){
        console.log(parseInt((date2-date1)/4+1));
   }}

nbAnneesBissextiles(2025,2020);
nbAnneesBissextiles(2011,2020);
nbAnneesBissextiles(2000,2025);
nbAnneesBissextiles(2025,2000);

/* Approche de Teodor

let nbBissextiles = (annee1,annee2) =>{
    
    if(annee1>annee2){
        let temp = annee1;
        annee1 = annee2;
        annee2 = temp;
    }
    //Cas 1: l'année est divisible par 4 mais pas par 100
    //Cas 2: l'année est divisible par 400
    let compteur = 0
    for(let i=annee1;i<=annee2;i++){
        if((i%4==0 && i%100!=0)||(i%400==0)){
            compteur++;
        }
    }
    console.log(`Entre ${annee1} et ${annee2} il y a ${compteur} années bissextiles`)
}
nbBissextiles(2025,2000);
nbBissextiles(2000,2025) */

// exercice 6

function nbAleatoires(){
    let tableauNb = [];

    for (let index = 0; index<7;index=index+1){
        let nombre =Math.floor(Math.random()*10);

        if (tableauNb.includes(nombre)){
            index = index - 1;
        }
         if (!tableauNb.includes(nombre)){
        tableauNb.push(nombre);}
    }   
    
    console.log(tableauNb)}

nbAleatoires();
nbAleatoires();

/* approche d'Arthur
function nombresAleatoires() {

    const nombres = [];

    // Tant que le tableau ne contient pas 7 nombres uniques
    while (nombres.length < 7) {

        // je vais générer un nombre aléatoire entre 0 et 99
        let nombre = Math.floor(Math.random() * 100);

        // Vérifier si le nombre n'est pas déjà dans le tableau
        if (!nombres.includes(nombre)) {
            nombres.push(nombre); // Ajouter le nombre au tableau
        }
    }

    return nombres;
}
console.log(nombresAleatoires())*/

// exercice 7

function factorielle(nb){
    let total = 1
    for (let element=1; element <= nb; element = element+1){
        total = total * element
    }
    console.log(total)
}
factorielle(2);
factorielle(0);
factorielle(6);

/* approche du cours
function factorielle(nb) {
    
    if (nb==1 ||nb==0){
        return 1
    }

    return nb*factorielle(nb-1)
} */

// exercice 8

let getStringLength = string => {
    let stringLength;
    if(string.length === 1){
        stringLength = 'La chaîne contient un seul caractère';
    }
    else {
        stringLength=`La chaîne contient ${string.length} caractères`;
    }
    return stringLength;
}
console.log(getStringLength("1"));
console.log(getStringLength("blabalbla"));
console.log(getStringLength(""));

//correction : bonne traduction

// exercice 9

function getMassage(name){
    return `Bonjour, ${name} ! Comment vas-tu?`;
}
console.log(getMassage('Pierre'));

//correction : bonne traduction
