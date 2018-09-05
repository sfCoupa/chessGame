ChessGame.pawn = (function (chessgame, undefined) {

    var _this = this;
    var validLocations = [];

    chessgame.movePawn = function (newTile) {
        validMoves(newTile);
    }

    function validMoves(newTile) {

        var targetTileCoords = newTile.attr('id');

        var toX = parseInt(targetTileCoords.slice(0, 1));
        var toY = parseInt(targetTileCoords.slice(1, 2));

        var fromX = parseInt(_this.selectedPiece.location.slice(0, 1));
        var fromY = parseInt(_this.selectedPiece.location.slice(1, 2));

        if (_this.selectedPiece.color === 'white') {

            //only for first move
            if (_this.selectedPiece.isFirstMove) {
                if ((fromY - 1 === toY && fromX === toX) || (fromY - 2 === toY && fromX === toX)) {
                    ChessGame.movePiece(newTile); return;
                }
            }

            //for attack and blocking piece
            if (!$.isEmptyObject(newTile.data("tileDetails"))) {
                if (fromX - 1 === toX && fromY - 1 === toY) {
                    ChessGame.movePiece(newTile); return;
                }
                if (fromX + 1 === toX && fromY - 1 === toY) {
                    ChessGame.movePiece(newTile); return;
                }

                //if you are moving forwardto and space is taken, dont move
                if (fromY - 1 === toY && fromX === toX && !$.isEmptyObject(newTile.data("tileDetails"))) {
                    ChessGame.selectPiece(_this.selectedPiece); return;
                }
            }

            //just moving forward one piece to empty space
            if (fromY - 1 === toY && fromX === toX && $.isEmptyObject(newTile.data("tileDetails"))) {
                ChessGame.movePiece(newTile); return;
            }

        }

        if (_this.selectedPiece.color === 'black') {

            //only for first move
            if (_this.selectedPiece.isFirstMove) {
                if ((fromY + 1 === toY && fromX === toX) || (fromY + 2 === toY && fromX === toX)) {
                    ChessGame.movePiece(newTile); return;
                }
            }

            //for attack and blocking piece
            if (!$.isEmptyObject(newTile.data("tileDetails"))) {
                if (fromX - 1 === toX && fromY + 1 === toY) {
                    ChessGame.movePiece(newTile); return;
                }
                if (fromX + 1 === toX && fromY + 1 === toY) {
                    ChessGame.movePiece(newTile); return;
                }

                //if you are moving forwardto and space is taken, dont move
                if (fromY - 1 === toY && fromX === toX && !$.isEmptyObject(newTile.data("tileDetails"))) {
                    ChessGame.selectPiece(_this.selectedPiece); return;
                }
            }

            if (fromY + 1 === toY && fromX === toX && $.isEmptyObject(newTile.data("tileDetails"))) {
                ChessGame.movePiece(newTile); return;
            }
        }


        if (!$.isEmptyObject(newTile.data("tileDetails"))) {
            if (_this.selectedPiece.color === newTile.data("tileDetails").color) {
                ChessGame.selectPiece(newTile.data("tileDetails"));
                return;
            }
        }

        ChessGame.selectPiece(_this.selectedPiece);
    };

    return chessgame;

})(ChessGame || {});