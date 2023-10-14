# currency_postgres
DB操作をするためのバックエンド処理

## 初期インストール
```
cd currency_postgres
npm install
```

## Prisma関連

### スキーマをDBのテーブルに反映
```
npx prisma migrate dev -name init
```

### GUI操作でDBを操作
```
npx prisma studio
```

### サーバーレス環境下で利用するためのコード生成
```
npx prisma generate
```

メインファイルを下記に書き換える
```ts
import { PrismaClient } from "./prisma/generated/client";
```
