document.write("<center><font size=+3>");
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        document.write("<body style='background: linear-gradient(#f4bde1,#abe4ff,#98d5f2,#6bcdea,#40c6e3);text-align: center;position:fixed;margin-left:auto; margin-right: auto;display: flex;justify-content: center; align-items: center;'><h3>Good Morning!</h3>");
    }  else if (hr >= 12 && hr <= 16) {
        document.write("<img class='sun' src='sun.png'>️<body style='background: linear-gradient(#3e6fd6,#1450a3,#94acff,#6ba6f9,#1ca2e3);color: #fff;text-align: center;position:fixed;margin-left:auto;margin-right: auto;display: flex;justify-content: center; align-items: center;'><h3 class='day'>Good Afternoon!</h3>");
    } else if (hr >= 12 && hr <= 19) {
      document.write("<img class='sun' src='sun.png'><body style='background: linear-gradient(#FFE577,#FEC051,#FF8866,#FD6051,#392033);color: #fff;text-align: center;position:fixed;margin-left:auto;margin-right: auto;display: flex;justify-content: center; align-items: center;'><h3 class='day'>Good Evening!</h3>");
     } else { 
        document.write("<img class='moon' src='full-moon.png'><body style='background: linear-gradient(#0B1026,#161B36,#242B4B,#35475F,#102849,#061D37);color: #fff;text-align: center;position:fixed;  margin-left:auto;margin-right: auto;   display: flex;  justify-content: center; align-items: center;'><h3 class='night'>Good Night!</h3>");
    }
    document.write("</font></center>");
 