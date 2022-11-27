document.write("<center><font size=+3>");
    var day = new Date();
    var hr = day.getHours();
    if (hr >= 0 && hr < 12) {
        document.write("<div class='sun'></div><body style='background: linear-gradient(#f4bde1,#abe4ff,#98d5f2,#6bcdea,#40c6e3);text-align: center;position:fixed;margin-left:auto; margin-right: auto;display: flex;justify-content: center; align-items: center;'>Good Morning!");
    }  else if (hr >= 12 && hr <= 17) {
        document.write("<div class='sun'><div class='eye'></div><div class='mouth'></div><div class='ball'></div></div><body style='background: linear-gradient(#3e6fd6,#1450a3,#94acff,#6ba6f9,#1ca2e3);color: #fff;text-align: center;position:fixed;margin-left:auto;margin-right: auto;display: flex;justify-content: center; align-items: center;'><div class='text'>Good Afternoon!</div>");
    } else if (hr >= 12 && hr <= 19) {
      document.write("<div class='sun'><div class='eye'></div><div class='mouth'></div><div class='ball'></div></div><body style='background: linear-gradient(#FFE577,#FEC051,#FF8866,#FD6051,#392033);color: #fff;text-align: center;position:fixed;margin-left:auto;margin-right: auto;display: flex;justify-content: center; align-items: center;'>Good Evening!");
     } else { 
        document.write("<div class='moon'><div class='eye'></div><div class='mouth'></div><div class='ball'></div></div><body style='background: linear-gradient(#0B1026,#161B36,#242B4B,#35475F,#102849,#061D37);color: #fff;text-align: center;position:fixed;  margin-left:auto;margin-right: auto;   display: flex;  justify-content: center; align-items: center;'>Good Night!");
    }
    document.write("</font></center>");
 