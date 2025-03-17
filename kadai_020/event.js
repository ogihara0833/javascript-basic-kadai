// documentオブジェクトとgetElementbyidメソッドを使って、"btn"idのHTML要素を取得し、btn定数に代入する
const btn = document.getElementById('btn');

// ボタンがクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {


    // クリックされたときにtextcontentを使って'id text'に'クリックしました！'という文字列を代入する
    document.getElementById('text').textContent = 'ボタンをクリックしました！';
});