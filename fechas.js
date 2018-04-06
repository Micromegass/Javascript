


function calculate_date() {

  var date1 = new Date(document.getElementById("form1").value);
  var date2 = new Date(document.getElementById("form1").value);
  var diffDays = (date2 - date1) / (1000 * 60 * 60 * 24) | 0;
  var res = Math.floor(Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate()) - Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate()))
  var res2 = res/(1000*60*60*24)

  //document.getElementById("result").innerHTML = date1-date2;
  alert(res2)

}
