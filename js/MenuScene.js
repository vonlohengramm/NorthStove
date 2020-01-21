var menu = new Phaser.Scene('menu'); // 第二页，选画面
menu.preload = function () {
    this.load.image('menu-back', 'png/menu-back.jpg');
    this.load.image('menu-title', 'png/menu-title.png');

    for (let i = 1; i <= 5; i++) {
        this.load.image('pic-' + i, 'png/menu-pic-' + i + '.png');
        this.load.image('pic-title-' + i, 'png/menu-pic-title-' + i + '.png');
    }

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

    var picTitle2 = this.add.image(3308.5 * GENERAL_SCALE, 906.5 * GENERAL_SCALE, 'pic-title-1').setScale(GENERAL_SCALE);
    var picTitle2 = this.add.image(6323.5 * GENERAL_SCALE, 906.5 * GENERAL_SCALE, 'pic-title-2').setScale(GENERAL_SCALE);
    var picTitle3 = this.add.image(3308.5 * GENERAL_SCALE, 2468.5 * GENERAL_SCALE, 'pic-title-3').setScale(GENERAL_SCALE);
    var picTitle4 = this.add.image(5184.5 * GENERAL_SCALE, 2468.5 * GENERAL_SCALE, 'pic-title-4').setScale(GENERAL_SCALE);
    var picTitle5 = this.add.image(6323.5 * GENERAL_SCALE, 2468.5 * GENERAL_SCALE, 'pic-title-5').setScale(GENERAL_SCALE);

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