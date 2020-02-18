var postCard = new Phaser.Scene('postCard'); // 第一页

postCard.preload = function () {
    this.load.image('post-back-0', 'png/post-back-0.png');
    this.load.image('post-back-1', 'png/post-back-1.jpg');
    this.load.image('post-back-2', 'png/post-back-2.png');
    this.load.image('post-snap-test', 'png/post-snap-test.png');

    this.load.image('post-title-back', 'png/post-title-back.png');
    this.load.image('post-code-prompt', 'png/post-code-prompt.png');
    this.load.image('post-txt-horizontal', 'png/post-txt-horizontal-line.png');
    this.load.image('post-year', 'png/post-year.png');

    this.load.image('post-icon-1', 'png/post-icon-1.png');
    this.load.image('post-icon-2', 'png/post-icon-2.png');
}

postCard.create = function () {
    const uiGroup = this.add.group('uiGroup');

    uiGroup.add(this.add.image(SCENE_WIDTH / 2, SCENE_HEIGHT / 2, 'post-back-0'));
    uiGroup.add(this.add.image(SCENE_WIDTH / 2, 1944, 'post-back-1'));
    uiGroup.add(this.add.image(3454.5, 1825, 'post-snap-test'));
    uiGroup.add(this.add.image(3454.5, 1825, 'post-back-2'));
    uiGroup.add(this.add.image(844, 3612, 'post-icon-1'));
    uiGroup.add(this.add.image(1548.5, 3632.5, 'post-icon-2'));
    uiGroup.add(this.add.image(6321, 3642.5, 'post-txt-horizontal'));
    uiGroup.add(this.add.image(5800.5, 3341.5, 'post-title-back'));
    uiGroup.add(this.add.image(5798, 3018, 'post-code-prompt'));
    uiGroup.add(this.add.image(6354.5, 722, 'post-year'));

    uiGroup.children.each(uiGeneralScale);
}