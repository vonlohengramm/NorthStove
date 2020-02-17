var paint = new Phaser.Scene('paint'); // 涂色

var selectPaint = 1;
var colorIndex = 0;
var config = picConfig[selectPaint - 1];

paint.init = function(data) {
    selectPaint = data.pic;
    config = picConfig[selectPaint - 1];
}

paint.preload = function(data) {
    this.load.image('paint-title', 'png/paint-title.png');

    for (let i = 0; i <= 2; i++) {
        this.load.image('paint-back-' + i, 'png/pic-' + selectPaint + '/back-' + i + '.png');
        this.load.image('paint-head-' + i, 'png/pic-' + selectPaint + '/pre-' + i + '.png');
    }

    for (let i = 0; i < config.pngXY.length; i++) {
        this.load.image('paint-' + i, 'png/pic-' + selectPaint + '/paint-' + i + '.png');
    }

    this.load.image('color-back', 'png/white-frame.jpg');
    for (let i in colorConfig) {
        this.load.image('color-' + i, 'png/colorText/color-' + i + '.png');
    }

    this.load.image('select-color', 'png/pic-select.png');

    this.load.image('finish-btn-back', 'png/finish-btn-back.png');
    this.load.image('finish-btn-fore', 'png/finish-btn-fore.png');
    this.load.image('finish-btn-txt', 'png/finish-btn-txt.png');
}

paint.create = function() {
    const promptGroup = this.add.group('promptGroup');
    promptGroup.add(this.add.image(SCENE_WIDTH / 2, SCENE_HEIGHT / 2, 'menu-back'));

    const finishBtnGroup = this.add.group('finishBtnGroup');
    
    function setGroupVisible(group, visible) {
        group.children.each(function (gameObject) {
           gameObject.visible = visible;
        });
    }

    var prompt; // ui variable
    var title;

    var finishBtnBack; // btn variable
    var finishBtnFore;
    var finishBtnTxt;

    const picGroup = this.add.group('picGroup');

    for (let i = 0; i <= 2; i++) {
        picGroup.add(this.add.image(2952.5, 2021.5, 'paint-back-' + i));
    }
    const pngXYConfig = config.pngXY;
    for (let i = 0; i < pngXYConfig.length; i++) {
        var image = this.add.image((pngXYConfig[i].x + 197) * GENERAL_SCALE, (pngXYConfig[i].y + 176) * GENERAL_SCALE, 'paint-' + i).setScale(GENERAL_SCALE, GENERAL_SCALE);
        image.on('pointerdown', function (pointer) {
            var obj = this;
            obj.setTint(colorConfig[colorIndex].color);
            setGroupVisible(promptGroup, false);
            setGroupVisible(finishBtnGroup, true);
        }, image);
        image.setInteractive({ pixelPerfect: true });
    }
    for (let i = 0; i < 2; i++) {
        picGroup.add(this.add.image(2952.5, 2021.5, 'paint-head-' + i));
    }
    picGroup.add(this.add.image(2952.5, 2021.5, 'paint-head-2').setBlendMode(Phaser.BlendModes.MULTIPLY));
    picGroup.children.each(uiGeneralScale);

    var selectColorUI = this.add.image(colorConfig[colorIndex].x * GENERAL_SCALE, colorConfig[colorIndex].y * GENERAL_SCALE, 'select-color').setScale(GENERAL_SCALE, GENERAL_SCALE);
    var changeColorTo = function (index) {
        selectColorUI.setPosition(colorConfig[index].x * GENERAL_SCALE, colorConfig[index].y * GENERAL_SCALE);
        colorIndex = index;
        selectColorUI.depth = 10;
    };

    const colorGroup = this.add.group('colorGroup');
    const game = this;
    colorConfig.forEach(function (color, i) {
        var colorUI = game.add.image(color.x, color.y, 'color-back').setTint(color.color).setInteractive();
        colorGroup.add(colorUI);
        colorGroup.add(game.add.image(color.x, color.y, 'color-' + i));
        colorUI.on('pointerdown', function (event) {
            console.log('select color: ' + this.index);
            changeColorTo(this.index);
        }, {index: i});
    });
    colorGroup.children.each(uiGeneralScale);

    changeColorTo(colorIndex);

    prompt = this.add.image(3445, 3622, 'prompt-back');
    promptGroup.add(prompt);
    title = this.add.image(3445, 3632, 'paint-title');
    promptGroup.add(title);

    finishBtnBack = this.add.image(4833, 3620, 'finish-btn-back');
    finishBtnGroup.add(finishBtnBack);
    finishBtnBack.setInteractive();
    // finishBtnFore = this.add.image(4833, 3620, 'finish-btn-fore');
    // promptGroup.add(finishBtnFore);
    finishBtnTxt = this.add.image(4833, 3606, 'finish-btn-txt');
    finishBtnGroup.add(finishBtnTxt);
    finishBtnBack.once('pointerdown', function (event) {
        console.log('jump to post card scene');
        this.scene.start('postCard');
    }, this);

    promptGroup.children.each(uiGeneralScale);
    finishBtnGroup.children.each(uiGeneralScale)
    // finishBtnGroup.children.each(function (btn) {
    //     btn.setInteractive(true);
    // });

    setGroupVisible(finishBtnGroup, false);
}