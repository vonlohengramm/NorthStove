var paint = new Phaser.Scene('paint'); // 涂色

var selectPaint = 1;
var colorIndex = 0;

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

    this.load.image('color-back', 'png/white-frame.jpg');
    for (let i in colorConfig) {
        this.load.image('color-' + i, 'png/colorText/color-' + i + '.png');
    }

    this.load.image('select-color', 'png/pic-select.png');
}

paint.create = function() {
    var uiGroup = this.add.group('uiGroup');
    uiGroup.add(this.add.image(SCENE_WIDTH / 2, SCENE_HEIGHT / 2, 'menu-back'));

    var config = picConfig[selectPaint - 1];

    var picGroup = this.add.group('picGroup');

    for (let i = 0; i <= 2; i++) {
        picGroup.add(this.add.image(2952.5, 2021.5, 'paint-back-' + i));
    }
    for (let i = 0; i < config.paintNum; i++) {
        var image = this.add.image(2952.5, 2021.5, 'paint-' + i).setInteractive();
    }
    for (let i = 0; i < 2; i++) {
        picGroup.add(this.add.image(2952.5, 2021.5, 'paint-head-' + i));
    }
    picGroup.add(this.add.image(2952.5, 2021.5, 'paint-head-2').setBlendMode(Phaser.BlendModes.MULTIPLY));
    picGroup.children.each(function (pic) {
        pic.setScale(GENERAL_SCALE, GENERAL_SCALE);
        pic.setPosition(pic.x * GENERAL_SCALE, pic.y * GENERAL_SCALE);
    });

    var selectColorUI = this.add.image(colorConfig[colorIndex].x * GENERAL_SCALE, colorConfig[colorIndex].y * GENERAL_SCALE, 'select-color').setScale(GENERAL_SCALE, GENERAL_SCALE);
    var changeColorTo = function (index) {
        selectColorUI.setPosition(colorConfig[index].x * GENERAL_SCALE, colorConfig[index].y * GENERAL_SCALE);
        colorIndex = index;
        selectColorUI.depth = 10;
    };

    var colorGroup = this.add.group('colorGroup');
    var game = this;
    colorConfig.forEach(function (color, i) {
        var colorUI = game.add.image(color.x, color.y, 'color-back').setTint(color.color).setInteractive();
        colorGroup.add(colorUI);
        colorGroup.add(game.add.image(color.x, color.y, 'color-' + i));
        colorUI.on('pointerdown', function (event) {
            console.log('select color: ' + this.index);
            changeColorTo(this.index);
        }, {index: i});
    });
    colorGroup.children.each(function (ui) {
        ui.setScale(GENERAL_SCALE, GENERAL_SCALE);
        ui.setPosition(ui.x * GENERAL_SCALE, ui.y * GENERAL_SCALE);
    });

    changeColorTo(colorIndex);

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