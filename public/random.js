const words = [
    { text: "Amazing !", weight: 4},
    { text: "Super !", weight: 5},
    { text: "Nice !", weight: 6},
    { text: "Wow !!", weight: 3},
    { text: "Excellent !!!", weight: 2},
    { text: "You are the Best !!!", weight: 1}
];
// weight 5 most common to weight 1 least common

function getRandomWord(){
    const totalWeight = words.reduce((sum, w)=> sum + w.weight, 0);
    let random = Math.random()*totalWeight;

    for(let i = 0; i < words.length; i++)
    {
        if(random<words[i].weight){
            return words[i].text;
        }
        random -= words[i].weight;
    }
}

// function showWord(){
//     document.getElementById("word").textContent = getRandomWord();
// }

