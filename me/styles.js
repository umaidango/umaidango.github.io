var load_blog_content = function() {
    blog.innerHTML = '';

  fetch('blog_em.html')
    .then(response => response.text())
    .then(html => {
      // HTML文字列をDOMに変換
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // idがblog_mainpageの要素を取得
      const targetElement = doc.getElementById('blog_mainpage');

  
      // blog_mainに取得した要素を挿入
      blog.appendChild(targetElement);
    })
    .catch(ex => {
      console.error('Error:', ex);
      blog.innerHTML = '<h2>コンテンツの取得に失敗しました</h2>';
    });
};

setTimeout(load_blog_content, 1000);


displayWindowSize();



// 画面サイズを取得して表示する関数
function displayWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    console.log(`画面幅: ${width}px, 画面高さ: ${height}px`);
  
    // 画面サイズに応じて処理を分岐させる例
    if (width <= 768) {
        picup_img.innerHTML = '<img src="img/mobile_header.png" alt="うまいだんごのホームページ" style="width: 100%;position: absolute;z-index: 0;left: 50%;transform: translateX(-50%);">';
        var load_blog_content = function() {
            blog.innerHTML = '';
        
          fetch('blog_em.html')
            .then(response => response.text())
            .then(html => {
              // HTML文字列をDOMに変換
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
        
              // idがblog_mainpageの要素を取得
              const targetElement = doc.getElementById('blog_mainpage');
        
          
              // blog_mainに取得した要素を挿入
              blog.appendChild(targetElement);
            })
            .catch(ex => {
              console.error('Error:', ex);
              blog.innerHTML = '<h2>コンテンツの取得に失敗しました</h2>';
            });
        };
        splash_off();
    }

  }
  
  // ページ読み込み時に一度実行
  displayWindowSize();
  
  // 画面サイズが変更された時に実行
  window.addEventListener('resize', displayWindowSize);




let slider = 0;
splash_on();

function splash_on() {
    setTimeout(() => {
        picup_img.style.animation = "0.5s blur-m";
    
    setTimeout(() => {
        splash_off();
    }, 600);

    
  }, 1000); // 1000ミリ秒 = 1秒
}

function splash_off() {

    picup_img.style.filter = "opacity(1) blur(0px)";
    button_contents.style.display = "inline-block";
     
  
        
}


const blog = document.getElementById("blog_main");


function i1(){
    slider = -1500;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
    flag = false;    
}

  
 function i2 () {
        slider = 0;
        picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
        flag = true;
    }
        



            


  
    let flag = true; // フラグ変数

    setInterval(() => {
        if (flag) {
            i1();
        } 
        else {

        i2();

        }
    }, 15000); 

function right_img(){
    slider -= 500;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
    if (slider == -2000)
        {
            slider = 0;
            picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
        }

        if (slider == 500)
            {
                slider = -1500;
                picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
            }
            
            
}


function left_img(){
    slider += 500;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";

if (slider == -2000)
{
    slider = 0;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
}

if (slider == 500)
    {
        slider = -1500;
        picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
    }
    
    
}


function next_1img()
{
    slider = 0;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
}


function next_2img()
{
    slider = -500;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
}


function next_3img()
{
    slider = -1000;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
}


function next_4img()
{
    slider = -1500;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
}

function next_5img()
{
    slider = -2000;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
}
function next_6img()
{
    slider = -2500;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
}