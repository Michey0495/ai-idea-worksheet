export interface AIIdea {
  id: string;
  開発工程: string;
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

