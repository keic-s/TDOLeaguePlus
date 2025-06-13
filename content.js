// content.js

// 対象テーブルを特定し、クラス名を追加（例：Aクラス、Bクラスなど全テーブル対象）
const tables = document.querySelectorAll('table');

tables.forEach((table, index) => {
  table.classList.add('tdo-league-table');
});

// ついでに、bodyにクラスを追加して、CSSを限定的に適用可能に
document.body.classList.add('tdo-league-enhanced');