ChessGame.utilities = (function (chessgame, undefined) {

    var _this = this;

    //utility to write the selected piece object to the console
    chessgame.showIsPieceSelected = function () {
        return console.log('Is piece set:', !$.isEmptyObject(_this.selectedPiece))
    }

    //utility to write the player one object to the console
    chessgame.showPlayerOne = function () {
        return console.log("Player one:", _this.playerOne);
    };

    //utility to write the player one object to the console
    chessgame.showPlayerTwo = function () {
        return console.log("Player two:", _this.playerTwo);
    };

    chessgame.showSelectedPiece = function () {
        return console.log("Selected piece:", _this.selectedPiece);;
    };

    return chessgame;

})(ChessGame || {});