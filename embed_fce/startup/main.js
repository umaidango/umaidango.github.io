const p1 = document.getElementById("page1");
const p2 = document.getElementById("page2");
const p3 = document.getElementById("page3"); 
const pages = [p1, p2, p3];
let currentPage = 1;

function page_next() {
  pages.forEach((page, index) => {
    page.style.display = index === currentPage ? 'inline-block' : 'none';
  });
  currentPage++;
  if (currentPage >= pages.length) currentPage = 0;
}