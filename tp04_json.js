let entreprise = {
    "Nom":"Google",
    "siegeSocial": {"adresse":"GooglePlex", "etat":"californie","pays":"USA"},
    "Fondateurs":[
    {"Nom":"Larry Page", "dateDeNaissance":"26/03/1973", 
        "lieuDeNaissance": { "Ville":"East Lansing", "etat":"Michigan"}},
    {"Nom":"Sergey Brin", "dateDeNaissance":"21/08/1973", 
        "lieuDeNaissance": {"Ville":"Moscou", "etat":"Union Soviétique"}}],
    "chiffreAffaire":{"unite":"milliards de $", "valeurs":[
    {"date":"2008","montant":16.49},
    {"date":"2012","montant":37.97},
    {"date":"2016","montant":89.46},
    {"date":"2018","montant":136.2}]}};

    for (let i=0; i<entreprise.Fondateurs.length;i++){
        console.log(entreprise.Fondateurs[i]);
    }

    for (let i=0; i<entreprise.chiffreAffaire.valeurs.length;i++){
        console.log(entreprise.chiffreAffaire.valeurs[i]);
    }