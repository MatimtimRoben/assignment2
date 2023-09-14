var numberOfAnimelButtons = document.querySelectorAll(".anime").length;

for (var i = 0; i <numberOfAnimelButtons; i++) {
    
    document.querySelectorAll(".anime")[i].addEventListener("click", function() {
        
        var buttons = this.innerText;

        switch (buttons) {
            case "luffy":
                var luffy = new Audio ("luffy.mp3")
                luffy.play();
                break;
            case "naruto":
                var naruto = new Audio ("naruto.mp3")
                naruto.play();
                break;
            case "ichigo":
                var ichigo = new Audio ("ichigo.mp3")
                ichigo.play();
                break;
            case "goku":
                var goku = new Audio ("goku.mp3")
                goku.play();
                break;
            case "tanjiro":
                var tanjiro = new Audio ("tanjiro.mp3")
                tanjiro.play();
                break;
            case "asta":
                var asta = new Audio ("asta.mp3")
                asta.play();
                break;
            default:
                break;
        }

});
}