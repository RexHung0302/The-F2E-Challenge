const gamePlay = {
    key: 'gamePlay',
    preload: function() {
        // 載入資源
        // 底圖
        this.load.image('bg1', 'assets/images/bg1.png');
        // 底部
        this.load.image('footer', 'assets/images/footer.png');
        // 主角
        this.load.spritesheet('han', 'assets/images/han.png', { frameWidth: 400, frameHeight: 310 });
        // 生命數量
        this.load.image('hanLife', 'assets/images/hanLife.png');
        // 上方顯示的金幣
        this.load.image('coin', 'assets/images/coin.png');
        // 實際可以吃的金幣
        this.load.spritesheet('gameCoins', 'assets/images/gameCoins.png', { frameWidth: 150, frameHeight: 160 });
        // this.load.image('gameCoins', 'assets/images/gameCoins.png');

        // 設定秒數
        this.timeInt = 90;
        // 速度快慢
        this.speedLv = 1;
        // 控制畫面是否在跑
        this.gameStop = false;
        // 設定金幣量
        this.coinCount = 0;

        this.gameCoinIdx = 0; // 目前金幣索引
        this.gameCoinOverNum = 3; // 金幣循環數量
        this.gameCoinArr = []; // 存放所有金幣實體


    },
    create: function() {
        // 資源載入完成，加入遊戲物件及相關設定
        this.bg1 = this.add.tileSprite(w / 2, h / 4, w, 400, 'bg1');
        // 加入地板
        this.footer = this.add.tileSprite(w / 2, h / 2 + 170, w, 260, 'footer');
        // 設定人物位置與加入物理效果(physics)
        this.player = this.physics.add.sprite(200, 420, 'han');
        // 停整人物的碰撞框(寬, 高)
        this.player.setSize(200, 130);
        // 縮小碰撞框
        this.player.setOffset(50, 170);
        // 縮小人物
        this.player.setScale(0.6);
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
        //建立金幣群組
        this.gameCoins = this.physics.add.group();
        this.gameCoins.createMultiple({
            frameQuantity: 100,
            key: ['gameCoins', 'gameCoins', 'gameCoins', 'gameCoins', 'gameCoins'],
            randomKey: true,
            randomFrame: true,
            setScale: (0.7),
            active: false,
            visible: false,
        });
        // 縮小金幣
        // this.gameCoins.setScale(0.6);

        // 背景加入物理效果
        this.physics.add.existing(this.bg1);
        // 把地板加入物理效果
        this.physics.add.existing(this.footer);
        // 把金幣加入物理效果
        this.physics.add.existing(this.gameCoins);
        // 設定物件是否會受重力影響往下掉
        this.bg1.body.immovable = false;
        this.footer.body.immovable = false;
        this.player.body.immovable = true;
        this.gameCoins.body.immovable = false;
        // 物件的位置是否會受到速度，加速度，阻力和重力影響
        this.bg1.body.moves = false;
        this.footer.body.moves = false;
        this.player.body.moves = true;
        this.gameCoins.body.moves = false;
        //設定角色彈跳值
        this.player.setBounce(1);

        // 設定碰撞物件
        this.physics.add.collider(this.player, this.footer);
        this.physics.add.collider(this.player, this.gameCoins);

        //邊界限制
        this.player.setCollideWorldBounds(true);

        // 讓角色跑起來
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('han', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        });

        //可以獲取遊戲物件的座標資訊
        // console.log(this.player.getBounds());

        // 加上時間
        this.TimeText = this.add.text(w / 2 - 150, 44, `TIME:${this.timeInt}S`, { color: '#000', fontSize: '60px' });
        // 加上金幣量
        this.add.text(w - 160, 62, `x ${this.coinCount}`, { color: '#000', fontSize: '30px' });

        // 時間遞減
        let timer = setInterval(() => {
            this.timeInt--;
            if (this.timeInt < 70 && this.timeInt > 60) {
                this.speedLv = 1.5;
            }
            if (this.timeInt < 60 && this.timeInt > 40) {
                this.speedLv = 2;
            }
            if (this.timeInt < 40 && this.timeInt > 20) {
                this.speedLv = 2.5;
            }
            if (this.timeInt < 20 && this.timeInt > 0) {
                this.speedLv = 3;
            }
            this.TimeText.setText(`TIME:${this.timeInt}S`);
            if (this.timeInt <= 0) {
                clearInterval(timer);
                this.gameStop = true;
            }
        }, 1000);

        //產出金幣
        for (let i = 0; i < this.gameCoinOverNum; i++) {
            let gameCoins = this.gameCoins.create(800, Phaser.Math.Between(h, 380), 'gameCoins');
            gameCoins.body.immovable = true;
            gameCoins.body.moves = false;
            gameCoins.setScale(0.7);
            gameCoins.setBounceX(10);
            gameCoins.setSize(100, 100, 0);
            gameCoins.setVelocityX(Phaser.Math.Between(-700, -300))
            this.gameCoinArr.push(gameCoins);
        }
    },
    update: function() {
        if (this.gameStop) return;
        // 遊戲狀態更新
        this.bg1.tilePositionX += 4 * this.speedLv;
        this.footer.tilePositionX += 4 * this.speedLv;
        this.gameCoins.tilePositionX += 6 * this.speedLv;

        // 鍵盤判斷
        const keyboard = this.input.keyboard.createCursorKeys();
        if (keyboard.up.isDown) {
            console.log('up')
            this.player.setVelocityY(200);
        } else if (keyboard.down.isDown) {
            console.log('down')
            this.player.setVelocityY(-200);
        } else {
            // 人物奔跑
            this.player.anims.play('run', true);
            this.player.setVelocityY(-25);
        }
    }
};