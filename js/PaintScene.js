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
    for (let i = 0; i <= 2; i++) {
        this.add.image(2952.5 * GENERAL_SCALE, 2021.5 * GENERAL_SCALE, 'paint-back-' + i).setScale(GENERAL_SCALE);   
    }

    for (let i = 0; i <= 6; i++) {
        this.add.image(2952.5 * GENERAL_SCALE, 2021.5 * GENERAL_SCALE, 'paint-' + i).setScale(GENERAL_SCALE).setInteractive();
    }

    for (let i = 0; i <= 2; i++) {
        this.add.image(2952.5 * GENERAL_SCALE, 2021.5 * GENERAL_SCALE, 'paint-head-' + i).setScale(GENERAL_SCALE);   
    }

    var prompt = this.add.image(3445 * GENERAL_SCALE, 3622 * GENERAL_SCALE, 'prompt-back').setScale(GENERAL_SCALE);
    var title = this.add.image(3445 * GENERAL_SCALE, 3632 * GENERAL_SCALE, 'paint-title').setScale(GENERAL_SCALE);

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