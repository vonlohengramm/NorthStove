var menu = new Phaser.Scene('menu'); // 第二页，选画面
menu.preload = function () {
    this.load.image('menu-back', 'png/menu-back.jpg');
    this.load.image('menu-title', 'png/menu-title-desc.png');

    for (let i = 1; i <= 5; i++) {
        this.load.image('pic-' + i, 'png/menu-pic-' + i + '.png');
        this.load.image('pic-title-' + i, 'png/menu-pic-title-' + i + '.png');
    }

}
menu.create = function () {
    var uiGroup = this.add.group('uiGroup');
    uiGroup.add(this.add.image(SCENE_WIDTH / 2, SCENE_HEIGHT / 2, 'menu-back'));
    var prompt = this.add.image(3445, 3622, 'prompt-back');
    uiGroup.add(prompt);
    var title = this.add.image(3445, 3622, 'menu-title');
    uiGroup.add(title);

    uiGroup.children.each(uiGeneralScale);

    var picGroup = this.add.group('picGroup');
    var game = this;
    picConfig.forEach(function (v, i) {
       var pic = game.add.image(v.x, v.y, 'pic-' + (i + 1));
       var picTitle = game.add.image(v.titleX, v.titleY, 'pic-title-' + (i + 1));
       var id = i + 1;
       picGroup.add(pic);
       picGroup.add(picTitle);
       pic.once('pointerdown', function(event) {
           console.log('jump to paint scene with id: ' + id);
           game.scene.start('paint', { pic: i + 1 });
       }, game);
       picTitle.once('pointerdown', function(event) {
           console.log('jump to paint scene with id: ' + id);
           game.scene.start('paint', { pic: i + 1 });
       }, game);
       picTitle.depth = 10; // title on top
    });

    picGroup.children.each(function (pic) {
        pic.setInteractive();
    });
    picGroup.children.each(uiGeneralScale);

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
    });
}