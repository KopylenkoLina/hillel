
(function () {

  const rows = document.getElementById('rows');
  const cols = document.getElementById('cols');

  document.forms[0].addEventListener('submit', e => {
    e.preventDefault();
    const fragment = document.createDocumentFragment();
    const table = document.createElement('table');
    table.style.width = '50%';
    table.style.margin = '0 auto';
    fragment.appendChild(table);
    for (let currentRowIndex = 0; currentRowIndex < rows.value; currentRowIndex++) {
      const currentRow = document.createElement('tr');
      currentRow.addEventListener('click', e => {
        alert(`Row ${e.currentTarget.rowIndex + 1}, Col ${e.target.cellIndex + 1}`)
    })
      table.appendChild(currentRow);
      for (let currentColIndex = 0; currentColIndex < cols.value; currentColIndex++) {
        const currentCol = document.createElement('td');
        currentCol.style.backgroundColor = '#ad78b6';
        currentCol.style.height = '50px';
        currentRow.appendChild(currentCol);
      }
    }
    
    document.body.appendChild(fragment);
  });

})();

