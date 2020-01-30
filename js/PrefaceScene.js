var preface = new Phaser.Scene('preface'); // 第一页
preface.preload = function () {
    this.load.image('preface-back', 'png/preface-back.jpg');
    this.load.image('logo', 'png/logo.png');
    this.load.image('prompt-back', 'png/preface-prompt-back.png');
    this.load.image('preface-title', 'png/preface-title.png');
}
preface.create =  function () {
    var uiGroup = this.add.group('uiGroup');

    uiGroup.add(this.add.image(SCENE_WIDTH / 2, SCENE_HEIGHT / 2, 'preface-back'));
    uiGroup.add(this.add.image(5176.5, 1235.5, 'logo'));

    var prompt = this.add.image(3445, 3087, 'prompt-back');
    uiGroup.add(prompt);
    var title = this.add.image(3445, 3097, 'preface-title');
    uiGroup.add(title);

    uiGroup.children.each(function (ui) {
        ui.setPosition(ui.x * GENERAL_SCALE, ui.y * GENERAL_SCALE);
        ui.setScale(GENERAL_SCALE, GENERAL_SCALE);
    });

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

    this.input.once('pointerdown', function (event) {
        console.log('jump to menu scene');
        this.scene.start('menu');
    }, this);
}
