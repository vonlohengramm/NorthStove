var preface = new Phaser.Scene('preface'); // 第一页
preface.preload = function () {
    this.load.image('preface-back', 'png/preface-back.jpg');
    this.load.image('logo', 'png/logo.png');
    this.load.image('prompt-back', 'png/preface-prompt-back.png');
    this.load.image('preface-title', 'png/preface-title.png');
}
preface.create =  function () {
    this.add.image(SCENE_WIDTH / 2 * GENERAL_SCALE, SCENE_HEIGHT / 2 * GENERAL_SCALE, 'preface-back').setScale(GENERAL_SCALE);
    this.add.image(5176.5 * GENERAL_SCALE, 1235.5 * GENERAL_SCALE, 'logo').setScale(GENERAL_SCALE);
    var prompt = this.add.image(3445 * GENERAL_SCALE, 3087 * GENERAL_SCALE, 'prompt-back').setScale(GENERAL_SCALE);
    var title = this.add.image(3445 * GENERAL_SCALE, 3097 * GENERAL_SCALE, 'preface-title').setScale(GENERAL_SCALE);

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
