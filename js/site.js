;(function ($, undefined) {

    var chessBoard = $('.chessBoard');
    var chessBoardPiece = $('.chessBoard > div');

    $(chessBoardPiece).on('click', function () {

        console.log("test");
        var $this = $(this),
            $tileData = $this.data("tileDetails");

        ChessGame.ee.emitEvent('playerMove', [$this, $tileData]);
    });

    $('.reset').on('click', function () {
        ChessGame.startNewGame();
    });

})(jQuery);
