function canBuyAiPt () {
    return new Decimal("1e100").pow((player.ai.boughPoints/100)+1).lte(player.eternityPoints) && Math.pow(5, (player.ai.boughPoints/100)) <= player.timestudy.theorem;
}
function buyAiPt () {
    while (canBuyAiPt()) {
        player.eternityPoints = player.eternityPoints.sub(new Decimal("1e100").pow((player.ai.boughPoints/100)+1));
        player.timestudy.theorem += -Math.pow(5, (player.ai.boughPoints/100));
        player.ai.boughPoints += 100;
        player.ai.aiPoints += 100;
        if (shiftDown) return;
    }
}
