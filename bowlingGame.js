var BowlingGame = function() {
    this.rolls = [];
    this.currentRoll = 0;
    this.score = 0;
};

BowlingGame.prototype.roll = function(pins) { 
    this.rolls[this.currentRoll++] = pins;
};


BowlingGame.prototype.scoreGame = function() {
    var frameIndex = 0;
    var self = this;    

    for (var frame = 0; frame < 10; frame++) {
        if (self.rolls[frameIndex] == 10) {
            self.score += 10 + self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2];
            frameIndex += 1;
        }
        else if (self.rolls[frameIndex] + self.rolls[frameIndex + 1] == 10) {
            self.score += 10 + self.rolls[frameIndex + 2];
            frameIndex += 2;
        }
        else {   
            self.score += self.rolls[frameIndex] + self.rolls[frameIndex + 1];
            frameIndex += 2;
        }         
    }
    
    return this.score;
};