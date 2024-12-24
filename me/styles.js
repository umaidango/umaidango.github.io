const blog = document.getElementById("blog_main");
var load_blog_content = function(){
blog.innerHTML = '<iframe style="border: none;width: 100%;overflow: visible;height: 1600px;" src="blog_em.html">';
}
setTimeout(load_blog_content, 1000);

