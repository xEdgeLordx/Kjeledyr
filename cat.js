let app = document.getElementById('app');
        let hunger = 0;

        function Start() {
            HungerIncrease()
            let needs = document.getElementById('needs');
            
            
            
            app.innerHTML = /*html*/`
            <div class = "spill">
                <div class = "buttbox">
            <button class = "gamebutton" onclick="feed()">Feed</button></div>
            <button class = "gamebutton" onclick="pet()">Pet</button></div>
            <div class = "talk">Hunger :<div class = "talk" id = "hunger">1</div></div>
            </div>
            <div><img class = "cat" src = "Maxwell.png"></div>
            <div class = "chatbox">
            <div class = "randomtalk">Maxwell says:<div id = "needs"></div>
            <div class = "RandomTalk" id = "RandomTalk" ></div></div><br>
            </div>
            `
            
        }
        function HungerIncrease() {
            hunger = setInterval(HungerIncreaseTimer, 2000);
        }
        function HungerIncreaseTimer() {
            hunger++;
            document.getElementById('hunger').innerHTML = hunger;
            
            AskForFoodAndLeave()
            talk()
            

        }
        function AskForFoodAndLeave() {
            if (hunger > 100) {
                GameOver()
            } else if (hunger > 75) {
                needs.innerHTML = "    Im starving. I need food NOW!"
            } else if (hunger > 50) {
                needs.innerHTML = "    Im hungry"
            } else if (hunger < 2) {
                needs.innerHTML = ""
            }

        }
        function feed() {
            hunger = 0;
            needs.innerHTML = "Nom nom nom";
            let feedSound = new Audio();
            feedSound.src = "roblox-eating-sound-effect-nom-nom-nom.mp3"
            feedSound.play();
        }
        function pet(){
            needs.innerHTML = "Prr Prr Prrrrrr..."
            setTimeout(clearneeds, 1000)
            let petSound = new Audio();
            petSound.src = "purr.mp3"
            petSound.play()
            setTimeout(stopsound, 1000)

        }
        function stopsound(){
            petSound.pause();
            petSound.currenTime = 0;
        }
        function feedAudio(){
            new Audio(roblox-eating-sound-effect-nom-nom-nom.mp3).play();
        }
        function clearneeds(){
            needs.innerHTML = "";
        }
        function GameOver() {
            app.innerHTML = /*html*/`
            <div class = "gameover">
            <div><img src = "https://www.picng.com/upload/game_over/png_game_over_53087.png"></div>
            <div class = "gameovertext">
            <div class = "talk" id = "gameovertext"></div></div>
            <button onclick = "restart()">Retry</button>
            `
            if(hunger > 100){
                document.getElementById('gameovertext').innerHTML = "You forgot to feed Maxwell. He died of starvation."
            }
        }
        function talk() {
            let RandomTalk = document.getElementById('RandomTalk');
            let randomNum = Math.floor(Math.random() * 20);
            if (randomNum == 1 && hunger < 50) {
                RandomTalk.innerHTML = "Meow";
            } else if (randomNum == 2 && hunger < 50) {
                RandomTalk.innerHTML = "OwO";
            } else if (randomNum == 3 && hunger < 50) {
                RandomTalk.innerHTML = "mew";

            } else if (randomNum == 4 && hunger < 50) {
                RandomTalk.innerHTML = "Im a fucking cat hehe, Eyy im walkin ere";
            } else if (randomNum == 5 && hunger < 50) {
                RandomTalk.innerHTML = "Meeoww";
            }

            else if (randomNum == 6 && hunger < 50) {
                RandomTalk.innerHTML = "Prrrrrr...";
            } else{
                RandomTalk.innerHTML = "";
            }
        }
        function restart(){
            location.reload();
        }