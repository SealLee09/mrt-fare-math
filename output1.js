function doGet(e) {
    var params = e.parameter;
    var sheetUrl1 = params.sheetUrl1;
    var sheetTag1 = params.sheetTag1;
    var sheetUrl2 = params.sheetUrl2;
    var sheetTag2 = params.sheetTag2;
    var col = params.col;
    var endCol = params.endCol;
    var userid = params.userid;
  
    var SpreadSheet1 = SpreadsheetApp.openByUrl(sheetUrl1);
    var Sheet1 = SpreadSheet1.getSheetByName(sheetTag1);
  
    var i = Sheet1.getLastRow();
    var bool = 0;
    for(i;i >= Sheet1.getLastRow()-50;i--){
      var values = Sheet1.getSheetValues(i, 5, 1, 1);
      if(values == userid){
        bool = 1;
        break;
      }
    }
    if(bool==0){
      i = 2;
    }
    var row = i;
    var endRow = i;
  
    var lastRow = Sheet1.getLastRow();
    var lastCol = Sheet1.getLastColumn();
  
    var rowRange = endRow - row + 1; //因為自己也要包含所以 + 1
    var colRange = endCol - col + 1;
  
    if(rowRange>lastRow){
      rowRange = lastRow;
    }
  
    if(colRange>lastCol){
      colRange = lastCol;
    }
  
    var SpreadSheet2 = SpreadsheetApp.openByUrl(sheetUrl2);
    var Sheet2 = SpreadSheet2.getSheetByName(sheetTag2);
  
    var data = Sheet2.getSheetValues(row, col, rowRange,colRange);
    return ContentService.createTextOutput(data);
    
  }  
  function debug() {
    var a = doGet( {
      parameter : {
        sheetUrl : 'https://docs.google.com/spreadsheets/d/15C5fYgjU1WypcHxcBRlUynJ-DakgOJIAU5ahYyl2HjI/edit?usp=sharing',
        sheetTag : '工作表1',
        col: 2,
        endCol: 4,
        userid: 592
      }
    });
    Logger.log(a);
  }