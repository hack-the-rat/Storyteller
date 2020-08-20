let GameMaster = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Captain Falcon":
                player = new Player(classType, 100, 75, 175, 75, 200);
                break;
            case "Donkey Kong":
                player = new Player(classType, 100, 25, 150, 100, 50);
                break;
            case "Fox":
                player = new Player(classType, 100, 75, 125, 100, 150);
                break;
            case "Jigglypuff":
                player = new Player(classType, 100, 125, 50, 100, 50);
                break;
            case "Kirby":
                player = new Player(classType, 100, 175, 50, 50, 75);
                break;
            case "Link":
                player = new Player(classType, 100, 50, 125, 125, 100);
                break;
            case "Luigi":
                player = new Player(classType, 100, 50, 75, 25, 150);
                break;
            case "Mario":
                player = new Player(classType, 100, 100, 100, 100, 100);
                break;
            case "Ness":
                player = new Player(classType, 100, 200, 150, 50, 100);
                break;
            case "Pikachu":
                player = new Player(classType, 100, 200, 100, 50, 200);
                break;
            case "Samurai":
                player = new Player(classType, 100, 50, 200, 100, 150);
                break;
            case "Samus":
                player = new Player(classType, 100, 125, 175, 150, 50);
                break;
            case "Yoshi":
                player = new Player(classType, 100, 75, 100, 50, 75);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Special: ' + player.special + '</p><p>Attack: ' + player.attack + '</p><p>Defense: ' + player.defense + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        getHeader.innerHTML = '<p>Your mission: fight this enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameMaster.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Create enemy!
        let enemy00 = new Enemy("Bowser", 100, 150, 200, 200, 50);
        let enemy01 = new Enemy("King K. Rool", 100, 50, 150, 200, 50);
        let enemy02 = new Enemy("Ganondorf", 100, 200, 200, 150, 50);
        let enemy03 = new Enemy("King Dedede", 100, 200, 100, 100, 50);
        let enemy04 = new Enemy("Larry", 100, 150, 100, 150, 10);
        let enemy05 = new Enemy("Morton", 100, 100, 100, 150, 50);
        let enemy06 = new Enemy("Wendy", 100, 200, 50, 100, 100);
        let enemy07 = new Enemy("Iggy", 100, 150, 50, 100, 100);
        let enemy08 = new Enemy("Roy", 100, 100, 200, 150, 50);
        let enemy09 = new Enemy("Lemmy", 100, 100, 150, 50, 150);
        let enemy10 = new Enemy("Ludwig", 100, 200, 50, 100, 50);
        let enemy11 = new Enemy("Andross", 100, 200, 50, 100, 50);
        let enemy12 = new Enemy("Kraid", 100, 200, 200, 100, 50);
        let enemy13 = new Enemy("Ridley", 100, 150, 200, 100, 200);
        let enemy14 = new Enemy("Mother Brain", 100, 200, 100, 200, 50);
        let enemy15 = new Enemy("Petey Piranha", 100, 100, 200, 200, 50);
        let enemy16 = new Enemy("Bowser Jr.", 100, 50, 100, 100, 150);
        let enemy17 = new Enemy("Black Shadow", 100, 50, 100, 100, 150);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(18));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;
            case 6:
                enemy = enemy06;
                break;
            case 7:
                enemy = enemy07;
                break;
            case 8:
                enemy = enemy08;
                break;
            case 9:
                enemy = enemy09;
                break
            case 10:
                enemy = enemy10;
                break;
            case 11:
                enemy = enemy11;
                break;
            case 12:
                enemy = enemy12;
                break;
            case 13:
                enemy = enemy13;
                break;
            case 14:
                enemy = enemy14;
                break;
            case 15:
                enemy = enemy15;
                break;
            case 16:
                enemy = enemy16;
                break;
            case 17:
                enemy = enemy17;
                break;
        }
        getHeader.innerHTML = '<p>Task: What move will you make?</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/avatar-enemies/' + enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '" class="img-avatar"><div><h3>' + enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Special: ' + enemy.special + '</p><p>Attack: ' + enemy.attack + '</p><p>Defense: ' + enemy.defense + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}