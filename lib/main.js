function closest_date_slide(){
  var timeline = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = timeline.getSheets()[0];

  var year, month, day;
  
  var today = new Date();
  var current_date = new Date(today.getFullYear(),today.getMonth(), today.getDate());
  var slide_number;
  var slide_date;
  var last_slide_date;
 
  for(var init_row = 2; year!=="";init_row++){
    
    year = sheet.getRange(init_row, 1).getValue();
    month = sheet.getRange(init_row, 2).getValue()-1;
    day = sheet.getRange(init_row, 3).getValue();
    
    slide_date = new Date(year, month, day);
    
    if (slide_date>=current_date){
        //evals closest
        slide_number = (current_date-last_slide_date)<(slide_date-current_date)?slide_number:init_row-2;
        break;
    }
    
    last_slide_date = slide_date;
    slide_number=init_row-2;
  }
  gscache.put("slide",slide_number);
}


function doGet(e){
  var c = gscache.get("slide");
  var cb = "";
  if(e && e.parameters && e.parameters.callback){
    cb = e.parameters.callback + "(";
  }  
  if(c===null){
    c=0;
  }
  
  return ContentService.createTextOutput((cb?cb:"")+JSON.stringify({"slide" : c})+(cb?")":"")).setMimeType(ContentService.MimeType.JAVASCRIPT);
}