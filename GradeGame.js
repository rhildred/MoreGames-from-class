module.exports = class Game{
    makeAMove(sInput){
        let aReturn = [];
        if(! this.bStarted){
            this.bStarted = true;
            aReturn.push("Welcome to the marking assistant");
            aReturn.push("Please enter your grade");
        }
        else if(sInput < 50){
            aReturn.push("You failed");

        }else{
            aReturn.push("You passed");
        }
        return aReturn;        
    }
}