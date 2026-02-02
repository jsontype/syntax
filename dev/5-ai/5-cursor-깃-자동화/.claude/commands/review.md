---
allowed-tools: Bash(git status), Bash(git diff:*), Bash(git log:*), Bash(git branch:*), Bash(git show:*), Bash(gh pr view:*), Bash(gh pr diff:*), Read
description: 現在のブランチの差分をレビューする
---

# コードレビュー

現在のブランチとベースブランチ（main）との差分をレビューします。

## 1. PR の確認とベースブランチの特定

```bash
# 現在のブランチに関連するPRを確認
gh pr view --json title,body,state,baseRefName,headRefName,additions,deletions,changedFiles,url 2>/dev/null || echo "PRなし"

# ベースブランチを特定（PRから取得、なければorigin/HEAD、最終フォールバックはmain）
BASE_BRANCH=$(gh pr view --json baseRefName -q '.baseRefName' 2>/dev/null || git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@' || echo "main")
```

- PR が存在する場合 → PR の概要とベースブランチを把握
- PR が存在しない場合 → ローカルの差分をレビュー対象とし、デフォルトブランチをベースとする

## 2. 差分の確認

```bash
# 現在のブランチを確認
git branch --show-current

# gitステータスを確認
git status

# ベースブランチとの差分があるコミット一覧
git log ${BASE_BRANCH}..HEAD --oneline

# ベースブランチとの差分を取得（ファイル一覧）
git diff ${BASE_BRANCH}...HEAD --stat

# ベースブランチとの差分を取得（詳細）
git diff ${BASE_BRANCH}...HEAD
```

差分が大きい場合は、ファイルごとに分割して確認：

```bash
git diff ${BASE_BRANCH}...HEAD -- path/to/file
```

## 3. レビュー観点

以下の観点でコードをレビューする。

**詳細な規約は `.claude/skills/frontend/` 配下のファイルを参照。**

### チェック項目

- [ ] ディレクトリ構造・アーキテクチャ
- [ ] ファイル命名規約
- [ ] TypeScript 規約
- [ ] React コンポーネント規約
- [ ] Hooks 規約（テスト必須）
- [ ] Styling 規約（Tailwind CSS、デザイントークン）
- [ ] Storybook 規約
- [ ] エラーハンドリング・アクセシビリティ
- [ ] セキュリティ

## 4. レビュー結果の出力

レビュー結果を以下の形式で報告：

### 総合評価

- 承認（Approve）: 問題なし、マージ可能
- 要修正（Request Changes）: 修正が必要
- コメント（Comment）: 議論が必要

### 概要

- 変更の目的と概要を簡潔に説明

### 改善が必要な点

各項目について：

- **ファイル**: `path/to/file:行番号`
- **問題**: 問題の説明
- **推奨**: 改善案

### 質問・確認事項

- 意図が不明な実装について質問

## ガイドライン

- 建設的なフィードバックを心がける
- 「なぜ」問題なのかを説明する
- 具体的な改善案を提示する
- 些細なスタイルの問題より、ロジックや設計に注目する
- 良い実装は積極的に褒める
