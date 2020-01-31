module.exports = class Game{
    makeAMove(sInput){
        let aReturn = [];
        if(!this.nComputer){
            aReturn.push("This is the game over and unders ...");
            aReturn.push("What number am I thinking between 1 and 100?"); 
            this.nComputer = Math.ceil(Math.random() * 100);   
        }else if(sInput < this.nComputer){
            aReturn.push("too low");
        }else if(sInput > this.nComputer){
            aReturn.push("too high");
        }else if(sInput == this.nComputer){
            aReturn.push("just right");
        }else{
            aReturn.push("Please enter a number between 1 and 100");
        }
        return aReturn;        
    }
}