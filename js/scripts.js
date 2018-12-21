
        

          $(document).ready(function() 
          {
        var A1=parseInt($("input:radio[name=answer1]:checked").val());
        var A2=parseInt($("input:radio[name=answer2]:checked").val());
        var A3=parseInt($("input:radio[name=answer3]:checked").val());
        var A4=parseInt($("input:radio[name=answer4]:checked").val());
        
          var result=[0];
          if(A1==="Livewire")
          {
           marks+=5;
           }
          if(A2==="storing numbers,dates,or other values")
          {
           marks+=5;
           }
          if(A3==="Javascript syntax is loosely based on java's")
          {
           marks+=5;
          }
          if(A4==="Yes")
          {
            marks+=5;
          }
           
             //alert("your score is:" + marks);
             $().show();
             $("#display").text("Your result is:" + marks);
             event.preventDefault();
          }
      