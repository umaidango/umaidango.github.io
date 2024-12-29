



const blog = document.getElementById("blog_main");
var load_blog_content = function(){
blog.innerHTML = '<iframe style="border: none;width: 100%;overflow: visible;height: 1600px;" src="blog_em.html">';
}
setTimeout(load_blog_content, 1000);

var i1 = function() {
    let slider = 0;
    picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
    }

    var i2 = function() {
        let slider = 1000;
        picup_img_f.style ="display: flex; transform: translate3d(" + slider + "px, 0px, 0px); transition:transform 1100ms;";
        
    }

    setTimeout(i1, 100);
    setTimeout(i2, 100);
