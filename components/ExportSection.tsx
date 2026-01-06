'use client';

import { useState } from 'react';
import { AIIdea } from '@/types';

interface ExportSectionProps {
  ideas: AIIdea[];
}

export default function ExportSection({ ideas }: ExportSectionProps) {
  const [exportFormat, setExportFormat] = useState<'structured' | 'json'>('structured');

  const generateStructuredText = () => {
    let text = '# AI活用アイデアシート\n\n';
    text += `作成日時: ${new Date().toLocaleString('ja-JP')}\n`;
    text += `アイデア数: ${ideas.length}件\n\n`;
    text += '---\n\n';

    ideas.forEach((idea, index) => {
      text += `## アイデア ${index + 1}\n\n`;
      text += `**開発工程:** ${idea.開発工程}\n\n`;
      text += `**ASIS：現状のタスク:**\n${idea.ASIS現状のタスク}\n\n`;
      text += `**使用ツール:** ${idea.使用ツール}\n\n`;
      if (idea.準備資料) {
        text += `**準備資料:** ${idea.準備資料}\n\n`;
      }
      text += `**TOBE：AI活用アイデア（具体的指示）:**\n${idea.TOBE_AI活用アイデア}\n\n`;
      if (idea.期待される成果物) {
        text += `**期待される成果物:** ${idea.期待される成果物}\n\n`;
      }
      text += `**難易度:** ${idea.難易度}\n\n`;
      text += `**所要時間:** ${idea.所要時間}\n\n`;
      text += `**期待効果:** ${idea.期待効果}\n\n`;
      
      if (idea.実施日 || idea.実施結果 || idea.カスタマイズ内容 || idea.備考気づき) {
        text += '### 実践記録\n\n';
        if (idea.実施日) {
          text += `**実施日:** ${idea.実施日}\n\n`;
        }
        if (idea.実施結果) {
          text += `**実施結果:** ${idea.実施結果}\n\n`;
        }
        if (idea.カスタマイズ内容) {
          text += `**カスタマイズ内容:**\n${idea.カスタマイズ内容}\n\n`;
        }
        if (idea.備考気づき) {
          text += `**備考・気づき:**\n${idea.備考気づき}\n\n`;
        }
      }
      
      text += '---\n\n';
    });

    return text;
  };

  const generateJSON = () => {
    return JSON.stringify(ideas, null, 2);
  };

  const handleExport = () => {
    const content = exportFormat === 'structured' ? generateStructuredText() : generateJSON();
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = exportFormat === 'structured' 
      ? `AI活用アイデアシート_${new Date().toISOString().split('T')[0]}.txt`
      : `AI活用アイデアシート_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const content = exportFormat === 'structured' ? generateStructuredText() : generateJSON();
    navigator.clipboard.writeText(content).then(() => {
      alert('クリップボードにコピーしました！');
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">エクスポート</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          出力形式
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="structured"
              checked={exportFormat === 'structured'}
              onChange={(e) => setExportFormat(e.target.value as 'structured' | 'json')}
              className="mr-2"
            />
            構造化テキスト形式
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="json"
              checked={exportFormat === 'json'}
              onChange={(e) => setExportFormat(e.target.value as 'structured' | 'json')}
              className="mr-2"
            />
            JSON形式
          </label>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleCopy}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          クリップボードにコピー
        </button>
        <button
          onClick={handleExport}
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          ファイルをダウンロード
        </button>
      </div>

      {exportFormat === 'structured' && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="text-sm font-medium text-gray-700 mb-2">プレビュー（最初の1000文字）</h3>
          <pre className="text-xs text-gray-600 whitespace-pre-wrap overflow-auto max-h-40">
            {generateStructuredText().substring(0, 1000)}...
          </pre>
        </div>
      )}
    </div>
  );
}

