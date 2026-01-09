# 筋膜リリースナビ (Kinmaku Todo)

隙間時間で身体をリセット。デスクワークや運動不足による身体の不調に対するアドバイスを手軽に受けられるモバイルファースト Webアプリです。

## 🎯 概要

このアプリは、ユーザーが気になる身体の部位（首、肩、背中、腰、脚）を選択することで、筋膜リリースのアドバイスを受け取ることができます。

### 主な機能

- **部位選択モード**: 身体の各部位ボタンをタップしてアドバイスを確認
- **診断モード**: 症状から診断するオプション（今後拡張予定）
- **レスポンシブデザイン**: モバイルファースト、iPhone Pro Max (428px) 基準でデザイン
- **クリーンUI**: 健康アプリらしい清潔感と安心感のあるデザイン

## 🛠 技術スタック

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Vitest + React Testing Library
- **Font**: Noto Sans JP (Google Fonts)

## 📁 プロジェクト構造

```
Kinmaku-Todo/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # ルートレイアウト
│   │   ├── page.tsx             # トップページ
│   │   ├── globals.css          # グローバルスタイル
│   │   └── advice/
│   │       └── [bodyPart]/
│   │           └── page.tsx     # アドバイス詳細ページ
│   ├── components/
│   │   ├── Header.tsx           # ヘッダーコンポーネント
│   │   ├── BodyPartButton.tsx   # 部位選択ボタン
│   │   ├── DiagnosisButton.tsx  # 診断スタートボタン
│   │   └── ImagePlaceholder.tsx # 画像プレースホルダー
│   ├── data/
│   │   └── adviceData.ts        # アドバイスデータ定数
│   └── __tests__/
│       ├── page.test.tsx        # トップページテスト
│       └── components/
│           └── BodyPartButton.test.tsx  # ボタンテスト
├── vitest.config.ts             # Vitest設定
├── vitest.setup.ts              # テストセットアップ
├── tailwind.config.ts           # Tailwind設定
├── tsconfig.json                # TypeScript設定
├── package.json                 # 依存パッケージ
└── README.md                    # このファイル
```

## 🚀 セットアップと実行

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスしてください。

### 3. ビルド

```bash
npm run build
npm start
```

### 4. テストの実行

```bash
# テストを実行
npm test

# テストをファイル監視モードで実行
npm test -- --watch

# テストUIで実行
npm run test:ui
```

## 🎨 デザイン方針

### カラーパレット

- **Primary**: `#10B981` (Emerald-500) - 健康的な緑
- **Background**: `#F0FDF4` (Emerald-50) - 柔らかい緑の背景
- **Text**: `#1F2937` (Gray-800) - 読みやすいダークグレー
- **Accent**: `#34D399` (Emerald-400) - アクセントカラー

### タイポグラフィ

- **Font**: Noto Sans JP (日本語対応)
- **サイズ**: モバイルファースト、最大幅 428px

## 📊 テストカバレッジ

実装されたテスト:

- ✅ トップページのヘッダー表示テスト
- ✅ すべての部位ボタンが表示されるテスト
- ✅ 診断スタートボタンの表示テスト
- ✅ 部位ボタンの正しいリンク設定テスト
- ✅ 部位選択セクションの表示テスト
- ✅ BodyPartButtonコンポーネントのテキスト表示テスト
- ✅ BodyPartButtonの正しいリンク属性テスト
- ✅ BodyPartButtonのクリック可能性テスト

**全テスト: 8/8 成功**

## 📝 データ構造

アドバイスデータは `src/data/adviceData.ts` で定義されています:

```typescript
interface BodyPartAdvice {
  id: string;              // ユニークID
  name: string;            // 表示名（首、肩、背中、腰、脚）
  icon: string;            // Lucideアイコン名
  title: string;           // アドバイスタイトル
  description: string;     // 解説テキスト
  imageUrl?: string;       // 画像URL（将来用）
}
```

## 🔄 ユーザーフロー

```
トップページ
├── [部位選択] → アドバイス詳細ページ
│   ├── アドバイス内容表示
│   ├── 画像プレースホルダー
│   ├── 効果的な方法（3ステップ）
│   ├── 注意事項
│   └── [別の部位を選ぶ] → トップページ
└── [診断スタート] → 診断ページ（今後実装）
```

## 🚧 今後の拡張機能

- [ ] 診断機能の実装
- [ ] ビデオチュートリアルの統合
- [ ] ユーザー履歴の保存
- [ ] お気に入り機能
- [ ] リマインダー機能
- [ ] ダークモード対応
- [ ] PWA化

## 📄 ライセンス

このプロジェクトはプライベートプロジェクトです。

## 🤝 サポート

問題が発生した場合は、Issues を作成してください。

---

**開発日**: 2026年1月9日
**バージョン**: 0.1.0
