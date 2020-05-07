var postCard = new Phaser.Scene('postCard'); // 第一页

var selectPaint = 1;
var paintSelected;
var config = picConfig[selectPaint - 1];

postCard.init = function (data) {
    selectPaint = data.pic;
    paintSelected = data.paintSelected;
    var config = picConfig[selectPaint - 1];
}

postCard.preload = function () {
    this.load.image('post-back-0', 'png/post-back-0.png');
    this.load.image('post-back-1', 'png/post-back-1.jpg');
    this.load.image('post-back-2', 'png/post-back-2.png');
    // this.load.image('post-snap-test', 'png/post-snap-test.png');

    this.load.image('post-code-prompt', 'png/post-code-prompt.png');
    this.load.image('post-year', 'png/post-year.png');

    this.load.image('post-icon-1', 'png/post-icon-1.png');
    this.load.image('post-icon-2', 'png/post-icon-2.png');

    this.load.image('post-title', 'png/pic-' + selectPaint + '/title.png');
    this.load.image('post-title-desc', 'png/pic-' + selectPaint + '/title-desc.png')
    this.load.image('post-year', 'png/post-year.png');

    this.load.image('btn-back', 'png/back.jpg');
}

postCard.create = function () {
    const uiGroup = this.add.group('uiGroup');

    uiGroup.add(this.add.image(SCENE_WIDTH / 2, SCENE_HEIGHT / 2, 'post-back-0'));
    uiGroup.add(this.add.image(SCENE_WIDTH / 2, 1944, 'post-back-1'));
    // uiGroup.add(this.add.image(3454.5, 1825, 'post-snap-test'));
    const picGroup = this.add.group('picGroup');

    for (let i = 0; i <= 2; i++) {
        var back = this.add.image(3454.5, 1825, 'paint-back-' + i + '-' + selectPaint);
        back.setCrop(0, (back.height - 3074) / 2, 5643, 3074);
        picGroup.add(back);
    }

    const pngXYConfig = config.pngXY;
    for (let i = 0; i < pngXYConfig.length; i++) {
        var colorIndex = paintSelected[i];

        var image = this.add.image((pngXYConfig[i].x + 699) * GENERAL_SCALE, (pngXYConfig[i].y - 20.5) * GENERAL_SCALE, 'paint-' + i + '-' + selectPaint).setScale(GENERAL_SCALE, GENERAL_SCALE);
        // image.setCrop(0, (image.height - 3074 * GENERAL_SCALE) / 2, 5643 * GENERAL_SCALE, 3074 * GENERAL_SCALE);
        if (pngXYConfig[i].cutY) {
            image.setCrop(0, 0, image.width, image.height - pngXYConfig[i].cutY);
        }
        if (colorIndex) {
            image.setTint(colorConfig[colorIndex].color);
        }
    }

    for (let i = 0; i < 2; i++) {
        var head = this.add.image(3454.5, 1825, 'paint-head-' + i + '-' + selectPaint);
        head.setCrop(0, (head.height - 3074) / 2, 5643, 3074);
        picGroup.add(head);
    }
    picGroup.add(this.add.image(3454.5, 1825, 'paint-head-2' + '-' + selectPaint).setBlendMode(Phaser.BlendModes.MULTIPLY));

    uiGroup.add(this.add.image(3454.5, 1825, 'post-back-2'));
    uiGroup.add(this.add.image(844, 3612, 'post-icon-1'));
    uiGroup.add(this.add.image(1548.5, 3632.5, 'post-icon-2'));
    uiGroup.add(this.add.image(4605, 3200, 'post-title').setOrigin(0));
    uiGroup.add(this.add.image(2068, 3567, 'post-title-desc').setOrigin(0));
    uiGroup.add(this.add.image(6354.5, 722, 'post-year'));
    var prompt = this.add.image(5798, 3018, 'post-code-prompt')
    uiGroup.add(prompt);
    var btnBack = this.add.image(1000, 300, 'btn-back');
    uiGroup.add(btnBack);

    var img = document.createElement("img");

    btnBack.once('pointerdown', function (event) {
        console.log('jump to menu scene');
        this.scene.start('menu');

        if (img) {
            img.remove();
        }
    }, this);
    btnBack.setInteractive();

    uiGroup.children.each(uiGeneralScale);
    picGroup.children.each(uiGeneralScale);

    var str = '';
    for (var i = 0; i < config.pngXY.length; i++) {
        var select = paintSelected[i];
        if (select) {
            str += select.toString(16);
        } else {
            str += 'x';
        }

    }
    img.src = 'http://np.wewow.com.cn:3000/snapshot?pic=' + selectPaint + '&paintSelected=' + str;
    img.style.position = 'absolute';
    img.style.left = 6000 * GENERAL_SCALE + 'px';
    img.style.top = 2905 * GENERAL_SCALE + 'px';
    img.style.backgroundImage = "url('png/loading.gif')";
    img.style.backgroundSize = '55px';
    img.width = 55;
    img.height = 55;
    document.body.appendChild(img);
}