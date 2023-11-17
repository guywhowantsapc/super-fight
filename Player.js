class Player{
    constructor(){
    this.name=""; 
    this.index=0;
    this.positionX=0;
    this.positionY=0;
    }

    addPlayer(){
        var playerIndex = "players/player" + this.index;

        if(this.index===1){
        this.positionX = width/2-100    
        }else{
        this.positionX= width/2+100
        }

        database.ref(playerIndex).set({
            name:this.name,
            positionX:this.positionX,
            positionY:this.positionY
        })
    }

    getPlayerCount(){
        var dbRef= database.ref("/")
        dbRef.on("value",(data)=>{
            playerCount = data.val().playerCount   
        })
    }
    updateCount(count){
        var dbRef= database.ref("/")
        dbRef.set({playerCount:count})  
    }

}