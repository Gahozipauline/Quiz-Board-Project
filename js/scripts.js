
        

          Function Quiz()
          {
          var Answer1=document.forms["Answer"].value;
          var Answer2=document.forms["Answer2"].value;
          var Answer3=document.forms["Answer3"].value;
          var Answer4=document.forms["Answer4"].value;
        
          var Quiz=[Answer1,Answer2,Answer3,Answer4];
          if(Answer1=="Livewire")
          {
           marks=marks+5;
           }
          if(Answer2=="storing numbers,dates,or other values")
          {
           marks=marks+5;
           }
          if(Answer3=="Javascript syntax is loosely based on java's")
          {
           marks=marks+5;
          }
          if(Answer4=="Yes")
          {
           
             alert("your score is:"+marks);
          
          }
      