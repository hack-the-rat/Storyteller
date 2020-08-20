let player;

function Player(classType, health, special, attack, defense, speed) {
    this.classType = classType;
    this.health = health;
    this.special = special;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
        // Who attacks first?
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
        // Player attacks!
        let playerAttack = function() {
        let calcBaseDamage;
        if (player.attack > 0) {
            calcBaseDamage = player.attack * player.defense / 1000;
        } else {
            calcBaseDamage = player.attack * player.speed / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        // Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
        }
        // Enemy attacks!
        let enemyAttack = function() {
            let calcBaseDamage;
            if (enemy.attack > 0) {
                calcBaseDamage = enemy.attack * enemy.defense / 1000;
            } else {
                calcBaseDamage = enemy.attack * enemy.speed / 1000;
            }
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.speed / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // Get player/enemy health to change later!
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        // Initiate attacks!
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " points of damage " + playerAttackValues[1] + " times!");
            if (enemy.health <= 0) {
                alert("Victory!  Refresh your browser to battle again.");
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " points of damage " + enemyAttackValues[1] + " times!");
                if (player.health <= 0) {
                    alert("Defeat!  Refresh your browser to battle again.");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        } else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues[0] + " points of damage " + enemyAttackValues[1] + " times!");
            if (player.health <= 0) {
                alert("Defeat!  Refresh your browser to battle again.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + playerAttackValues[0] + " points of damage " + playerAttackValues[1] + " times!");
                if (enemy.health <= 0) {
                    alert("Victory!  Refresh your browser to battle again.");
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }
    }
}