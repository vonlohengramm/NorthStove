var menu = new Phaser.Scene('menu'); // 第二页，选画面
menu.preload = function () {
    this.load.image('menu-back', 'png/menu-back.jpg');
    this.load.image('menu-title', 'png/menu-title.png');
}
menu.create = function () {
    this.add.image(SCENE_WIDTH / 2 * GENERAL_SCALE, SCENE_HEIGHT / 2 * GENERAL_SCALE, 'menu-back').setScale(GENERAL_SCALE);
    var prompt = this.add.image(3445 * GENERAL_SCALE, 3087 * GENERAL_SCALE, 'prompt-back').setScale(GENERAL_SCALE);
    var title = this.add.image(3445 * GENERAL_SCALE, 3097 * GENERAL_SCALE, 'menu-title').setScale(GENERAL_SCALE);

    var startAlpha = 1;
    this.tweens.add({
        targets: title,
        duration: 1000,
        alpha: {
            getStart: () => startAlpha,
            getEnd: () => 1 - startAlpha,
        },
        loop: -1,
        onLoop: function () {
            startAlpha = 1 - startAlpha;
        }
    })
}