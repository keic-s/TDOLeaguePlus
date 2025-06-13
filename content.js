// contents.js

window.addEventListener('load', () => {
  try {
    // 全テーブル取得
    const tables = document.querySelectorAll('table');

    tables.forEach((table) => {
      table.classList.add('tdo-league-table');

      // 各行をチェック
      const rows = table.querySelectorAll('tr');

      rows.forEach((row) => {
        const text = row.innerText.trim();

        // 特定のキーワードで見出し行と判定（必要に応じて調整可能）
        if (
          /Class\s+[A-Z]/i.test(text) ||
          /Division\s+[A-Z]+\s*\(?\p{Script=Han}*\)?/iu.test(text)  // Division AA（水）など
        ) {
          row.classList.add('tdo-league-heading');
        }
      });
    });

    // bodyにも共通クラスを追加
    document.body.classList.add('tdo-league-enhanced');

    console.log(`[TDO Extension] ${tables.length} tables processed`);
  } catch (error) {
    console.error('[TDO Extension] Error in contents.js:', error);
  }
});
