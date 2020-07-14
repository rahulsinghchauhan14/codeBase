var visitortime = new Date();
var visitortimezone = "GMT " + -visitortime.getTimezoneOffset()/60;
var a = "GMT 6.5".replace ( /[^\d.]/g, '' );
a = parseFloat(a);


$timezone = 7;
echo gmdate("Y/m/j H:i:s", time() + 3600*($timezone+date("I")));


-------------------------------------
This give the timezone name like " Asia/Calcutta "
Intl.DateTimeFormat().resolvedOptions().timeZone
