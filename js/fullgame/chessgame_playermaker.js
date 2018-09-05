//Factory for creating player and pieces.
//Extend the main module. Keep player and piece creation separate from main module
//sole purpose is to create a player object and the player's pieces.
var ChessGame = (function (chessgame, undefined) {

    function CreatePlayer(isFirstPlayer) {
        this.player = {
            pieces: {
                king: {
                    location: isFirstPlayer === true ? '47' : '40',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9812;' : '&#9818;',
                    isFirstMove: true
                },
                queen: {
                    location: isFirstPlayer === true ? '37' : '30',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9813;' : '&#9819;',
                    isFirstMove: true
                },
                leftrook: {
                    location: isFirstPlayer === true ? '07' : '00',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9814;' : '&#9814;',
                    isFirstMove: true
                },
                rightrook: {
                    location: isFirstPlayer === true ? '77' : '70',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9814;' : '&#9814;',
                    isFirstMove: true
                },
                leftbishop: {
                    location: isFirstPlayer === true ? '27' : '20',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9815;' : '&#9821;',
                    isFirstMove: true
                },
                rightbishop: {
                    location: isFirstPlayer === true ? '57' : '50',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9815;' : '&#9821;',
                    isFirstMove: true
                },
                leftknight: {
                    location: isFirstPlayer === true ? '17' : '10',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9816;' : '&#9822;',
                    isFirstMove: true
                },
                rightknight: {
                    location: isFirstPlayer === true ? '67' : '60',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9816;' : '&#9822;',
                    isFirstMove: true
                },
                pawn0: {
                    location: isFirstPlayer === true ? '06' : '01',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                },
                pawn1: {
                    location: isFirstPlayer === true ? '16' : '11',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                },
                pawn2: {
                    location: isFirstPlayer === true ? '26' : '21',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                },
                pawn3: {
                    location: isFirstPlayer === true ? '36' : '31',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                },
                pawn4: {
                    location: isFirstPlayer === true ? '46' : '41',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                },
                pawn5: {
                    location: isFirstPlayer === true ? '56' : '51',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                },
                pawn6: {
                    location: isFirstPlayer === true ? '66' : '61',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                },
                pawn7: {
                    location: isFirstPlayer === true ? '76' : '71',
                    isAlive: true,
                    isSelected: false,
                    color: isFirstPlayer === true ? 'white' : 'black',
                    isTurn: isFirstPlayer === true ? true : false,
                    htmlSymbol: isFirstPlayer === true ? '&#9817;' : '&#9823;',
                    isFirstMove: true
                }
            }
        };
    }


    chessgame.createPlayer = function (isFirst) {
        return new CreatePlayer(isFirst);
    };

    return chessgame;

})(ChessGame || {});
