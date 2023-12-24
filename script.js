const startGame = function(){
    const guessNum = 10;
    let attempts = 10;

    const game = function(){
        attempts--

        if(attempts < 0) {
            if(confirm("Попытки закончились, хотите сыграть еще?")){
                startGame();
            }else {
                alert("Игра окончена")
                return;
            }
             
             
        } else {
             
            const number = +prompt("Угадай число от 1 до 100")
            if(number === null){
                alert("Игра окончена")
                return;
            }   
                if(typeof number === 'number' && number !== 0){
                    if(number > guessNum){
                        alert("Загаданное число меньше, осталось попыток:" + attempts)
                        game()
                    }
                    if(number < guessNum){
                        alert("Загаданное число больше, осталось попыток:" + attempts)
                        game()
                    }
                    if(number === guessNum){
                        confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?")
                        startGame()
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