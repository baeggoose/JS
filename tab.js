var tab = $(".tab-button");
var content = $(".tab-content");
for (let i = 0; i < tab.length; i++) {
  tab.eq(i).on("click", function () {
    tab.removeClass("orange");
    tab.eq(i).addClass("orange");
    content.removeClass("show");
    content.eq(i).addClass("show");
  });
}
