var btn = document.getElementById('alert_btn');

/*addEventListenerメソッドを使用し、ユーザーがボタンをクリックしたときに実行したい処理を登録
EventTarget.addEventListener(イベント名, リスナー);*/
btn.addEventListener('click',function(){
    alert('ボタンがクリックされたよ');
});