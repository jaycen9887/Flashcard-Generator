var ClozeCard = function(text, cloze){
    if(this instanceof ClozeCard){
        this.text = text;
        this.cloze = cloze;
        this.fullText = this.text;
        this.partial = this.text.replace(cloze, "...");
        this.checkCloze = function(){
            if(this.text.indexOf(this.cloze) === -1){
                console.log("Error: This is not a cloze card!");
            }
        }
        this.checkCloze();
    }else {
        return new ClozeCard(text, cloze);
    }
}

module.exports = ClozeCard;