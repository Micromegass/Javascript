


function calculate_date(dt2,dt1) {

  var dt2 = new Date(document.getElementById("form1").value);
  var dt1 = new Date(document.getElementById("form1").value);
  res = Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
  alert(res);

  // var diffDays = (date2 - date1) / (1000 * 60 * 60 * 24) | 0;
  // var res2 = res/1000*60*60*24;

  //document.getElementById("result").innerHTML = date1-date2;

}
