
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        document.getElementById("main_header").style.boxShadow = '0px 0px 4px 1px #ddd';
        document.getElementById("main_header").style.width = '150px';
        document.getElementById("main_header").style.borderRadius = '10px';
        document.getElementById("umaidango_txt").style.display = 'none';
    } else {
        document.getElementById("main_header").style.boxShadow = 'none';
        document.getElementById("main_header").style.width = '100%';
        document.getElementById("main_header").style.borderRadius = '0px';
        document.getElementById("umaidango_txt").style.display = 'inline-block';
    }
  });


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
    document.getElementById('close_b2').style.display = 'block';
    
}

function menu_close(){
    document.getElementById('menu').style.animation = '0.3s downup-anime';
    document.getElementById('close_b2').style.display = 'none';
    setTimeout(() => {
    document.getElementById('menu').style.display = 'none';
    } , "280");

}



