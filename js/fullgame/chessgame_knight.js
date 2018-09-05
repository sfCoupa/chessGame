ChessGame.knight = (function (chessgame, undefined) {

    var _this = this;
    var validLocations = [];

    chessgame.moveKnight = function (newTile) {
        validMoves(newTile);
    }

    function validMoves(newTile) {

        var targetTileCoords = newTile.attr('id');

        var toX = parseInt(targetTileCoords.slice(0, 1));
        var toY = parseInt(targetTileCoords.slice(1, 2));

        var fromX = parseInt(_this.selectedPiece.location.slice(0, 1));
        var fromY = parseInt(_this.selectedPiece.location.slice(1, 2));

        if (fromX + 2 === toX && fromY + 1 === toY) {
            ChessGame.movePiece(newTile);
            return;
        }
        if (fromX + 2 === toX && fromY - 1 === toY) {
            ChessGame.movePiece(newTile);
            return;
        }
        if (fromX + 1 === toX && fromY + 2 === toY) {
            ChessGame.movePiece(newTile);
            return;
        }
        if (fromX + 1 === toX && fromY - 2 === toY) {
            ChessGame.movePiece(newTile);
            return;
        }
        if (fromX - 1 === toX && fromY - 2 === toY) {
            ChessGame.movePiece(newTile);
            return;
        }
        if (fromX - 1 === toX && fromY + 2 === toY) {
            ChessGame.movePiece(newTile);
            return;
        }
        if (fromX - 2 === toX && fromY - 1 === toY) {
            ChessGame.movePiece(newTile);
            return;
        }
        if (fromX - 2 === toX && fromY + 1 === toY) {
            ChessGame.movePiece(newTile);
            return;
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