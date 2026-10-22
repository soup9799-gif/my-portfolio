function filterProjects(type, btn) {
  var buttons = document.getElementsByClassName('filter-btn');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = 'filter-btn';
  }
  btn.className = 'filter-btn on';
  var projects = document.getElementsByClassName('project');
  var shown = 0;
  for (var j = 0; j < projects.length; j++) {
    var p = projects[j];
    var show = (type == 'all' || p.getAttribute('data-type') == type);
    p.style.display = show ? 'grid' : 'none';
    if (show) {
      p.className = (shown % 2 == 1) ? 'project reverse' : 'project';
      shown++;
    }
  }
  document.getElementById('empty').style.display = (shown == 0) ? 'block' : 'none';
}
window.onscroll = function () {
  var h = document.getElementById('header');
  h.className = (window.scrollY > 30) ? 'header scrolled' : 'header';
};
function moveBlog(dir) {
  var t = document.getElementById('blog-track');
  t.scrollBy({ left: dir * 290, behavior: 'smooth' });
}
function countText(el) {
  document.getElementById('count').innerHTML = el.value.length + '/500';
}
