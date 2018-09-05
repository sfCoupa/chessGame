if (!jQuery) { throw new Error("ChessGame Requires jQuery") };

var ChessGame = (function ($, chessgame, undefined) {

    var chessgame = chessgame || {},
        _this = this,
        $chessBoard = $('.chessBoard');

    this.playerOne = {};
    this.playerTwo = {};
    this.selectedPiece = {};

    var _getPlayerOneCopy = function () {
        return $.extend({}, _this.playerOne);
    };

    var _getPlayerTwoCopy = function () {
        return $.extend({}, _this.playerTwo);
    };

    var _setPlayerOne = function (copyOfPlayer) {
        _this.playerOne = copyOfPlayer;
    };

    var _setPlayerTwo = function (copyOfPlayer) {
        _this.playerTwo = copyOfPlayer;
    };

    var _updatePlayerObject = function (copyOfPlayer) {

        var currentPlayer = getPlayerByPieceTurn();

        currentPlayer.pieces.color === 'white' ? _this.playerOne = copyOfPlayer : _this.playerTwo = copyOfPlayer;
    };

    var _toggleIsTurn = function (obj) {

        var player = $.isEmptyObject(obj) ? _this.playerOne : obj;

        for (piece in player.pieces) {
            player.pieces[piece].isTurn === false ? player.pieces[piece].isTurn = true : player.pieces[piece].isTurn = false;
        }

        if ($.isEmptyObject(obj)) {
            _toggleIsTurn(_this.playerTwo);
        }

    };

    var _checkForAttack = function (newTile, pieceDetails, key) {

        if ($.isEmptyObject(newTile.data("tileDetails"))) return;

        if (newTile.data("tileDetails").color !== pieceDetails.color) {
            pieceDetails.color === 'white' ?
            _destroyPiece(newTile.data("tileDetails").location, _this.playerTwo) :
            _destroyPiece(newTile.data("tileDetails").location, _this.playerOne);
        }
    };

    var _destroyPiece = function (location, player) {

        for (piece in player.pieces) {

            if (player.pieces[piece].location === location) {
                delete player.pieces[piece];
            }
        }
    };

    //deselect the property on a piece called isSelected
    var _resetSelectedProperty = function () {
        _this.selectedPiece.isSelected = false;
    };

    var _findPlayerByPieceLocation = function (piece) {
        return piece in _this.playerOne.pieces ? _this.playerOne : _this.playerTwo;
    };

    var _createPlayers = function () {
        _this.playerOne = ChessGame.createPlayer(true).player;
        _this.playerTwo = ChessGame.createPlayer(false).player;
    };

    var _setPieces = function () {
        _drawPieces(_this.playerOne);
        _drawPieces(_this.playerTwo);
    };

    var _drawPieces = function (player) {
        $.each(player.pieces, function (key, obj) {
            $chessBoard.find('#' + obj.location).data("tileDetails", obj);
            if (obj.isTurn) {
                $chessBoard.find('#' + obj.location).html('<span class="isTurn">' + obj.htmlSymbol + '</span>');
            }
            else {
                $chessBoard.find('#' + obj.location).html('<span class="isNotTurn">' + obj.htmlSymbol + '</span>');
            }
            if (obj.isSelected) $chessBoard.find('#' + obj.location).addClass('isSelected');
        });
    };

    //will toggle existing object and empty object
    var updateSelectedPiece = function (piece) {

        if (!$.isEmptyObject(_this.selectedPiece) && piece !== undefined) {
            return _this.selectedPiece.color === piece.color ? _this.selectedPiece = piece : _this.selectedPiece = {};
        }

        return $.isEmptyObject(_this.selectedPiece) ? _this.selectedPiece = piece : _this.selectedPiece = {};
    };

    //returns boolean:: is a piece selected
    var isPieceSelected = function () {
        return !$.isEmptyObject(_this.selectedPiece);
    }

    var getPlayerByPieceTurn = function () {

        var playerOne = _getPlayerOneCopy();
        var playerTwo = _getPlayerTwoCopy();

        var result = playerTwo;

        for (var piece in playerOne.pieces) {
            if (playerOne.pieces[piece].isTurn === true) {
                result = playerOne;
                break;
            }
        }

        return result;
    }

    //move a this.selectedPiece from one square to another and update tile data()
    var movePiece = function (newTile) {

        var currentPlayer = getPlayerByPieceTurn();

        if (!$.isEmptyObject(newTile.data("tileDetails"))) {
            if (_this.selectedPiece.color === newTile.data("tileDetails").color) {
                selectPiece(newTile.data("tileDetails"));
                return;
            }
        }

        updateIsFirstMove(selectedPiece);
        updatePieceLocation(newTile, currentPlayer);
        newTile.data("tileDetails", _this.selectedPiece);
        updateSelectedPiece();
        _toggleIsTurn();
        _setPieces();
    };

    var updateIsFirstMove = function (selectedPiece) {
        if (selectedPiece.isFirstMove) _this.selectedPiece.isFirstMove = false;
    }

    var updatePieceLocation = function (newTile, currentPlayer) {

        $.each(currentPlayer.pieces, function (key, value) {
            if (currentPlayer.pieces[key].isSelected) {

                _resetSelectedProperty();
                $chessBoard.find('#' + _this.selectedPiece.location).removeData().text('');

                currentPlayer.pieces[key].color === 'white' ? _this.playerOne.pieces[key].location = newTile.attr('id') : _this.playerTwo.pieces[key].location = newTile.attr('id');
                _checkForAttack(newTile, currentPlayer.pieces[key], key);
            }
        });

    }       

    //select a piece
    var selectPiece = function (piece) {

        //if its not your turn you don't go
        if (!piece.isTurn) { return; }


        //deselect all pieces by same color
        //set the selected piece
        findPieceAndUpdate(piece);

        _setPieces();
    };

    var getKeyByLocation = function (tileData) {

        if ($.isEmptyObject(tileData)) return;

        var player = ChessGame.getPlayerByPieceTurn();

        for (piece in player.pieces) {
            if (player.pieces[piece].location === tileData.location) {
                return piece;
            }
        }
    };

    var findPieceAndUpdate = function (piece) {
        
        var currentPlayer = getPlayerByPieceTurn();

        $.each(currentPlayer.pieces, function (key, value) {

            currentPlayer.pieces[key].color === 'white' ? _this.playerOne.pieces[key].isSelected = false : _this.playerTwo.pieces[key].isSelected = false;

            if (currentPlayer.pieces[key].location === piece.location) {
                currentPlayer.pieces[key].color === 'white' ? _this.playerOne.pieces[key].isSelected = true : _this.playerTwo.pieces[key].isSelected = true;
                ChessGame.ee.emitEvent('toggleSelectedPiece', [piece]);
            }
        });
    }

    var newGame = function () {
        $chessBoard.find('div').removeData().text('');
        _createPlayers();
        _setPieces();
    };

    return {
        isPieceSelected: isPieceSelected,
        movePiece: movePiece,
        selectPiece: selectPiece,
        startNewGame: newGame,
        updateSelectedPiece: updateSelectedPiece,
        getPlayerByPieceTurn: getPlayerByPieceTurn,
        getKeyByLocation: getKeyByLocation
    };

}(jQuery, ChessGame || {}));