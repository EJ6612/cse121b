let today = new Date();
console.log(today);

let weekday = today.getDay();
console.log(weekday);

function rollDice()
{
    let number = 0;
    switch(weekday)
    {
        case 0:
            number = Math.ceil(Math.random() * (40 - 5));
            if (number == 30)
            {
                randomButton.value = "3️⃣0️⃣";
            }

            else
            {
                randomButton.value = "Happy Sunday!";
            }
            break;
    
        case 1:
            number = Math.ceil(Math.random() * (200 - 30));
            if (number == 100)
            {
                randomButton.value = "💯";
            }

            else
            {
                randomButton.value = "Grumpy Monday.";
            }
            break;
    
        case 2:
            number = Math.ceil(Math.random() * (150 - 25));
            
            if (number == 100)
            {
                randomButton.value = "💯";
            }

            else
            {
                randomButton.value = "Best Tuesday!";
            }
            break;
    
        case 3:
            number = Math.ceil(Math.random() * (333 - 66));
            if (number == 100)
            {
                randomButton.value = "💯";
            }

            else
            {
                randomButton.value = "HUMP DAY";
            }
            break;
    
        case 4:
            number = Math.ceil(Math.random() * (75 - 2));
            if (number == 50)
            {
                randomButton.value = "5️⃣0️⃣";
            }

            else
            {
                randomButton.value = "Almost... there...";
            }
            break;
    
        case 5:
            number = Math.ceil(Math.random() * (421 - 70));
            if (number == 100)
            {
                randomButton.value = "💯";
            }

            else
            {
                randomButton.value = "It's FRIDAY FRIDAY gettin down on FRIDAAY";
            }
            break;
    
        case 6:
            number = Math.ceil(Math.random() * (666 - 333));
            if (number == 100)
            {
                randomButton.value = "💯";
            }

            else
            {
                randomButton.value = "Caturday Saturday";
            }
            break;

    }

    randomText = document.querySelector('#randomed');
    randomText.value = number;
}

randomButton = document.getElementById("randomButt");

function surpriseMe()
{
    document.querySelector("#surpriseImg").setAttribute("src", "https://s-media-cache-ak0.pinimg.com/originals/20/1b/3a/201b3aaeb2e77a2cfbfcb945f6ec7901.jpg");
}

randomButton.addEventListener("click", rollDice);
surpriseButton = document.getElementById("surpriseButt");
surpriseButton.addEventListener("click", surpriseMe);