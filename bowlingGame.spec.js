describe("BowlingGame", function() {
	var game;

	beforeEach(function(){
		game = new BowlingGame();
	});

	function rollMany (rolls, pins) {
		for (var i = 0; i < rolls; i++) {
			game.roll(pins)
		}
	}

	it("Can score a gutter game", () => { 
        rollMany(20, 0);
        expect(game.scoreGame()).to.equal(0);
    });


	it("should handle all ones", function() {
		rollMany(20, 1);
		expect(game.scoreGame()).to.equal(20);
	});
});