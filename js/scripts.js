
        
        $(document).ready(function() {
            $("#Quiz form").submit(function(event) {
              var Quiz = ["Answer1", "Answer2", "Answer3"];
        
              Quiz.forEach(function(Quiz) {
                var userInput = $("input#" + Quiz).val();
                $("." + Quiz).text(userInput);
              });
               event.preventDefault();
            });
          }); 