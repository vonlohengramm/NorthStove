var menu = new Phaser.Scene('menu'); // 第二页，选画面
menu.preload = function () {
    this.load.image('menu-back', 'png/menu-back.jpg');
    this.load.image('menu-title', 'png/menu-title.png');

    this.load.image('pic-1', 'png/menu-pic-1.png');
    this.load.image('pic-2', 'png/menu-pic-2.png');
    this.load.image('pic-3', 'png/menu-pic-3.png');
    this.load.image('pic-4', 'png/menu-pic-4.png');
    this.load.image('pic-5', 'png/menu-pic-5.png');
}
menu.create = function () {
    this.add.image(SCENE_WIDTH / 2 * GENERAL_SCALE, SCENE_HEIGHT / 2 * GENERAL_SCALE, 'menu-back').setScale(GENERAL_SCALE);
    var prompt = this.add.image(3445 * GENERAL_SCALE, 3622 * GENERAL_SCALE, 'prompt-back').setScale(GENERAL_SCALE);
    var title = this.add.image(3445 * GENERAL_SCALE, 3622 * GENERAL_SCALE, 'menu-title').setScale(GENERAL_SCALE);

    var pic1 = this.add.image(1986 * GENERAL_SCALE, 1031 * GENERAL_SCALE, 'pic-1').setScale(GENERAL_SCALE);
    var pic2 = this.add.image(4990 * GENERAL_SCALE, 1031 * GENERAL_SCALE, 'pic-2').setScale(GENERAL_SCALE);
    var pic3 = this.add.image(1986 * GENERAL_SCALE, 2602 * GENERAL_SCALE, 'pic-3').setScale(GENERAL_SCALE);
    var pic4 = this.add.image(4422 * GENERAL_SCALE, 2602 * GENERAL_SCALE, 'pic-4').setScale(GENERAL_SCALE);
    var pic5 = this.add.image(5649.5 * GENERAL_SCALE, 2602 * GENERAL_SCALE, 'pic-5').setScale(GENERAL_SCALE);

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