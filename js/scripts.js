
        

          $(document).ready(function() 
          {
          var A1=document.forms["form-control"]["answer"].value;
          var A2=document.forms["form-control"]["answer2"].value;
          var A3=document.forms["form-contol"]["answer3"].value;
          var A4=document.forms["form-control"]["answer4"].value;
        
          var Quiz=[0];
          if(A1=="Livewire")
          {
           marks=marks+5;
           }
          if(A2=="storing numbers,dates,or other values")
          {
           marks=marks+5;
           }
          if(A3=="Javascript syntax is loosely based on java's")
          {
           marks=marks+5;
          }
          if(A4=="Yes")
          marks=marks+5;
          {
           
             alert("your score is:"+marks);
          
          }
      