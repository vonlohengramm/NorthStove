var paint = new Phaser.Scene('paint'); // 涂色

var selectPaint = 1;

paint.init = function(data) {
    selectPaint = data.pic;
}

paint.preload = function(data) {
    this.load.image('paint-title', 'png/paint-title.png');

    for (let i = 0; i <= 2; i++) {
        this.load.image('paint-back-' + i, 'png/pic-' + selectPaint + '/back-' + i + '.png');
        this.load.image('paint-head-' + i, 'png/pic-' + selectPaint + '/pre-' + i + '.png');
    }

    for (let i = 0; i <= 6; i++) {
        this.load.image('paint-' + i, 'png/pic-' + selectPaint + '/paint-' + i + '.png');
    }
}

paint.create = function() {
    var config = picConfig[selectPaint - 1];

    var picGroup = this.add.group('picGroup');

    for (let i = 0; i <= 2; i++) {
        picGroup.add(this.add.image(2952.5, 2021.5, 'paint-back-' + i));
    }
    for (let i = 0; i < config.paintNum; i++) {
        var image = this.add.image(2952.5, 2021.5, 'paint-' + i).setInteractive();
        // image.setTint(0xff0000);
    }
    for (let i = 0; i < 2; i++) {
        picGroup.add(this.add.image(2952.5, 2021.5, 'paint-head-' + i));
    }
    picGroup.add(this.add.image(2952.5, 2021.5, 'paint-head-2').setBlendMode(Phaser.BlendModes.MULTIPLY));
    picGroup.children.each(function (pic) {
        pic.setScale(GENERAL_SCALE, GENERAL_SCALE);
        pic.setPosition(pic.x * GENERAL_SCALE, pic.y * GENERAL_SCALE);
    });

    var uiGroup = this.add.group('uiGroup');
    var prompt = this.add.image(3445, 3622, 'prompt-back');
    uiGroup.add(prompt);
    var title = this.add.image(3445, 3632, 'paint-title');
    uiGroup.add(title);
    uiGroup.children.each(function (ui) {
        ui.setScale(GENERAL_SCALE, GENERAL_SCALE);
        ui.setPosition(ui.x * GENERAL_SCALE, ui.y * GENERAL_SCALE);
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
    })
}