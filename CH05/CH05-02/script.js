//「getElementsById」を使用して、id情報からul要素の取得
var ul  = document.getElementById('fruit_list');

/*追加するli要素をJavaScript上で作成する
「createElement(要素名)」でElementオブジェクト作成*/
var li = document.createElement("li");

//「createTextNode(テキスト情報)」で要素のテキスト作成
var text = document.createTextNode('リンゴ');


//「appendChild」を使ってテキスト情報をli要素のテキストとして追加
li.appendChild(text);
//「ul.appendChild(li)」でul要素の子要素としてli要素が追加
ul.appendChild(li);