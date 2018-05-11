describe("BowlingGame", function() {
	var game;

	beforeEach(function(){
		game = new BowlingGame();
	});

	function rollMany (rolls, pins) {
		for (var i = 0; i < rolls; i++) {
			game.roll(pins);
		}
    }
    
    function rollSpare() {
        game.roll(5);
        game.roll(5);
	}
	
	function rollStrike() {
        game.roll(10);
    }

	it("Can score a gutter game", function() { 
        rollMany(20, 0);
        expect(game.scoreGame()).to.equal(0);
    });


	it("should handle all ones", function() {
		rollMany(20, 1);
		expect(game.scoreGame()).to.equal(20);
    });
    
    it("should handle one spare", function() {
		rollSpare();
		game.roll(3);
		rollMany(17, 0);
		expect(game.scoreGame()).to.equal(16);
	});

	it("should handle one strike", function() {
		rollStrike();
		game.roll(3);
		game.roll(4);
		rollMany(16, 0);
		expect(game.scoreGame()).to.equal(24);
	});

	it("should handle a perfect game", function() {
		rollMany(12, 10);
		expect(game.scoreGame()).to.equal(300);
	});
});