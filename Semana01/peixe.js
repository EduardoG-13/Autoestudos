var config = {

  type: Phaser.AUTO,
  width: 800,
  height: 600,

  scene: {
    preload: preload,
    create: create,
    update: update
  }

};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
  this.load.image('mar', 'assets/bg_azul-escuro.png');
  // caregar logo
  this.load.image('logo', 'assets/logo-inteli_branco.png');
  //carregar peixe
  this.load.image('peixe', 'assets/peixes/peixinho_laranja.png');

  this.load.image('crustaceo', 'assets/peixes/crustaceo.png');

  this.load.image('baiacu', 'assets/peixes/baiacu.png');
}

function create() {



  this.add.image(400, 300, 'mar');
  //adicona logo tela
  this.add.image(400, 525, 'logo').setScale(0.5);


  this.add.image(650, 120, 'crustaceo').setScale(0.5);

  this.add.image(150, 450, 'baiacu').setScale(0.5);

  //guarda o peixe em uma variavel
  peixinho = this.add.image(400, 300, 'peixe');

  //transforma avariavel
  peixinho.setFlip(true, false);

}

function update() {

  //transforma avariavel
  peixinho.x = this.input.x;
  peixinho.y = this.input.y;
}  