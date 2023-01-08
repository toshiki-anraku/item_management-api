# DB 接続情報

```
Host/Socket：127.0.0.1
Port：3306
User：root
Password：root

DbName：item_management
```

## 環境構築

1. ターミナル起動
2. ホストの設定
   1. `sudo vim /private/etc/hosts`
   2. パスワード入力
   3. ホスト名追記（インサートモード(i)、コマンドモード(esc ボタン)）
   4. http 用 ：`127.0.0.1 tebura-api.local tebura-prisma-studio.local`
   5. https 用：`::1 tebura-api.local tebura-prisma-studio.local`
   6. 保存して終了（：wq）
3. item_management-api のディレクトリへ移動
4. Docker 起動

```
docker compose up -d
```

4. コンテナに入る

```
docker exec -it imapi_app bash
```

5. パッケージインストール

```
npm install
```

6. NestJS 起動

```
npm run start:dev
```

7. ブラウザで起動確認

```
http://tebura-api.local:9080/
```

8. GraphQL IDE 起動確認

```
http://tebura-api.local:9080/graphql
```

9. PrismaStudio 起動確認

```
http://tebura-prisma-studio.local:9080/
```

## 主要コマンド一覧

### Prisma スキーマの情報を DB へ反映

```
npx prisma db push
```

### DB の情報を Prisma スキーマへ反映

```
npx prisma db pull
```

### Seeder 実行

```
npx prisma db seed
```

### DB のトランケート

```
yarn prisma:truncate
```

### Prisma クライアントの更新 ※Prisma モデルを変更した場合は実行

```
npx prisma generate
```
