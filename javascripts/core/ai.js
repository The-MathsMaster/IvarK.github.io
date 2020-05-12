function canBuyAiPt () {
    return new Decimal("1e100").pow((player.ai.boughPoints/100)+1).gte(player.eternityPoints) && Math.pow(10, (player.ai.boughPoints/100)) >= player.timestudy.theorem;
}
function buyAiPt () {
    if (canBuyAiPt()) {
        player.eternityPoints = player.eternityPoints.sub(new Decimal("1e100").pow((player.ai.boughPoints/100)+1));
        player.timestudy.theorom += -Math.pow(10, (player.ai.boughPoints/100));
        player.ai.boughPoints += 100;
        player.ai.aiPoints += 100;
    }
}
