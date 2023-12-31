class Form {
  constructor() {
  this.input = createInput("").attribute("placeholder","Enter your name")
  this.playButton = createButton("Play")
  this.greeting = createElement("h2")
  }

  setElementsPosition(){
  this.input.position(width / 2 - 110, height / 2 - 80);
  this.playButton.position(width / 2 - 90, height / 2 - 20);
  this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }

    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }

    handleMousePressed() {
      console.log("Handlemouse ppressed")
      this.playButton.mousePressed(() => {
   
        
        this.input.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br>wait for another player to join...`;
        this.greeting.html(message);
        playerCount += 1;
        playerObject.name = this.input.value();
        playerObject.index = playerCount;
        playerObject.addPlayer();
        playerObject.updateCount(playerCount);
        // player.getDistance();
      });
    }
  




  display(){
      // console.log("Hi")
      this.setElementsPosition()
      this.setElementsStyle()
      this.handleMousePressed()
    }



}