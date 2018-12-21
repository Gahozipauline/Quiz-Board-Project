
        
        $(document).ready(function() {
            $("#Quiz form").submit(function(event) {
              var Quiz = ["Answer1", "Answer2", "Answer3","Answer4"];
        
              Quiz.forEach(function(Quiz) {
                var userInput = $("input#" + Quiz).val();
                $("." + Quiz).text(userInput);
              });
             var Quiz= $("#Answer-showing").toggle();
             var Quiz=$("#Answer-hidden").toggle();
               event.preventDefault();
            });
          }); 