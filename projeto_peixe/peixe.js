var config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
        preload: preload, 
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
var peixinho;

function preload() {
    this.load.image('agua', 'assets/bg_azul-escuro.png');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');
    this.load.image('tubarao', 'assets/peixes/tubarao.png');
    this.load.image('crustaceo', 'assets/peixes/crustaceo.png');
}

function create() {
    let width = this.scale.width;
    let height = this.scale.height;

    this.add.image(width / 2, height / 2, 'agua').setDisplaySize(width, height);
    this.add.image(width / 2, height * 0.85, 'logo').setScale(0.5 * (width / 800));
    
    peixinho = this.add.image(width * 0.5, height * 0.5, 'peixe').setScale(width / 1600);
    this.add.image(width * 0.85, height * 0.5, 'peixe').setOrigin(0.5, 0.5).setFlip(true, false).setScale(width / 1600);
    this.add.image(width * 0.4, height * 0.7, 'tubarao').setScale(0.8 * (width / 800));
    this.add.image(width * 0.5, height * 0.5, 'crustaceo').setScale(0.9 * (width / 800));
    
    peixinho.setFlip(true, false);
}

function update() {
    peixinho.x = this.input.x * (this.scale.width / window.innerWidth);
    peixinho.y = this.input.y * (this.scale.height / window.innerHeight);
}

window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});
