  function randomString(length, chars) {
      var mask = '';
      if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
      if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      if (chars.indexOf('#') > -1) mask += '0123456789';
      if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
      var result = '';
      for (var i = length; i > 0; --i) {
        var _x = parseFloat(  '0.'+( parseFloat(  Date.now().toString().slice(-3).split("").reverse().join("") ) * i ) ) * mask.length;
        if(_x > mask.length){ _x = 3 ; }
        result += mask[Math.floor( _x ) ];
      } 
      //console.log(' theRESULT '+result+ ' length : '+ length) ;
      return result;
  }

randomString(10, 'a'); // zxuspmkhfz
randomString(10, 'aA'); // FGDzvsokhK
randomString(10, 'aA#'); // RNIEAvrniR
randomString(10, 'aA#!'); // @70UNGAtn@

randomString(10, 'A'); // SQOMKJHFDS
randomString(10, 'Aa'); // KGDzvsokhK
randomString(10, 'Aa#'); // RNIEAvrnjX
randomString(10, 'Aa#!'); // +$80TLEwp+

randomString(10, '#'); // 8765443218
randomString(10, '#a'); // 2zxurolif2
randomString(10, '#aA'); // XSNIDytojX
randomString(10, '#aA!'); // +$80TLEwp+
