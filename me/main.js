document.getElementById('link_content').innerHTML = '<ul><a href="/me/"><li>ホーム</li></a><a href="/me/link.html"><li>リンク集</li></a></ul>';


// 要素を取得
const element = document.getElementById('logo');
// 要素を取得
const element2 = document.getElementById('message1');

// ホバーイベントの追加
element.addEventListener('mouseover', function() {
    element2.style.display = 'block';
});


// ホバーイベントの追加
element.addEventListener('mouseout', function() {
    element2.style.display = 'none';
});

function menu_open(){
    document.getElementById('menu').style.animation = '0.3s updown-anime';
    document.getElementById('menu').style.display = 'block';
    
}

function menu_close(){
    document.getElementById('menu').style.animation = '0.3s downup-anime';
    setTimeout(() => {
    document.getElementById('menu').style.display = 'none';
    } , "280");

}



  
