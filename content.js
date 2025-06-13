// contents.js

window.addEventListener('load', () => {
  document.body.classList.add('tdo-league-enhanced');

  const headingPattern = /^Division\s+[A-Z]+\s*\(.+\)$/;

  const rows = Array.from(document.querySelectorAll('table tr'));
  rows.forEach((tr, i) => {
    const cellText = tr.textContent.trim();
    if (headingPattern.test(cellText)) {
      // 見出し検出
      const heading = cellText;
      const parent = tr.closest('table').parentNode;

      // <h2>見出し
      const h2 = document.createElement('h2');
      h2.className = 'tdo-league-heading';
      h2.textContent = heading;

      // データ行取得（見出し行の次から、空行または別見出しまで）
      const dataRows = [];
      let j = i + 1;
      while (j < rows.length) {
        const txt = rows[j].textContent.trim();
        if (!txt || headingPattern.test(txt)) break;
        dataRows.push(rows[j]);
        j++;
      }

      if (dataRows.length > 0) {
        // 新テーブル作成
        const tbl = document.createElement('table');
        tbl.className = 'tdo-league-table';

        dataRows.forEach((dataTr, di) => {
          const newTr = document.createElement('tr');
          dataTr.querySelectorAll('td').forEach(td => {
            const newCell = document.createElement(di === 0 ? 'th' : 'td');
            newCell.textContent = td.textContent.trim();
            newTr.appendChild(newCell);
          });
          tbl.appendChild(newTr);
        });

        // 挿入
        parent.insertBefore(h2, tr);
        parent.insertBefore(tbl, dataRows[0]);
      }

      // 元の行を削除
      tr.remove();
      dataRows.forEach(r => r.remove());
    }
  });
});
