function bishopAndPawn(bishop, pawn) {
    var board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    };
    var bishopX = board[bishop[0]];
    var bishopY = parseInt(bishop[1]);
    var pawnX = board[pawn[0]];
    var pawnY = parseInt(pawn[1]);
    if (bishopX + bishopY === pawnX + pawnY || bishopX + pawnY === pawnX + bishopY) {
        return true;
    }
    return false;
}
console.log(bishopAndPawn('a1', 'c3'));
