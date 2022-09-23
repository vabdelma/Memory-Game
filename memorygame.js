

const cardArray = [
    {
        name: "Animal Crossing",
        img: "images/Animal Crossing.png"
    },
    {
        name: "Animal Crossing",
        img: "images/Animal Crossing.png"
    },
    {
        name: "Assasins Creed",
        img: "images/Assasins Creed.png"
    },
    {
        name: "Assasins Creed",
        img: "images/Assasins Creed.png"
    },
    {
        name: "Fortnite",
        img: "images/Fortnite.png"
    },
    {
        name: "Fortnite",
        img: "images/Fortnite.png"
    },
    {
        name: "Pokemon",
        img:"images/Pokemon.png"
    },
    {
        name: "Pokemon",
        img:"images/Pokemon.png"
    },
    {
        name: "Rockstar",
        img: "images/Rockstar.png"
    },
    {
        name: "Rockstar",
        img: "images/Rockstar.png"
    },
    {
        name: "World of Warcraft",
        img: "images/World of Warcraft.png"
    },
    {
        name: "World of Warcraft",
        img: "images/World of Warcraft.png"
    },
]

cardArray.sort(()=> 0.5 - Math.random())

const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("#score")
var cardsChosen =[]
var cardsChosenId = []
var cardsWon = []

function createGrid(){
    for(let i = 0; i<cardArray.length; i++){
        var card = document.createElement("img")
        card.setAttribute("src","images/Back.png")
        card.setAttribute("data-id",i)
        card.addEventListener("click",flipCard)
        grid.appendChild(card)

    }
}


function checkForMatch() {
    var cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(cardsChosen[0]===cardsChosen[1]){
        alert("match!")
        cards[optionOneId].setAttribute("src","images/blank.png")
        cards[optionTwoId].setAttribute("src","images/blank.png")
        cardsWon.push(cardsChosen)

    }
    else{
        cards[optionOneId].setAttribute("src","images/Back.png")
        cards[optionTwoId].setAttribute("src","images/Back.png")
        alert("Sorry not a match")
    }
    cardsChosen = []
    cardsChosenId = []

    resultDisplay.textContent = cardsWon.length

    if(cardsWon.length === cardArray.length/2){

        resultDisplay.textContent = "Congratulations you won the game"
    }


}




function flipCard(){
    var cardId= this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkForMatch, 1000)
    }
}






createGrid() 




