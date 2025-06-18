// if the localstoraqge values is null we use the or operator if the lesft side is false then consider the consider the next default value that is 0 for all 
    let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0,
  ties: 0
};
   updateScoreElement(); 
  let isAutoPlaying = false;
  let intervalId ;
//const autoPlay = () =>
//{
//};

     function autoPlay()
     {
     if(!isAutoPlaying)
      { 
        intervalId = setInterval(() =>
    {
      const playerMove = pickComputerMove();
    playGame(playerMove);
    }, 1000);
  isAutoPlaying = true;
      }
      else{
         clearInterval(intervalId);
         isAutoPlaying = false;
      }
     }

   document.querySelector('.js-rock-btn')
   .addEventListener('click', () => 
  {
    playGame('rock');
  });

  document.querySelector('.js-paper-btn')
   .addEventListener('click', () => 
  {
    playGame('paper');
  });

  document.querySelector('.js-scissors-btn')
   .addEventListener('click', () => 
  {
    playGame('scissors');
  });

  document.body.addEventListener('keydown', (event) =>
  {
    if(event.key === 'r')
    {
      playGame('rock');
    }
    else if(event.key === 'p')
    {
  playGame('paper');
    }
    else if(event.key === 's')
    {
      playGame('scissors');
    }
  });

    function playGame(playerMove)
    {

  const computerMove = pickComputerMove();
        let result = '';

        if(playerMove === 'scissors')
        {
        if(computerMove === 'rock')
        {
          result = 'You lose';
        } 
        else if(computerMove === 'paper')
        {
        result = 'You win';
        }
        else if(computerMove === 'scissors')
        {
          result = 'Tie';
        }
      }
      else if(playerMove === 'paper')
      {
        if(computerMove === 'rock')
              {
                result = 'You win';
              } 
              else if(computerMove === 'paper')
              {
              result = 'Tie';
              }
              else if(computerMove === 'scissors')
              {
                result = 'You lose';
              }
      }
                else if(playerMove === 'rock')
                {
                  if(computerMove === 'rock')
          {
            result = 'Tie';
          } 
          else if(computerMove === 'paper')
          {
          result = 'You lose';
          }
          else if(computerMove === 'scissors')
          {
            result = 'You win';
          }
      }
     if(result === 'You win')
     {
      score.wins += 1;
     }
     else if(result === 'You lose')
     {
      score.loses += 1;
     }
     else if(result === 'Tie')
     {
      score.ties += 1;
     }
  
       localStorage.setItem('score',JSON.stringify(score));
   
   updateScoreElement();

     document.querySelector('.js-result').innerHTML = 
     result;
     document.querySelector('.js-moves').innerHTML = 
   ` You <img src="${playerMove}-emoji.png" class="move-icon">
          <img src="${computerMove}-emoji.png" class="move-icon" >Computer`;
    }
    function updateScoreElement()
    {
      document.querySelector('.js-score').innerHTML = 
   ` Wins: ${score.wins}, Loses: ${score.loses}, ties: ${score.ties} `; 
    }
    
       function pickComputerMove() 
       {
                    const randomNumber = Math.random();
               let computerMove = '';
            if(randomNumber >= 0 && randomNumber < 1/3)
            {
              computerMove = 'rock';
            }
            else if(randomNumber >= 1/3 && randomNumber < 2/3)
            {
              computerMove =  'paper';
            }
            else if(randomNumber >= 2/3 && randomNumber < 1)
            {
            computerMove = 'scissors';
            }
            return computerMove;

       }