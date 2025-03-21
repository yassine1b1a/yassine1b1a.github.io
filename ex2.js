//Exercice 1 :
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("#emploiDuTemps td:not(.jour)").forEach(cell => {
        cell.addEventListener("click", function () {
            let matiere = prompt("Entrez la matière :");
            let enseignant = prompt("Entrez l'enseignant :");
            if (matiere && enseignant) {
                cell.innerHTML = `<b style="color:blue">${matiere}</b><br>${enseignant}`;
            }
        });
    });

    // Exercice 2: 
    document.getElementById("ajouterEtudiant").addEventListener("click", function () {
        let nom = prompt("Entrez le nom de l'étudiant :");
        let note = prompt("Entrez la note de l'étudiant :");
        if (nom && note && !isNaN(note)) {
            ajouterEtudiant(nom, parseFloat(note));
        }
    });
});

function ajouterEtudiant(nom, note) {
    let table = document.getElementById("tableEtudiants").getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    let id = table.rows.length;

    row.insertCell(0).innerText = id;
    row.insertCell(1).innerText = nom;
    row.insertCell(2).innerText = note;
    row.insertCell(3).innerHTML = `<a href='#' onclick='supprimerEtudiant(this)'>Supprimer</a>`;
    
    row.cells[1].addEventListener("click", modifierCellule);
    row.cells[2].addEventListener("click", modifierCellule);
    
    row.cells[2].style.color = (note < 10) ? "red" : "green";
}

function modifierCellule() {
    let nouvelleValeur = prompt("Entrez la nouvelle valeur :", this.innerText);
    if (nouvelleValeur !== null) {
        this.innerText = nouvelleValeur;
        if (this.cellIndex === 2) { // Vérification pour les notes
            this.style.color = (parseFloat(nouvelleValeur) < 10) ? "red" : "green";
        }
    }
}

function supprimerEtudiant(element) {
    element.closest("tr").remove();
}
