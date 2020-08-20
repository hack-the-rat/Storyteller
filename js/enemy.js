let enemy;

function Enemy(enemyType, health, special, attack, defense, speed) {
    this.classType = enemyType;
    this.health = health;
    this.special = special;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
}