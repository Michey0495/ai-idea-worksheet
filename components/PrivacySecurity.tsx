'use client';

export default function PrivacySecurity() {
  return (
    <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mt-8">
      <div className="flex items-start mb-4">
        <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <h2 className="text-2xl font-bold text-green-800">プライバシーとセキュリティ</h2>
      </div>
      
      <div className="space-y-4 text-gray-700">
        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h3 className="font-bold text-green-700 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            データは一切保存されません
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm ml-7">
            <li>入力されたデータはブラウザのメモリ（RAM）にのみ一時的に保存されます</li>
            <li>ローカルストレージ、セッションストレージ、Cookieには一切保存されません</li>
            <li>サーバーにデータを送信することはありません</li>
            <li>データベースに保存されることはありません</li>
            <li>ページを閉じると、すべての入力データは消去されます</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h3 className="font-bold text-green-700 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            完全にクライアントサイドで動作
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm ml-7">
            <li>すべての処理はブラウザ内で完結します</li>
            <li>サーバーサイドのAPIやデータベースは使用していません</li>
            <li>外部サービスへのデータ送信は行いません</li>
            <li>エクスポート機能もブラウザ内で完結し、ファイルはローカルにダウンロードされるのみです</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h3 className="font-bold text-green-700 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            ソースコードの公開
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm ml-7">
            <li>すべてのソースコードはGitHubで公開されています</li>
            <li>コードを確認することで、データが保存されないことを検証できます</li>
            <li>データベース接続、API呼び出し、ローカルストレージの使用がないことを確認できます</li>
            <li><a href="https://github.com/Michey0495/ai-idea-worksheet" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHubリポジトリを確認</a></li>
          </ul>
        </div>

        <div className="bg-white rounded-lg p-4 border border-green-200">
          <h3 className="font-bold text-green-700 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            機密情報の安全な使用
          </h3>
          <p className="text-sm ml-7">
            このアプリは機密情報を含む業務課題を入力しても安全です。データは一切保存されず、ページを閉じると完全に消去されます。エクスポートしたファイルは、お使いのデバイスにのみ保存されます。
          </p>
        </div>

        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mt-4">
          <h3 className="font-bold text-yellow-800 mb-2">⚠️ 注意事項</h3>
          <ul className="list-disc list-inside space-y-1 text-sm text-yellow-900">
            <li>エクスポートしたファイルは、お使いのデバイスに保存されます。ファイルの管理にはご注意ください</li>
            <li>ブラウザの開発者ツールでデータを確認できますが、ページを閉じると消去されます</li>
            <li>複数のタブで同じアプリを開いている場合、各タブのデータは独立しています</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

