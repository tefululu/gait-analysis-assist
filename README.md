# 歩行分析アシスト

理学療法士の歩行周期、跛行、原因追究、代償動作の整理を補助する静的Webアプリです。

## 使い方

`index.html` をブラウザで開くと利用できます。患者情報は外部送信せず、ブラウザ上で処理します。

## PWAとして使う場合

GitHub Pages、Netlify、VercelなどHTTPSで公開すると、スマホのホーム画面に追加してアプリのように起動できます。一度読み込むと、主要ファイルはキャッシュされオフラインでも開けます。

## GitHub Pagesで公開する手順

1. GitHubで新しいリポジトリを作成します。
   - Repository name例: `gait-analysis-assist`
   - 公開する場合は `Public` を選択します。
2. このフォルダ内のファイルをすべてアップロードします。
3. リポジトリの `Settings` → `Pages` を開きます。
4. `Source` を `Deploy from a branch` にします。
5. `Branch` を `main`、`Folder` を `/root` にして保存します。
6. 数分後に表示される `https://ユーザー名.github.io/gait-analysis-assist/` のようなURLから利用できます。

## アップロードするファイル

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `icon.svg`
- `icon-192.png`
- `icon-512.png`
- `README.md`

## 注意

自由記載欄には患者名、ID、住所、動画URLなど個人情報を入力しない運用を推奨します。このツールは診断を代替せず、臨床推論と記録作成を補助するものです。
