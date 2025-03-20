if (window.scrollY > 0) {
    header_main.style.background = "#f0ffd9";
    header_main.style.width = "65%";
    header_main.style.minWidth = "338px";
    header_main.style.top = "15px";
} else {
    header_main.style.background = "#fff";
    header_main.style.width = "95%";
    header_main.style.top = "0px";

}


let menu_num = 0;
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒
let random_s = ["C#は神", "うまいだんご", "C言語勉強中", "UMAIDANGO"];
let randomIndex_txt = Math.floor(Math.random() * random_s.length);
let menu_bottom_c = 0;
let menu_on_b = 0;

let message_tx;

var random_txt_ss = function() {
    var randomIndex_txt = Math.floor(Math.random() * random_s.length);
    random_text.innerHTML = random_s[randomIndex_txt];

    // アニメーションをリセットするために、一度アニメーションを削除してから再度適用する
    random_text.style.animation = 'none'; // アニメーションを削除
    random_text.offsetHeight; // リフローを強制してアニメーションをリセット
    random_text.style.animation = 'huwa01 0.68s'; // アニメーションを再適用

    random_text.style.display = 'block';
};

setInterval(random_txt_ss, 5000);


var rr = function() {
    if(menu_bottom_c <= -120)
    {
        menu_bottom_c = 0;
        menu_btn_clicked();
        menu.style.bottom = "0px";

    }

    else if(menu_bottom_c >= 1)
        {
            menu_bottom_c = 0;
            menu.style.bottom = "0px";
    
        }


}
setInterval(rr, 1);


var rrr = function() {
    
    if( menu_num == 0)
    {
        menu_bottom_c = 0;
        menu.style.bottom = "0px";

    }

}

setInterval(rrr, 1);


var rrbb = function() {
    if(menu_on_b >= 120)
    {
        menu_btn_clicked();
        menu_on_b = 0;
        menu_on.style.bottom = "0px";
    }
}


setInterval(rrbb, 1);


var rrbbr = function() {
  
    if (!menu_on.buttons) {
        menu_on_b = 0;
        menu_on.style.bottom = "0px";
      }
 }


setInterval(rrbbr, 1000);


function menu_btn_clicked()
{
    if(menu_num == 0)
    {
        menu.style.height = "75vh";
        menu_btn.innerHTML = '<span>                         <svg id="menu_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>                     </span>';
        menu_num = 1;
    }

    else {
        menu.style.height = "0vh";
        menu_num = 0;
        menu_btn.innerHTML = '<span>                         <svg id="menu_img" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#5f6368"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>                     </span>';
    }

}



window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header_main.style.background = "#f0ffd9";
        header_main.style.width = "65%";
        header_main.style.minWidth = "338px";
        header_main.style.top = "15px";
    } else {
        header_main.style.background = "#fff";
        header_main.style.width = "95%";
        header_main.style.top = "0px";

    }
});



menu.onpointermove = function(event){



        if(event.buttons){
            const parentRect = this.parentElement.getBoundingClientRect();
            const thisRect = this.getBoundingClientRect();
            this.style.bottom = (parentRect.bottom - thisRect.bottom) - event.movementY * 10 + 'px';
            menu_bottom_c = (parentRect.bottom - thisRect.bottom) - event.movementY * 10;
            this.style.position = 'fixed';
            this.draggable      = false;
            this.setPointerCapture(event.pointerId);
        }
    

}



menu_on.onpointermove = function(event){



    if(event.buttons){
        const parentRect = this.parentElement.getBoundingClientRect();
        const thisRect = this.getBoundingClientRect();
        this.style.bottom = (parentRect.bottom - thisRect.bottom) - event.movementY + 'px';
        menu_on_b = (parentRect.bottom - thisRect.bottom) - event.movementY;
        this.style.position = 'fixed';
        this.draggable      = false;
        this.setPointerCapture(event.pointerId);
    }


}



img.onpointermove = function(event){
    if(event.buttons){
        this.style.left     = this.offsetLeft + event.movementX + 'px'
        this.style.top      = this.offsetTop  + event.movementY + 'px'
        this.style.position = 'fixed'
        this.draggable      = false
        this.setPointerCapture(event.pointerId)
    }
}


img.addEventListener('dblclick', function(event) {
      img.style = "";
});



/*

if (window.history && window.history.pushState) {
    // 現在のURLを取得
    const currentUrl = window.location.href;
  
    // URLから拡張子「.html」を削除
    const newUrl = currentUrl.replace(/\.html$/, '');
  
    // ブラウザの履歴を更新
    window.history.pushState(null, null, newUrl);
  }

  */


  fetch('demo.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const demoFooter = doc.getElementById('main_footer');

        if (demoFooter) {
            const currentFooter = document.getElementById('main_footer');
            if (currentFooter) {
                currentFooter.innerHTML = demoFooter.innerHTML;
            }
        }
    })
    .catch(error => {
        console.error('データの取得中にエラーが発生しました:', error);
    });

    about_link.onclick = about_link_click;

    function about_link_click(message_tx)
    {
        navigator.clipboard.writeText("https://umaidango.github.io/about");
        message_s.style.display = "block";
        message_s.textContent = "✔️Copyed🐱😸";
        
        function message_close() {
            message_s.style.display = "none";
            message_s.textContent = "";
        }
    
        
        setTimeout(message_close, 1000);
    }


