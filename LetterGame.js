const sAlphabet = "abcdefghijklmnopqrstuvwxyz";

module.exports = class Game{
    makeAMove(sInput){
        let aReturn = [];
        sInput = sInput.toLowerCase();
        if(!this.sComputer){
            aReturn.push("The computer will pick a letter from a-z");
            aReturn.push("You guess which one");
            let nRandom = Math.floor(Math.random() * 26);
            this.sComputer = sAlphabet[nRandom];
            aReturn.push("The letter is " + this.sComputer);
        }else if(sInput > this.sComputer){
            aReturn.push("The letter is earlier in the alphabet");
        }else if(sInput < this.sComputer){
            aReturn.push("The letter is later in the alphabet");
        }else if(sInput == this.sComputer){
            aReturn.push("You got it");
        }
        return aReturn;        
    }
}