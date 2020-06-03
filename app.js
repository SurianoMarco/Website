
$(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });




/* PRINT LETTERS LENGTH
const logo = document.querySelectorAll("#logo path");

for(let i = 0; i<logo.length;i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
*/