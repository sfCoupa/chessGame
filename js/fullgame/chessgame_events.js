var ChessGame = (function (chessgame, undefined) {

    //this is probably overkill for this project.
    //adding in case automation gets added.
    var ee = new EventEmitter();
    var chessBoardPiece = $('.chessBoard > div');
    var _this = this;

    ee.addListeners({
        toggleSelectedPiece: _toggleSelectedPiece,
        playerMove: _playerMove,
        'king': _validateKing,
        'queen': _validateQueen,
        'leftrook': _validateRook,
        'rightrook': _validateRook,
        'leftbishop': _validateBishop,
        'rightbishop': _validateBishop,
        'leftknight': _validateKnight,
        'rightknight': _validateKnight,
        'pawn0': _validatePawn,
        'pawn1': _validatePawn,
        'pawn2': _validatePawn,
        'pawn3': _validatePawn,
        'pawn4': _validatePawn,
        'pawn5': _validatePawn,
        'pawn6': _validatePawn,
        'pawn7': _validatePawn,
    });

    chessgame.ee = ee;

    function _playerMove(element, tileData) {

        chessBoardPiece.removeClass('isSelected');

        if (ChessGame.isPieceSelected()) {
            chessgame.ee.emitEvent(chessgame.utilities.getKeyByLocation(_this.selectedPiece), [element]);
            return;
        }

        //if piece is here we can assume they are selecting a piece
        if (tileData) {
            ChessGame.selectPiece(tileData);
        }
    }

    function _toggleSelectedPiece(piece) {
        ChessGame.updateSelectedPiece(piece);
    }

    function _validateKing(newTile) {
        chessgame.moveKing(newTile);
    }

    function _validateQueen(newTile) {
        chessgame.moveQueen(newTile)
    }

    function _validateRook(newTile) {
        chessgame.moveRook(newTile);
    }

    function _validateBishop(newTile) {

        chessgame.moveBishop(newTile);
    }

    function _validateKnight(newTile) {

        chessgame.moveKnight(newTile);
    }

    function _validatePawn(newTile) {

        chessgame.movePawn(newTile);
    }

    return chessgame;

})(ChessGame || {});