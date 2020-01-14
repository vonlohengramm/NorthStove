var menu = new Phaser.Scene('menu'); // 第二页，选画面
menu.preload = function () {
    this.load.image('back-1', 'png/Scene-1.jpg');
}
menu.preload = function () {
    this.add.image(SCENE_WIDTH / 2 * GENERAL_SCALE, SCENE_HEIGHT / 2 * GENERAL_SCALE, 'back-1').setScale(GENERAL_SCALE)
}