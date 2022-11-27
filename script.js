document.write("<center><font size=+3>");
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 5 && hr < 12) {
        document.write("<img class='sun' data-aos='fade-up' src='sun.png'><body style='background: linear-gradient(#f4bde1,#abe4ff,#98d5f2,#6bcdea,#40c6e3);color: #fff;text-align: center;position:fixed;margin-left:auto; margin-right: auto;display: flex;justify-content: center; align-items: center;'><h3 class='day'>Good Morning!</h3><div id='txt'></div>");
        document.write(new Date().toLocaleDateString()); 
        var myDate = new Date(); 
        var myDay = myDate.getDay();         
        var weekday = ['Sunday', 'Monday', 'Tuesday', 
        
        'Wednesday', 'Thursday', 'Friday', 'Saturday' 
        
        ]; 
        
        document.write("<br>"+weekday[myDay]); 
        
    }  else if (hr >= 12 && hr <= 16) {
        document.write("<img class='sun' data-aos='fade-up' src='sun.png'>️<body style='background: linear-gradient(#3e6fd6,#1450a3,#94acff,#6ba6f9,#1ca2e3);color: #fff;text-align: center;position:fixed;margin-left:auto;margin-right: auto;display: flex;justify-content: center; align-items: center;'><h3 class='day'>Good Afternoon!</h3><div id='txt'></div>");
        document.write(new Date().toLocaleDateString()); 
        var myDate = new Date(); 
        var myDay = myDate.getDay(); 
        var weekday = ['Sunday', 'Monday', 'Tuesday', 
        
        'Wednesday', 'Thursday', 'Friday', 'Saturday' 
        
        ]; 
        
        document.write("<br>"+weekday[myDay]); 
        
    } else if (hr >= 12 && hr <= 19) {
      document.write("<img class='sun' data-aos='fade-up' src='sun.png'><body style='background: linear-gradient(#FFE577,#FEC051,#FF8866,#FD6051,#392033);color: #fff;text-align: center;position:fixed;margin-left:auto;margin-right: auto;display: flex;justify-content: center; align-items: center;'><h3 class='day'>Good Evening!</h3><div id='txt'></div>");
      document.write(new Date().toLocaleDateString());  
      var myDate = new Date(); 
      var myDay = myDate.getDay(); 
      
      var weekday = ['Sunday', 'Monday', 'Tuesday', 
      
      'Wednesday', 'Thursday', 'Friday', 'Saturday' 
      
      ]; 
      
      document.write("<br>"+weekday[myDay]); 
      
      
      
     } else { 
        document.write("<img class='moon' data-aos='fade-down' src='full-moon.png'><body style='background: linear-gradient(#0B1026,#161B36,#242B4B,#35475F,#102849,#061D37);color: #fff;text-align: center;position:fixed;  margin-left:auto;margin-right: auto; display: flex;justify-content: center; align-items: center;'><h3 class='night'>Good Night!</h3><div id='txt'></div>");
        document.write(new Date().toLocaleDateString());    
        var myDate = new Date(); 
        var myDay = myDate.getDay(); 
        
        var weekday = ['Sunday', 'Monday', 'Tuesday', 
        
        'Wednesday', 'Thursday', 'Friday', 'Saturday' 
        
        ]; 
        
        document.write("<br>"+weekday[myDay]); 
        
    }
    document.write("</font></center>");
 
 
 function startTime()
 {
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();
 // add a zero in front of numbers<10
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('txt').innerHTML=h+":"+m+":"+s;
 t=setTimeout('startTime()',500);
 }
 function checkTime(i)
 {
 if (i<10)
 {
 i="0" + i;
 }
 return i;
 }
 

        