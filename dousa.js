

// 要素を取得
const element = document.getElementById('show_product_menu');
// 要素を取得
const element2 = document.getElementById('product_menu');

// ホバーイベントの追加
element.addEventListener('mouseover', function() {
    element2.style.display = 'block';
});



// ホバーイベントの追加
element2.addEventListener('mouseover', function() {
    element2.style.display = 'block';
});


// ホバーイベントの追加
element2.addEventListener('mouseout', function() {
    element2.style.display = 'none';
});

