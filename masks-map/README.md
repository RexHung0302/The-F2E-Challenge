# 第十週 - Masks Map(口罩地圖)

### 範例

[DOMO](https://rexhung0302.github.io/The-F2E-Challenge/masks-map/dist/index.html#/masksMap/index)

[BLOG](https://rexhung0302.github.io/2020/02/12/20200212/)

### 心得
過年前開始武漢肺炎突然肆虐，突然間口罩都被搶購一空，這段時間武漢肺癌一直是人們最常談到的話題，也讓你開始知道很多事情其實離你並不遠。

這次六角學院藉由去年的 The F2E 平台開啟第十關，也就是口罩地圖，為什麼會有這關呢？詳情可以看看 [科技防疫｜自製「超商口罩地圖」的工程師：地圖上線6小時，我收到60萬Google帳單](https://futurecity.cw.com.tw/article/1239)，很慶幸自己能在切版練習之餘，還能幫助到其他人，雖然不知道會不會真的有人用就是了，但是自己做出來很有成就感。

我想可以把工作當興趣之外，又能幫助人，這就是我一直夢寐以求的事情，話不多說，多的在部落格內解說，讓我們一起祈禱並且盡自己最大的能力幫助彼此，渡過這一次的難關，加油，不管是任何正在努力付出的人，我們一起加油！

### 使用套件
[sweetalert2](https://sweetalert2.github.io/) 美化 Alert

[axios](https://github.com/axios/axios) 基於 Promise 的 HTTP 庫

[lodash](https://www.lodashjs.com/) Lodash 是一個 JavaScript 庫

[Vue leaflet](https://vue2-leaflet.netlify.com/) 地圖容器

[Openstreetmap](https://www.openstreetmap.org/#map=8/23.611/120.768) 地圖圖資

### CSS 規範
1. SMASS 增加子模組 增加重複使用性
2. BEM Block-Element-Modifire
3. lower camel case (ex: tomatoTime)

### 安裝
```
1. $ Git Clone
2. $ cd The-F2E-Challenge/masksmap
3. $ npm install or $ yarn install
4. $ npm run serve or $ yarn serve
```

### 測試
```
$ yarn run test
```