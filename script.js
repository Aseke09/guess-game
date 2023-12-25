//Функция проверки на число 
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== 0
 }

const startGame = function(){
    const guessNum = 10;
    let attempts = 10;

    const game = function(){

        if(attempts === 0) {
            if(confirm("Попытки закончились, хотите сыграть еще?")){
                startGame();
            }else {
                alert("Игра окончена")
                return;
            }
             
             
        } else {
             
            let number = prompt("Угадай число от 1 до 100")
            
            if(number === null){
                
                alert("Игра окончена")
                return;
               
            }  
           
                if(isNumber(number)){
                    console.log(number, typeof number)
                    number = +number;
                    console.log(number, typeof number)
                    attempts--
                    if(number > guessNum){
                        alert("Загаданное число меньше, осталось попыток:" + attempts)
                        game()
                    }
                    if(number < guessNum){
                        alert("Загаданное число больше, осталось попыток:" + attempts)
                        game()
                    } else {
                        if(confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")){
                            
                            startGame()
                        } else {
                            alert("Игра окончена")
                            return
                        }
    
                    }
                } else {
                    alert("Введи число!");
                    game()
                }
        }

        }
        game()
}

startGame()