import $ from 'jquery';

export default function () {
  function addReadMore() {
      const carLmt = 130;
      const readMore = "<span class='readMore'  title='Click to Show More'> ... Read More</span>";
      const readLess = "<span class='readLess' title='Click to Show Less'> Read Less</span>";

      $(".addReadMore").each(function() {
          const allstr = $(this).text();

          if (allstr.length > carLmt && window.innerWidth <= 550) {
              const firstSet = allstr.substring(0, carLmt);
              const secondHalf = allstr.substring(carLmt, allstr.length);
              const strtoadd = firstSet + "<span class='secondSection'>" +
                  secondHalf + "</span>" + readMore + readLess;

              $(this).html(strtoadd);
          }
      });

      $(".readMore, .readLess").on("click", function() {
          $(this).closest(".addReadMore")
              .toggleClass("showlesscontent showmorecontent");
      });
  }

  addReadMore();

  $(window).on("resize", function() {
    $(".readMore, .readLess").off("click").remove();
    $('.addReadMore').each(function() {
        $(this).html($(this).text());
    });

    addReadMore();
});
}
