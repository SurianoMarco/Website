$(document).ready(function(){
  $('.submit').click(function(event){
    console.log('Clicked this button')


    var name = $('.subject').val()
    var email = $('.email').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

if (email.length > 5 && email.includes('@')&& email.includes('.')) {
  statusElm.append('<div>Email is valid</div>')
} else {
  event.preventDefault()
  statusElm.append('<div>Email is not valid</div>')
}

if (name.length >= 2){
  statusElm.append('<div>Name is valid</div>')

} else {
  event.preventDefault()
  statusElm.append('<div>Name is not valid</div>')
}

if (message.length >= 5){
  statusElm.append('<div>Message is valid</div>')
} else {
  event.preventDefault()
  statusElm.append('<div>Message is not valid</div>')
}



  })
})




(function($){
  $(document).ready(function(){
    var $els = $('.Graph'); // Note this must be moved to within event handler if dynamically adding elements - I've placed it for performance reasons 
    var $window = $(window);
    var  Num = 0
    
    $window.on('scroll', function(){
      
      $els.each(function(){ // Iterate over all skillbars
        var $this = $(this); 
        if($window.scrollTop() > $this.offset().top - $window.height()){ // Check if it's in viewport
        
      
      if (Num==0){
          $('.bar').each(function(i){  
            var $bar = $(this);
            $(this).append('<span class="count"></span>')
            setTimeout(function(){
              $bar.css('width', $bar.attr('data-percent'));      
            }, i*100);
          });
        
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).parent('.bar').attr('data-percent')
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now) +'%');
                }
            });
        });
      Num = Num +1;
      }




        }
      });
    
    });
  });
}(jQuery));



 





    


  
 







/* PRINT LETTERS LENGTH
const logo = document.querySelectorAll("#logo path");

for(let i = 0; i<logo.length;i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}
*/