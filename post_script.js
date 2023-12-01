// 検索を実行する関数
function performSearch() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const searchResults = document.getElementById('searchResults');

  // 検索結果をリセット
  searchResults.innerHTML = '';

  // 投稿コンテナからテキストを取得して検索を実行し、一致する投稿を表示
  const postContainers = document.querySelectorAll('.post-container');
  postContainers.forEach(container => {
    const postText = container.textContent.toLowerCase();
    if (postText.includes(searchTerm)) {
      container.classList.remove('hide'); // 一致する要素を表示
    } else {
      container.classList.add('hide'); // 一致しない要素を非表示
    }
  });
}

// 検索ボタンでクリックした時に検索を実行
document.getElementById('search-button').addEventListener('click', performSearch);

// Enterキーでも検索を実行する
document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});


// 投稿をクリックして関連するチャット画面を表示する
document.querySelectorAll('.post-container').forEach(post => {
  post.addEventListener('click', function() {
    const chatId = this.getAttribute('id').replace('post-', 'chat-container-');
    const chatContainer = document.getElementById(chatId);
    chatContainer.style.display = 'block';
  });
});

// チャット画面を閉じるためのイベントリスナーを追加
document.querySelectorAll('.close-chat-btn').forEach(closeBtn => {
  closeBtn.addEventListener('click', function(event) {
      event.stopPropagation(); // ボタンクリックでイベントの親要素への伝播を停止
      const chatContainer = this.closest('.chat-container');
      chatContainer.style.display = 'none';
  });
});

// ローカルストレージから投稿されたデータを取得して表示する
const postData = JSON.parse(localStorage.getItem('postData'));
const postContent = document.getElementById('postContent');

if (postData) {
  const postContainer = document.createElement('div'); // 新しい要素を作成
  postContainer.classList.add('post-container'); // クラスを追加
  postContainer.id = 'post-3'; // IDを設定
  
  const imageElement = document.createElement('img');
  imageElement.src = postData.image;
  imageElement.style.maxWidth = '100%';
  postContent.appendChild(imageElement);

  const textElement = document.createElement('p');
  textElement.textContent = postData.text;
  postContent.appendChild(textElement);

} else {
  // 投稿データがない場合の処理
  const noDataMessage = document.createElement('p');
  noDataMessage.textContent = '投稿された内容はありません';
  postContent.appendChild(noDataMessage);
}

function goBack() {
    // historyオブジェクトを使用して前のページに戻る
  window.history.back();
}

function goHome() {
  // 特定のページのURLに遷移する
  window.location.href = 'home.html';
}