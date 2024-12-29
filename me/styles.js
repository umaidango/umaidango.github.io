let slider = 0;
splash_on();

function splash_on() {
    setTimeout(() => {
        picup_img.style.animation = "1s blur-m";
    
    setTimeout(() => {
        splash_off();
    }, 1000);

    
  }, 1000); // 1000ミリ秒 = 1秒
}

function splash_off() {

    const myElement = document.querySelector('#picup');
    myElement.classList.remove("picup");
    picup_img.style.filter = "opacity(1) blur(0px)";
    button_contents.style.display = "inline-block";
     
  
        
}


const blog = document.getElementById("blog_main");

var load_blog_content = function() {
  fetch('blog_em.html')
    .then(response => response.text())
    .then(html => {
      // HTML文字列をDOMに変換
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // idがblog_mainpageの要素を取得
      const targetElement = doc.getElementById('blog_mainpage');

      // blog_mainに取得した要素を挿入
      blog.innerHTML = targetElement;
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

setTimeout(load_blog_content, 1000);

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

