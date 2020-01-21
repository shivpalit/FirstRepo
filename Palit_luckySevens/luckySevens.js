/*
Name: Shiv Palit
Assignment: Lucky Sevens
Date Created: 1/19/20
Most recent revision: 1/21/20
*/

function clearErrors()
{
    for (var loopCounter = 0; loopCounter < document.forms["luckySevens"].elements.length; loopCounter++) 
    {
        if (document.forms["luckySevens"].elements[loopCounter].parentElement.className.indexOf("has-") != -1) 
        {
            document.forms["luckySevens"].elements[loopCounter].parentElement.className = "form-group";
        }
    }  
}

function rollDice()
{
    return Math.floor(Math.random() * 6) + 1;
}

function playGame()
{
    clearErrors();
    var bet = parseFloat(document.getElementById("bet").value);
    var startBet = bet;
    var highestWin = bet;
    var dice1 = 0;
    var dice2 = 0;
	var totalRolls = 0;
    var rollAtHighest = 0;
    
    if(bet == "" || bet<=0 || isNaN(bet))
    {
        alert("Starting bet must be a number greater than 0");
        document.forms["luckySevens"]["bet"].parentElement.className = "form-group has-error";
        document.forms["luckySevens"]["bet"].focus();
        return false;
    }

    while(bet > 0)
    {
        dice1 = rollDice();
        dice2 = rollDice();
        var total = dice1+dice2;

        if(total==7)
        {
            totalRolls++;
            bet = bet+4;
            if(bet>highestWin)
            {
                highestWin = bet;
                rollAtHighest = totalRolls;
            }
        }
        else
        {
            bet-=1;
        }
        
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again";
    document.getElementById("startBet").innerText = startBet;
    document.getElementById("totalRolls").innerText = totalRolls;
    document.getElementById("highestWin").innerText = highestWin;
    document.getElementById("rollAtHighest").innerText = rollAtHighest;
    return false;
}




