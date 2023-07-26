var tab = $(".tab-button");
var content = $(".tab-content");
for (let i = 0; i < tab.length; i++) {
  tab.eq(i).on("click", function () {
    tabShow(i);
  });
}
function tabShow(k) {
  tab.removeClass("orange");
  tab.eq(k).addClass("orange");
  content.removeClass("show");
  content.eq(k).addClass("show");
}
