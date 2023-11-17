$(".list").click(function (e) {
  tabShow(e.target.dataset.id);
});

function tabShow(k) {
  var tab = $(".tab-button");
  var content = $(".tab-content");
  tab.removeClass("orange");
  tab.eq(k).addClass("orange");
  content.removeClass("show");
  content.eq(k).addClass("show");
}
