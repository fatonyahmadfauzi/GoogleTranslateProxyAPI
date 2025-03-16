function translate(text) {
  var url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pl&dt=t&q=" +
    encodeURIComponent(text);
  var response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText())[0][0][0];
}

function doGet(e) {
  return ContentService.createTextOutput(translate(e.parameter.text));
}
