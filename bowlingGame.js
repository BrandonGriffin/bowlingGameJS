var BowlingGame = function() {
    this.rolls = [];
    this.currentRoll = 0;
 };

BowlingGame.prototype.roll = function(pins) { 
    this.rolls[this.currentRoll++] = pins;
};

BowlingGame.prototype.scoreGame = function() {
    var score = 0;

    for (var i = 0; i < 20; i ++) {
        score += this.rolls[i];
    }

    return score;
};