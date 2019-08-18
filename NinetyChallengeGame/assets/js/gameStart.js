const gameStart = {
    key: 'gameStart',
    preload: function() {
        // 載入資源
        // 底圖
        this.load.image('bg1', 'assets/images/bg1.png');
        // 底部
        this.load.image('footer', 'assets/images/footer.png');
        // 主角
        this.load.spritesheet('han', 'assets/images/han.png', { frameWidth: 400, frameHeight: 310 });
        // 高雄發大財 Title
        this.load.image('logo', 'assets/images/logo.png');
        // 開始按鈕
        this.load.image('startBtn', 'assets/images/startBtn.png');
        // 向上向下按鍵
        this.load.image('upBtn', 'assets/images/upBtn.png');
        this.load.image('downBtn', 'assets/images/downBtn.png');

        // 生命數量
        this.load.image('hanLife', 'assets/images/hanLife.png');
        // 金幣
        this.load.image('coin', 'assets/images/coin.png');

        // 設定秒數
        this.timeInt = 90;
        // 設定金幣量
        this.coinCount = 0;
    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定
        this.bg1 = this.add.tileSprite(w / 2, h / 4, w, 400, 'bg1');
        // 加入地板
        this.footer = this.add.tileSprite(w / 2, h / 2 + 170, w, 260, 'footer');
        // 設定人物位置與加入物理效果(physics)
        this.player = this.add.sprite(200, 420, 'han');
        // 縮小人物
        this.player.setScale(0.6);
        // 加入 LOGO 及 向上向下鍵 還有開始鈕
        this.logo = this.add.image(w / 2 + 200, h / 2 - 70, 'logo');
        this.logo.setScale(0.5);
        this.startBtn = this.add.image(w / 2 + 200, h / 2 + 90, 'startBtn');
        this.startBtn.setScale(0.7);
        this.upBtn = this.add.image(w / 2 + 140, h / 2 + 180, 'upBtn');
        this.upBtn.setScale(0.7);
        this.downBtn = this.add.image(w / 2 + 260, h / 2 + 180, 'downBtn');
        this.downBtn.setScale(0.7);
        // 加入金幣
        this.coin = this.add.image(w - 200, 75, 'coin');
        this.coin.setScale(0.6);
        // 加入生命
        this.hanLife = this.add.image(100, 75, 'hanLife');
        this.hanLife1 = this.add.image(150, 75, 'hanLife');
        this.hanLife2 = this.add.image(200, 75, 'hanLife');
        this.hanLife.setScale(0.6);
        this.hanLife1.setScale(0.6);
        this.hanLife2.setScale(0.6);
        // 加上時間
        this.TimeText = this.add.text(w / 2 - 150, 44, `TIME:${this.timeInt}S`, { color: '#000', fontSize: '60px' });
        // 加上金幣量
        this.add.text(w - 160, 62, `x ${this.coinCount}`, { color: '#000', fontSize: '30px' });
        // 加入互動事件
        this.startBtn.setInteractive();
        // 點下後產生的事件
        this.startBtn.on('pointerdown', () => {
            this.scene.start('gamePlay');
        });

        // 讓角色跑起來
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('han', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });
        // 人物奔跑
        this.player.anims.play('run', true);
    },
    update: function() {
        // 遊戲狀態更新
        this.bg1.tilePositionX += 4;
        this.footer.tilePositionX += 4;
    }
};