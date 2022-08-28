## 環境構築

```bash
# dockerイメージの作成、コンテナの作成、コンテナ立ち上げ 
# /docker/
$ docker-compose up -d --build

# コンテナに入る
# 
$ docker exex -it api /bin/sh

# nodeパッケージインストール
# コンテナ内
$ npm install

# npm実行
# コンテナ内
$ npm run dev

```