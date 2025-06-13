// ページのテーブルを取得
const table = document.querySelector('table');  // もし特定のtableがあればセレクター調整

if (!table) {
  console.error('テーブルが見つかりません');
} else {
  // 行ごとに処理
  const rows = Array.from(table.querySelectorAll('tr'));
  
  // 「Division SA (木)」の行を見つける
  let divisionRowIndex = -1;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].innerText.includes('Division SA (木)')) {
      divisionRowIndex = i;
      break;
    }
  }
  
  if (divisionRowIndex === -1) {
    console.error('Division SA (木)の行が見つかりません');
  } else {
    // データは divisionRowIndex の次の行から開始と仮定
    const dataRows = rows.slice(divisionRowIndex + 1);
    
    const teams = dataRows.map(row => {
      const cells = Array.from(row.querySelectorAll('td'));
      if (cells.length < 15) return null; // 適宜調整

      // 例: チーム番号は2列目、チーム名は3列目、得点は4列目〜13列目、合計は15列目
      const teamNumber = cells[1].innerText.trim();
      const teamName = cells[2].innerText.trim();
      const scores = cells.slice(3, 13).map(td => td.innerText.trim());
      const total = cells[14].innerText.trim();

      return {
        teamNumber,
        teamName,
        scores,
        total
      };
    }).filter(x => x !== null);

    console.log(teams);
  }
}
