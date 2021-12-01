//Stockage dans la variable 'buttons' de tous les boutons
const buttons = document.querySelectorAll('.btn');
//Stockage dans la variable 'result' du résultat de l'opération
const result = document.getElementById('result');

//Au clic sur le bouton, récupération de l'id du bouton et ajout dans la zone de résultat
buttons.forEach((button)=>
{
    button.addEventListener('click', (e)=>
    {
        result.textContent += e.target.id;
    });
});

//Grâce à la méthode 'eval' calcul ce qui est dans la zone de calcul au clic sur le bouton '='
equal.addEventListener('click', ()=>
{
    result.textContent = eval(result.textContent);
});

// Remet la zone de calcul vide au clic sur le bouton 'C'
clear.addEventListener('click', ()=>
{
    result.textContent = "";
});