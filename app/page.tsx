'use client';

import { useState } from 'react';
import IdeaForm from '@/components/IdeaForm';
import ExportSection from '@/components/ExportSection';
import { AIIdea } from '@/types';

export default function Home() {
  const [ideas, setIdeas] = useState<AIIdea[]>([
    {
      id: '1',
      開発工程: '',
      ASIS現状のタスク: '',
      使用ツール: '',
      準備資料: '',
      TOBE_AI活用アイデア: '',
      期待される成果物: '',
      難易度: '',
      所要時間: '',
      期待効果: '',
    },
  ]);

  const addIdea = () => {
    const newIdea: AIIdea = {
      id: String(ideas.length + 1),
      開発工程: '',
      ASIS現状のタスク: '',
      使用ツール: '',
      準備資料: '',
      TOBE_AI活用アイデア: '',
      期待される成果物: '',
      難易度: '',
      所要時間: '',
      期待効果: '',
    };
    setIdeas([...ideas, newIdea]);
  };

  const updateIdea = (index: number, updatedIdea: AIIdea) => {
    const newIdeas = [...ideas];
    newIdeas[index] = updatedIdea;
    setIdeas(newIdeas);
  };

  const deleteIdea = (index: number) => {
    const newIdeas = ideas.filter((_, i) => i !== index);
    // IDを再割り当て
    newIdeas.forEach((idea, i) => {
      idea.id = String(i + 1);
    });
    setIdeas(newIdeas);
  };

  const resetAll = () => {
    if (confirm('すべての入力内容をリセットしますか？')) {
      setIdeas([
        {
          id: '1',
          開発工程: '',
          ASIS現状のタスク: '',
          使用ツール: '',
          準備資料: '',
          TOBE_AI活用アイデア: '',
          期待される成果物: '',
          難易度: '',
          所要時間: '',
          期待効果: '',
        },
      ]);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            AI活用アイデアシート
          </h1>
          <p className="text-gray-600">
            ウォーターフォール開発の上流工程でAIツール（NotebookLM、Gemini）を活用するためのアイデアシート
          </p>
        </div>

        <div className="mb-6 flex gap-4 justify-center">
          <button
            onClick={addIdea}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            + 新しいアイデアを追加
          </button>
          <button
            onClick={resetAll}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
          >
            リセット
          </button>
        </div>

        <div className="mb-8">
          {ideas.map((idea, index) => (
            <IdeaForm
              key={idea.id}
              idea={idea}
              onChange={(updatedIdea) => updateIdea(index, updatedIdea)}
              onDelete={ideas.length > 1 ? () => deleteIdea(index) : undefined}
              showDelete={ideas.length > 1}
            />
          ))}
        </div>

        <ExportSection ideas={ideas} />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-bold text-blue-800 mb-3">使い方</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>各項目を入力してください（<span className="text-red-500">*</span>は必須項目です）</li>
            <li>複数のアイデアを追加する場合は「+ 新しいアイデアを追加」ボタンをクリック</li>
            <li>入力完了後、「エクスポート」セクションからAIチャット用プロンプト、構造化テキスト、またはJSON形式でエクスポートできます</li>
            <li>AIチャット用プロンプトをコピーして、ChatGPTやClaudeなどのAIチャットに貼り付けると、解決策を提案してくれます</li>
          </ol>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-4">
          <h2 className="text-xl font-bold text-yellow-800 mb-3">ツールの使い分け</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h3 className="font-bold text-blue-600 mb-2">NotebookLM</h3>
              <p className="text-sm">複数の資料を同時に分析する場合に使用</p>
              <p className="text-sm">例：議事録、メール、チャットログなど複数のソースから情報を抽出</p>
            </div>
            <div>
              <h3 className="font-bold text-yellow-600 mb-2">Gemini</h3>
              <p className="text-sm">単一の作業や新しいコンテンツの作成、レビューを行う場合に使用</p>
              <p className="text-sm">例：機能一覧の作成、設計書のドラフト作成、レビュー</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

