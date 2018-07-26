function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    var yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    var yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    var friendWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    var friendStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;
    return yourStrongest === friendStrongest && yourWeakest === friendWeakest;
}
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
