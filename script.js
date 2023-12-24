const startGame = function(){
    const guessNum = 10

    const game = function(){
        const number = +prompt("Угадай число от 1 до 100")
    if(number === 0){
        alert("Игра окончена")
        return;
    }   
        if(typeof number === 'number'){
            if(number > guessNum){
                alert("Загаданное число меньше")
                game()
            }
            if(number < guessNum){
                alert("Загаданное число  больше")
                game()
            }
            if(number === guessNum){
                confirm("Поздравляю, Вы угадали!!!")
                return
            }

        } else {
            alert("Введи число!");
            game()
        }
        

    }
    game()
}

startGame()

