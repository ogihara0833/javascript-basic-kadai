const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        document.getElementById('text').textContent = 'ボタンをクリックしました！';
      }, 2000);
});


// // クリックされたときにtextcontentを使って'id text'に'クリックしました！'という文字列を代入する
// document.getElementById('text').textContent = 'ボタンをクリックしました！';

// // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
// setTimeout(() => {
//     document.getElementById('text').textContent = 'ボタンをクリックしました！';
//   }, 2000);