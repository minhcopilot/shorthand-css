function createExcelHTMLContent() {
    var $table = $('#table');
    var totalRows = $table.find('tbody tr').length;
    
    var htmlParts = [];
    
    htmlParts.push('<!DOCTYPE html><html><head><meta charset="utf-8">');
    htmlParts.push('<title>THỐNG KÊ TRUY CẬP TIN BÀI</title>');
    htmlParts.push('<style>');
    htmlParts.push('table { font-family: "Times New Roman", Times, serif; font-size: 13pt; border-collapse: collapse; width: 100%; }');
    htmlParts.push('th, td { border: 1px solid #000; }');
    htmlParts.push('th { font-family: "Times New Roman", Times, serif; font-size: 13pt; font-weight: bold; text-align: center; padding: 4px; }');
    htmlParts.push('td { font-family: "Times New Roman", Times, serif; font-size: 13pt; padding: 3px; vertical-align: middle; }');
    htmlParts.push('.text-center { text-align: center; }');
    htmlParts.push('.text-left { text-align: left; }');
    htmlParts.push('.text-right { text-align: right; }');
    htmlParts.push('.datetime-cell { mso-number-format: "@"; text-align: center; }');
    htmlParts.push('th:nth-child(2), td:nth-child(2) { width: 550px; min-width: 550px; max-width: 550px; }');
    htmlParts.push('</style></head><body>');
    htmlParts.push('<h2 style="font-family: Times New Roman; text-align: center; margin-bottom: 20px;">Thống kê truy cập tin bài nhiều nhất</h2>');
    htmlParts.push('<p style="font-family: Times New Roman; text-align: center; margin-bottom: 10px;">Tổng số: ' + totalRows + ' bản ghi</p>');
    htmlParts.push('<table><thead><tr>');
    
    $table.find('thead th').each(function() {
        var headerText = $(this).text().replace(/\s+/g, ' ').trim();
        headerText = headerText.replace(/[\u2039\u203A\u00AB\u00BB]/g, '').replace(/\s+/g, ' ').trim();
        htmlParts.push('<th>' + headerText + '</th>');
    });
    htmlParts.push('</tr></thead><tbody>');
    
    $table.find('tbody tr').each(function() {
        var rowParts = ['<tr>'];
        $(this).find('td').each(function(cellIndex) {
            var $cell = $(this);
            var cellContent = '';
            var cellClass = '';
            
            if (cellIndex === 0) {
                cellContent = $cell.text().trim();
                cellClass = 'text-center';
            } else if (cellIndex === 1) {
                var $link = $cell.find('a');
                cellContent = $link.length > 0 ? $link.text().trim() : $cell.text().trim();
                cellClass = 'text-left';
            } else if (cellIndex === 2 || cellIndex === 3 || cellIndex === 4) {
                cellContent = $cell.text().trim();
                cellClass = 'text-left';
            } else if (cellIndex === 5) {
                cellContent = $cell.find('svg').length > 0 ? 'X' : '';
                cellClass = 'text-center';
            } else if (cellIndex === 6) {
                cellContent = $cell.text().trim();
                cellClass = 'text-right';
            } else if (cellIndex === 7) {
                var dateText = $cell.text().trim();
                if (dateText && dateText.match(/^\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}$/)) {
                    dateText += ':00';
                }
                cellContent = dateText;
                cellClass = 'datetime-cell';
            }
            
            if (cellIndex === 7) {
                rowParts.push('<td class="' + cellClass + '" style="mso-number-format:@;" data-type="string">' + cellContent + '</td>');
            } else {
                rowParts.push('<td class="' + cellClass + '">' + cellContent + '</td>');
            }
        });
        rowParts.push('</tr>');
        htmlParts.push(rowParts.join(''));
    });
    
    htmlParts.push('</tbody></table></body></html>');
    
    return htmlParts.join('');
}
