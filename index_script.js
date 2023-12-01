document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault(); // デフォルトのフォーム送信を防止

  const image = document.getElementById('imageInput').value; // 入力された内容を取得
  const text = document.getElementById('textInput').value; // 入力された内容を取得

  // 投稿されたデータをローカルストレージに保存
  const postData = {
    image: image,
    text: text
  };
  localStorage.setItem('postData', JSON.stringify(postData));
  
  // 別のページにリダイレクト
  window.location.href = 'post_list.html';

  // 入力値をリセット
  imageInput.value = '';
  textInput.value = '';
});

function goBack() {
  // historyオブジェクトを使用して前のページに戻る
window.history.back();
}

function goHome() {
// 特定のページのURLに遷移する
window.location.href = 'home.html';
}

document.getElementById('imageInput').addEventListener('change', function(e) {
  var file = e.target.files[0];
  var imageType = /image.*/;

  if (file) { // ファイルが選択されているかを確認
    if (file.type.match(imageType)) {
      var reader = new FileReader();

      reader.onload = function(e) {
        document.getElementById('selectedImage').src = e.target.result;
        document.getElementById('placeholderImage').style.display = "none"; // file.pngを非表示にする
      }

      reader.readAsDataURL(file);
    } else {
      alert("選択されたファイルが画像ではありません。");
    }
  } else {
    document.getElementById('selectedImage').src = ""; // 選択された画像をクリア
    document.getElementById('placeholderImage').style.display = "inline"; // file.pngを表示する
  }
});
