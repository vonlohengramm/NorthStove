var postCard = new Phaser.Scene('postCard'); // 第一页

postCard.preload = function () {
    this.load.image('post-back-0', 'png/post-back-0.png');
    this.load.image('post-back-1', 'png/post-back-1.png');
    this.load.image('post-back-2', 'png/post-back-2.png');


}

postCard.create = function () {
    const uiGroup = this.add.group('uiGroup');

    uiGroup.add(this.add.image(SCENE_WIDTH / 2, SCENE_HEIGHT / 2, 'post-back-0'));
    uiGroup.add(this.add.image(SCENE_WIDTH / 2, 1944, 'post-back-1'));

    uiGroup.children.each(function (ui) {
        ui.setPosition(ui.x * GENERAL_SCALE, ui.y * GENERAL_SCALE);
        ui.setScale(GENERAL_SCALE, GENERAL_SCALE);
    });
}