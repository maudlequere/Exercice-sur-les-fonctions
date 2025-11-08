// exercice 1 

function dateOfToday(){

    let date = new Date();
    let day =  date.getDate() ;
    let month = (date.getMonth()+1) ;
    let year = date.getFullYear();
    alert("Bonjour, nous sommes le " + day + "/" + month + "/" + year);
}

//dateOfToday()

// exercice 2

function yourName (name){

    alert("Bonjour " + name + ", je suis content de te revoir !");
}

//yourName("Jean")

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

