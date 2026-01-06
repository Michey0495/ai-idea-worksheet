'use client';

import { useState } from 'react';
import { AIIdea, DevelopmentPhase, Tool, Difficulty, ExpectedEffect } from '@/types';

interface IdeaFormProps {
  idea: AIIdea;
  onChange: (idea: AIIdea) => void;
  onDelete?: () => void;
  showDelete?: boolean;
}

export default function IdeaForm({ idea, onChange, onDelete, showDelete = false }: IdeaFormProps) {
  const handleChange = (field: keyof AIIdea, value: string) => {
    onChange({ ...idea, [field]: value } as AIIdea);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-2 border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">AI活用アイデア #{idea.id}</h3>
        {showDelete && onDelete && (
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            削除
          </button>
        )}
      </div>

      <div className="space-y-4">
        {/* 開発工程 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            開発工程 <span className="text-red-500">*</span>
          </label>
          <select
            value={idea.開発工程}
            onChange={(e) => handleChange('開発工程', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">選択してください</option>
            <option value="要求整理">要求整理</option>
            <option value="要件定義">要件定義</option>
            <option value="基本設計">基本設計</option>
            <option value="その他PM業務">その他PM業務</option>
          </select>
        </div>

        {/* ASIS：現状のタスク */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ASIS：現状のタスク <span className="text-red-500">*</span>
          </label>
          <textarea
            value={idea.ASIS現状のタスク}
            onChange={(e) => handleChange('ASIS現状のタスク', e.target.value)}
            placeholder="例：複数の議事録PDFを読み返し、顧客の真の課題を特定する。"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>

        {/* 使用ツール */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            使用ツール <span className="text-red-500">*</span>
          </label>
          <select
            value={idea.使用ツール}
            onChange={(e) => handleChange('使用ツール', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">選択してください</option>
            <option value="NotebookLM">NotebookLM（複数資料の分析に適している）</option>
            <option value="Gemini">Gemini（単一作業・作成に適している）</option>
          </select>
        </div>

        {/* 準備資料 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            準備資料
          </label>
          <input
            type="text"
            value={idea.準備資料}
            onChange={(e) => handleChange('準備資料', e.target.value)}
            placeholder="例：議事録PDF 3件以上"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* TOBE：AI活用アイデア */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            TOBE：AI活用アイデア（具体的指示） <span className="text-red-500">*</span>
          </label>
          <textarea
            value={idea.TOBE_AI活用アイデア}
            onChange={(e) => handleChange('TOBE_AI活用アイデア', e.target.value)}
            placeholder="例：全ての議事録PDFをソースとして読み込ませ、「{プロジェクト名}の顧客が『課題』『問題』『困っている』と発言した箇所を全て抜き出し、トピック別に分類して。各課題の背景と影響範囲も含めて整理して」と指示する。"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            ※ {`{プロジェクト名}`}、{`{システム名}`}などのプレースホルダーを使用できます
          </p>
        </div>

        {/* 期待される成果物 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            期待される成果物
          </label>
          <input
            type="text"
            value={idea.期待される成果物}
            onChange={(e) => handleChange('期待される成果物', e.target.value)}
            placeholder="例：課題一覧表（トピック別分類、背景・影響範囲含む）"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* 難易度、所要時間、期待効果 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              難易度 <span className="text-red-500">*</span>
            </label>
            <select
              value={idea.難易度}
              onChange={(e) => handleChange('難易度', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">選択してください</option>
              <option value="初級">初級</option>
              <option value="中級">中級</option>
              <option value="上級">上級</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              所要時間 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={idea.所要時間}
              onChange={(e) => handleChange('所要時間', e.target.value)}
              placeholder="例：15分"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              期待効果 <span className="text-red-500">*</span>
            </label>
            <select
              value={idea.期待効果}
              onChange={(e) => handleChange('期待効果', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">選択してください</option>
              <option value="高">高</option>
              <option value="中">中</option>
            </select>
          </div>
        </div>

        {/* 任意項目 */}
        <div className="border-t pt-4 mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">実践記録（任意）</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                実施日
              </label>
              <input
                type="date"
                value={idea.実施日 || ''}
                onChange={(e) => handleChange('実施日', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                実施結果
              </label>
              <select
                value={idea.実施結果 || ''}
                onChange={(e) => handleChange('実施結果', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">選択してください</option>
                <option value="○">○（うまくいった）</option>
                <option value="△">△（改善が必要）</option>
                <option value="×">×（うまくいかなかった）</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              カスタマイズ内容
            </label>
            <textarea
              value={idea.カスタマイズ内容 || ''}
              onChange={(e) => handleChange('カスタマイズ内容', e.target.value)}
              placeholder="プロジェクトに合わせて調整した内容を記入"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              備考・気づき
            </label>
            <textarea
              value={idea.備考気づき || ''}
              onChange={(e) => handleChange('備考気づき', e.target.value)}
              placeholder="次回に活かせるポイント、改善点など"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

