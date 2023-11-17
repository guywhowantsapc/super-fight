class Game{
    constructor(){}
    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
            console.log("db function executed")
         
          gameState = data.val();
        });
      }
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }

      start() {
       playerObject = new Player()
       playerObject.getPlayerCount()
        formObject = new Form();
        formObject.display();
      }
}