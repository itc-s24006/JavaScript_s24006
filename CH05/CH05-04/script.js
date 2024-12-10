var time_el = document.getElementById('time_el');

/*JavaScriptで日時を扱うため、Dateというオブジェクトの初期化を行う
newが初期化を意味します*/
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
time_el.innerHTML = hour+':'+min+':'+sec;

/*自動更新
上のままでは、ブラウザをリロードしないと時刻が更新されない
メソッド「setInterval」で一定の間隔を置いて処理を繰り返すWindowオブジェクトを使用する

setInterval(繰り返したい処理, 間隔) //1秒 = 1000ms
*/
setInterval(function(){
    var time_el = document.getElementById('time_el');
  
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    time_el.innerHTML = hour+':'+min+':'+sec;
  }, 1000);
  