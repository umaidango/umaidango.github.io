const blog = document.getElementById("blog_main");
var load_blog_content = function(){
blog.innerHTML = '<iframe style="border: none;width: 100%;overflow: visible;height: 1600px;" src="blog_em.html">';
}
setTimeout(load_blog_content, 1000);


var slide_image = function() {
let slider = 10;
picup_img.style ="transform: translate3d(" + "slider" + "px, 0px, 0px); transition:transform 1100ms;";
  
setInterval(slide_image, 800);