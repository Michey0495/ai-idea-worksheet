'use client';

import { useState } from 'react';
import { AIIdea } from '@/types';

interface ExportSectionProps {
  ideas: AIIdea[];
}

export default function ExportSection({ ideas }: ExportSectionProps) {
  const [exportFormat, setExportFormat] = useState<'prompt' | 'structured' | 'json'>('prompt');

  const generateAIPrompt = () => {
    let prompt = '以下の業務課題に対して、AIツール（NotebookLMまたはGemini）を活用した解決策を提案してください。\n\n';
    prompt += '## 業務課題\n\n';

    ideas.forEach((idea, index) => {
      if (!idea.ASIS現状のタスク || !idea.開発工程) return;
      
      prompt += `### 課題${index + 1}: ${idea.開発工程}工程での課題\n\n`;
      if (idea.工程ステップ) {
        prompt += `**工程ステップ:** ${idea.工程ステップ}\n\n`;
      }
      prompt += `**現状のタスク（困っていること）:**\n${idea.ASIS現状のタスク}\n\n`;
      
      if (idea.準備資料) {
        prompt += `**準備できる資料:** ${idea.準備資料}\n\n`;
      }
      
      prompt += `**使用可能なツール:** ${idea.使用ツール}\n\n`;
      
      if (idea.期待される成果物) {
        prompt += `**期待される成果物:** ${idea.期待される成果物}\n\n`;
      }
      
      prompt += `**難易度:** ${idea.難易度}\n`;
      prompt += `**所要時間の目安:** ${idea.所要時間}\n`;
      prompt += `**期待効果:** ${idea.期待効果}\n\n`;
      
      prompt += '**解決策の要件:**\n';
      prompt += `- ${idea.使用ツール}を使用して、上記の課題を解決する具体的な手順を提案してください\n`;
      prompt += `- 具体的な指示内容（プロンプト）を含めてください\n`;
      prompt += `- プレースホルダー（{プロジェクト名}、{システム名}など）を使用して、汎用的な形式にしてください\n`;
      if (idea.TOBE_AI活用アイデア) {
        prompt += `- 参考例: ${idea.TOBE_AI活用アイデア.substring(0, 200)}...\n`;
      }
      prompt += '\n';
      
      prompt += '---\n\n';
    });

    prompt += '## 回答形式\n\n';
    prompt += '各課題に対して、以下の形式で回答してください：\n\n';
    prompt += '1. **使用ツール**: NotebookLM または Gemini\n';
    prompt += '2. **準備する資料**: 具体的な資料の種類と形式\n';
    prompt += '3. **具体的な手順**: ステップバイステップの手順\n';
    prompt += '4. **AIへの指示内容（プロンプト）**: そのままコピー&ペーストできる形式\n';
    prompt += '5. **期待される成果物**: どのような結果が得られるか\n';
    prompt += '6. **注意点やコツ**: 実践時のポイント\n\n';
    prompt += '回答は実践的で、すぐに使える形式でお願いします。';

    return prompt;
  };

  const generateStructuredText = () => {
    let text = '# AI活用アイデアシート\n\n';
    text += `作成日時: ${new Date().toLocaleString('ja-JP')}\n`;
    text += `アイデア数: ${ideas.length}件\n\n`;
    text += '---\n\n';

    ideas.forEach((idea, index) => {
      text += `## アイデア ${index + 1}\n\n`;
      text += `**開発工程:** ${idea.開発工程}\n\n`;
      if (idea.工程ステップ) {
        text += `**工程ステップ:** ${idea.工程ステップ}\n\n`;
      }
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

  const getContent = () => {
    switch (exportFormat) {
      case 'prompt':
        return generateAIPrompt();
      case 'structured':
        return generateStructuredText();
      case 'json':
        return generateJSON();
    }
  };

  const getFileName = () => {
    const date = new Date().toISOString().split('T')[0];
    switch (exportFormat) {
      case 'prompt':
        return `AI活用アイデアシート_プロンプト_${date}.txt`;
      case 'structured':
        return `AI活用アイデアシート_${date}.txt`;
      case 'json':
        return `AI活用アイデアシート_${date}.json`;
    }
  };

  const handleExport = () => {
    const content = getContent();
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = getFileName();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = () => {
    const content = getContent();
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
        <div className="flex flex-col gap-2">
          <label className="flex items-center">
            <input
              type="radio"
              value="prompt"
              checked={exportFormat === 'prompt'}
              onChange={(e) => setExportFormat(e.target.value as 'prompt' | 'structured' | 'json')}
              className="mr-2"
            />
            <span className="text-gray-700">
              AIチャット用プロンプト（推奨）
              <span className="text-xs text-gray-500 ml-2">- AIチャットに貼り付けて解決策を提案してもらう</span>
            </span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="structured"
              checked={exportFormat === 'structured'}
              onChange={(e) => setExportFormat(e.target.value as 'prompt' | 'structured' | 'json')}
              className="mr-2"
            />
            <span className="text-gray-700">構造化テキスト形式</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="json"
              checked={exportFormat === 'json'}
              onChange={(e) => setExportFormat(e.target.value as 'prompt' | 'structured' | 'json')}
              className="mr-2"
            />
            <span className="text-gray-700">JSON形式</span>
          </label>
        </div>
      </div>

      <div className="flex gap-4 mb-4">
        <button
          onClick={handleCopy}
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors font-medium"
        >
          プロンプトをコピー
        </button>
        <button
          onClick={handleExport}
          className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition-colors font-medium"
        >
          エクスポート
        </button>
      </div>

      {exportFormat === 'prompt' && (
        <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
          <h3 className="text-sm font-medium text-blue-800 mb-2">AIチャット用プロンプトについて</h3>
          <p className="text-sm text-blue-700 mb-2">
            このプロンプトをChatGPT、Claude、GeminiなどのAIチャットに貼り付けると、入力した業務課題に対して具体的な解決策を提案してくれます。
          </p>
          <p className="text-sm text-blue-700">
            プロンプトには、各課題の現状、使用可能なツール、期待される成果物などが含まれており、AIが適切な解決策を提案できるようになっています。
          </p>
        </div>
      )}

      {(exportFormat === 'prompt' || exportFormat === 'structured') && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="text-sm font-medium text-gray-700 mb-2">プレビュー（最初の1000文字）</h3>
          <pre className="text-xs text-gray-700 whitespace-pre-wrap overflow-auto max-h-40 bg-white p-3 rounded border">
            {getContent().substring(0, 1000)}...
          </pre>
        </div>
      )}
    </div>
  );
}

