export interface AIIdea {
  id: string;
  開発工程: string;
  工程ステップ?: string;
  ASIS現状のタスク: string;
  使用ツール: string;
  準備資料: string;
  TOBE_AI活用アイデア: string;
  期待される成果物: string;
  難易度: string;
  所要時間: string;
  期待効果: string;
  実施日?: string;
  実施結果?: string;
  カスタマイズ内容?: string;
  備考気づき?: string;
}

export type DevelopmentPhase = '要求整理' | '要件定義' | '基本設計' | 'その他PM業務';
export type Tool = 'NotebookLM' | 'Gemini';
export type Difficulty = '初級' | '中級' | '上級';
export type ExpectedEffect = '高' | '中';

// 各開発工程のステップ定義
export const developmentPhaseSteps: Record<DevelopmentPhase, string[]> = {
  '要求整理': [
    '現状把握',
    'ゴールの明確化',
    '要求の抽出と具体化',
    '要件の整理と文書化',
    '合意形成'
  ],
  '要件定義': [
    '機能要件の定義',
    '非機能要件の定義',
    '画面遷移の設計',
    '外部連携の定義',
    '要件のレビューと承認'
  ],
  '基本設計': [
    '画面設計',
    'データベース設計',
    'API設計',
    'バッチ処理設計',
    '設計レビュー'
  ],
  'その他PM業務': [
    'プロジェクト計画',
    'リスク管理',
    '進捗報告',
    '変更管理',
    'ステークホルダー管理'
  ]
};

