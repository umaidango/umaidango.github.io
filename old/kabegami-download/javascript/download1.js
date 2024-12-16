function downloadFile() {
    // 画像ファイルのURL
    const imageUrl = '/down00001.png';
  
    // ダウンロードリンクを使ってダウンロードを実行
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = 'kabegami1.jpg';
    a.click();
  }