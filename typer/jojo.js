function p(x,y)
{
    return x === y;
}

var secret = 
[
    "",
"Hello and welcome to the typing trainer type this line correctly and slowly then press enter to begin",
"the the of of of and and and to to to a a a in in in you for or it as be on with can have this by not but",
"at from I they more will if some there what about which when one all also how many do most",
"people other time so we may like use into than up out who make because such through get work even",
"no new film just only see good water need should very any history often way well art know then first",
"would money each over world map find where much take two want important family example while he look before help",
"between go own however business great another health same study why few game might think free too right still system",
"after best must life since could now during learn around form meat air day place become number public read keep",
"part start year every field large once available down give fish human both local sure without come back general process",
"she heat specific enough long lot hand popular small though experience include job music person really although thank book early",
"end method never less play able data feel high off point type whether food here home certain economy little theory",
"tonight law put under value always body common market set bird guide provide change interest literature problem say next create",
"simple software state together control knowledge power radio course hard add company love past price size away big internet possible",
"television three understand various card difficult list mind particular real science trade consider either library likely nature fact line product",
"care group idea risk several temperature word fat force key light today until major name school top current left amount",
"level order practice research sense service area cut hot instead physical piece show society try check choose develop second tense",
"web boss short story call industry last media mental move pay sport thing against far fun house let page remember",
"term test within along answer increase oven quite single sound again community focus individual matter percent turn kind quality soil",
"ask board buy guard hold language main offer oil picture potential professional rather access almost garden international open range rate",
"reason travel variety video week above according cook determine future site alternative demand ever exercise image special case cause coast",
"TRUE whole age among bad boat country dance exam excuse grow movie record result section across already below mouse allow",
"cash class clear dry easy live period physics plan store tax cold full low old policy purchase series side subject",
"supply therefore basis boyfriend deal direction mean primary space strategy technology worth army camera fall paper rule similar stock weather",
"yet bring chance environment figure improve man mathematics model necessary positive produce search source child earth else instance maintain month",
"present program spend talk upset begin chicken close design feature head material medical purpose question rock salt tell university act",
"article birth car cost department difference dog drive essential exist federal goal green intelligence late news object scale sun support",
"tend thus audience enjoy entire fit glad income note perform profit proper remove rent return run speed strong style war",
"actual appropriate bank complex content craft due failure half inside meaning medicine middle philosophy regular reserve standard bus decide exchange",
"eye fast fire identify independent leave original position pressure reach rest serve stress watch wide advantage benefit box charge complete",
"continue frame issue night protect require significant step unless active break chemistry cycle disease energy face item metal nation negative",
"occur paint pregnant review road role room safe screen soup stay structure view visit visual write wrong account affect ago",
"approach avoid ball behind cover discipline medium prepare quick ready report rise share apartment balance bit black bottom build choice",
"gift impact machine moment shape straight tool walk white wind achieve address average believe beyond career culture decision direct event",
"excellent extra junior morning pick poor pot pretty property receive seem sign student table task unique wood classic competition condition",
"contact credit discuss egg final happy hope ice lift mix network north office overall population president private realize responsible separate",
"square stop teach unit western yes alone attempt category cigarette concern contain context cute date effect familiar fly follow link",
"official opportunity perfect post recent refer solve star toward voice bright broad capital challenge describe despite flat flight friend gain",
"length magazine maybe newspaper nice prefer prevent rich save self soon stand warm young ahead beauty brush cell couple debate",
"discover ensure exit expect fail front function heavy invest lack lake lead listen member message plant plastic reduce scene serious",
"speak spot summer taste theme track wing worry appear brain button click concept correct customer death desire explain explore express",
];
var x = 1;
var t=100;
var typed;
$( document ).ready(function() {
 reset();
  

 
});
function k()
{
    var r = ha();
    $("#codes").append("<tr><td>"+x+ "</td><td>"+r.substring(r.length-6,r.length)+"</td></tr>");
}
function getPassCode()
{
    var hours             = $hoursInput.val();
    var minutes           = $minutesInput.val();
  
    if( hours == "" ) {
      hours = "0";
    }
  
    var minutesInDecimal  = (minutes / 60).toFixed(2)
    
    var convertedHours    = parseFloat(hours);
    var convertedMinutes  = parseFloat(minutesInDecimal);
    var total             = convertedHours += convertedMinutes;
    return total + hours + convertedMinutes/convertedHours;
}





$( "body" ).keypress(function( event ) {
  if(running==true){
  if ((event.which >= 65 && event.which <= 90) ||
      (event.which >= 97 && event.which <= 122) ||
      (event.which >= 48 && event.which <= 57) ||
      (event.which == 32)){		
      typed = typed + String.fromCharCode(event.which);
      $("#arrow").append(secret[x][typed.length-1]);
      $("body").removeClass("punish");
      $("body").removeClass("praise");
      if(String.fromCharCode(event.which) != secret[x][typed.length-1])
      {
          punish();
      }
      
  }
  else if (event.which == 13){
       if( $("#percent").text()=="percent=100")
       {
           next();
       }
  		$("#typed").text("you typed: "+typed);
        var missed = levenshtein(secret[x],typed)
        
        secret[x].length - typed.length;
        
        var hit = secret[x].length - missed;
        var percent = 100*(hit / secret[x].length);

        if(percent > 70){
        $("#missed").text("missed="+missed);
        $("#hit").text("hit="+hit);
        $("#percent").text("percent="+percent);
        }
        else{
            $("#missed").text("Try again and slow down");
        }
        if(p(percent,t)){
           k();
           send();
        }
        }
  
  if ( event.which == 13 ) {
     event.preventDefault();
  }
}
});
var f="lesson";





var l="plan";

function code(unit)
{

  // A - 10; B - 11; C - 12; D - 13; E - 14; F - 15;
  var index = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

  // RGB to Hex math
  var x = Math.floor( value / 16 );
  var y = value % 16;

  // Assign the 2 characters that comprise each primary color's value
  var hex1 = index[x];
  var hex2 = index[y];

  // stringify
  return hex1.toString() + hex2.toString();
}
function praise()
{
    $("#praise").text("Congrats you passed!!! Save the code below as proof");
    $("body").addClass("praise")
}
function page(id)
{
    x = parseInt(id.substring(1, id.length),10);
    reset();
}
function send()
{
    
    praise();
    
}
function md5(string) {

 


    function RotateLeft(lValue, iShiftBits) {


        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));


    }

 


    function AddUnsigned(lX,lY) {


        var lX4,lY4,lX8,lY8,lResult;


        lX8 = (lX & 0x80000000);


        lY8 = (lY & 0x80000000);


        lX4 = (lX & 0x40000000);


        lY4 = (lY & 0x40000000);


        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);


        if (lX4 & lY4) {


            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);


        }


        if (lX4 | lY4) {


            if (lResult & 0x40000000) {


                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);


            } else {


                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);


            }


        } else {


            return (lResult ^ lX8 ^ lY8);


        }


     }

 

     function F(x,y,z) { return (x & y) | ((~x) & z); }


     function G(x,y,z) { return (x & z) | (y & (~z)); }


     function H(x,y,z) { return (x ^ y ^ z); }


    function I(x,y,z) { return (y ^ (x | (~z))); }

 


    function FF(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function GG(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function HH(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function II(a,b,c,d,x,s,ac) {


        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));


        return AddUnsigned(RotateLeft(a, s), b);


    };

 


    function ConvertToWordArray(string) {


        var lWordCount;


        var lMessageLength = string.length;


        var lNumberOfWords_temp1=lMessageLength + 8;


        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;


        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;


        var lWordArray=Array(lNumberOfWords-1);


        var lBytePosition = 0;


        var lByteCount = 0;


        while ( lByteCount < lMessageLength ) {


            lWordCount = (lByteCount-(lByteCount % 4))/4;


            lBytePosition = (lByteCount % 4)*8;


            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));


            lByteCount++;


        }


        lWordCount = (lByteCount-(lByteCount % 4))/4;


        lBytePosition = (lByteCount % 4)*8;


        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);


        lWordArray[lNumberOfWords-2] = lMessageLength<<3;


        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;


        return lWordArray;


    };

 


    function WordToHex(lValue) {


        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;


        for (lCount = 0;lCount<=3;lCount++) {


            lByte = (lValue>>>(lCount*8)) & 255;


            WordToHexValue_temp = "0" + lByte.toString(16);


            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);


        }


        return WordToHexValue;


    };

 


    function Utf8Encode(string) {


        string = string.replace(/\r\n/g,"\n");


        var utftext = "";

 


        for (var n = 0; n < string.length; n++) {

 


            var c = string.charCodeAt(n);

 


            if (c < 128) {


                utftext += String.fromCharCode(c);


            }


            else if((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            }


            else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }

 


        }

 


        return utftext;


    };

 


    var x=Array();


    var k,AA,BB,CC,DD,a,b,c,d;


    var S11=7, S12=12, S13=17, S14=22;


    var S21=5, S22=9 , S23=14, S24=20;


    var S31=4, S32=11, S33=16, S34=23;


    var S41=6, S42=10, S43=15, S44=21;

 


    string = Utf8Encode(string);

 


    x = ConvertToWordArray(string);

 


    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

 


    for (k=0;k<x.length;k+=16) {


        AA=a; BB=b; CC=c; DD=d;


        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);


        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);


        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);


        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);


        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);


        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);


        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);


        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);


        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);


        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);


        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);


        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);


        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);


        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);


        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);


        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);


        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);


        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);


        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);


        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);


        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);


        d=GG(d,a,b,c,x[k+10],S22,0x2441453);


        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);


        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);


        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);


        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);


        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);


        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);


        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);


        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);


        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);


        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);


        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);


        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);


        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);


        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);


        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);


        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);


        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);


        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);


        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);


        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);


        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);


        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);


        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);


        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);


        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);


        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);


        a=II(a,b,c,d,x[k+0], S41,0xF4292244);


        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);


        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);


        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);


        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);


        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);


        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);


        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);


        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);


        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);


        c=II(c,d,a,b,x[k+6], S43,0xA3014314);


        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);


        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);


        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);


        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);


        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);


        a=AddUnsigned(a,AA);


        b=AddUnsigned(b,BB);


        c=AddUnsigned(c,CC);


        d=AddUnsigned(d,DD);


    }

 


    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);


    return temp.toLowerCase();
}
function instruct()
{
    $('body').append('<h1 id="instruction" class="typewriter align-middle">Just type the words in the box.</h1>');
    $( "#firstname" ).remove();
    $( "#lastname" ).remove();
    $( '#login').remove();
    
    
}

function setup(fir,las)
{


        $( '#instruction').remove();

        $('body').append('<div id ="links"></div>');
        $('body').append('<div class = "jumbotron" id="bigbox"></div>');
        
        $('#bigbox').append('<p class = "" id="lesson"></p>');
        $('#bigbox').append('<p class = "" id="arrow"></p>');
        $('body').append('<div id="praise"></div>')
        
        $('body').append('<p id="typed"></p>');
        $('body').append('<hr>');
        $('body').append('<h1 id="missed"></h1>');
       // $('body').append('<br>');
        $('body').append('<h1 id="hit"></h1>');
       // $('body').append('<br>');
        $('body').append('<h1 id="percent"></h1>');

        $('body').append('<div id="reset" class="btn btn-default btn-lg" >Start from scratch</div>');
        $('body').prepend("<h2 id='les'></h2>")
        $('body').prepend('<h3>'+fir+' '+las+'</h3>');

        
        for(var page = 1;page<secret.length;page++)
        {
            $( "#links" ).append("<a href=\"javascript:void(0)\" class='pages' onclick=\"page(this.id);\" id=a"+page+" >"+page+"</a>");
        }
        $('body').append('<div id="collapse" class="btn btn-default btn-lg" >Show/Hide Codes</div>');
        
        $('#collapse').click(function(){
            $('#codebox').slideToggle('slow');
        });
        
        $('body').append('<div id="codebox"class = "collapsable" ></div>');
        
        $('#codebox').append('<table id="codes" ></table>');
        $('#codes').append("<tr><th></th><th>Completed Codes</th></tr>");
        
        $('#reset').on('click', function (e) {
            reset();
        })
        reset();
    
}
function next()
{
    if(x<secret.length){
        x = x + 1;
    }
    reset(); 
}
var running=false;
function reset()
{
    typed = "";
    $("#les").text("Lesson "+x);
    $("#lesson").text("");
  
    $("#lesson").append(secret[x] + "   <b style='border-style:solid'>↓enter↓</b>");
    $("#arrow").text("");
    $("#typed").text("");
    $("#missed").text("");
    $("#hit").text("");
    $("#percent").text("");
    $("#praise").text("");
}
function concat()
{
    l =   $("#lastname").val().toLowerCase();
    l = l[0].toUpperCase() + l.substring(1,l.length);
    running = true;
    f = $("#firstname").val().toLowerCase();
    f = f[0].toUpperCase() + f.substring(1,f.length);
    instruct();
    //setTimeout( instruct(),1000);
    
    setTimeout(setup        
    , 4000
    ,f,l);

}
function ha()
{
  return md5(f+l+secret[x]);
}
function dziemba_levenshtein(a, b){
	var tmp;
	if (a.length === 0) { return b.length; }
	if (b.length === 0) { return a.length; }
	if (a.length > b.length) { tmp = a; a = b; b = tmp; }

	var i, j, res, alen = a.length, blen = b.length, row = Array(alen);
	for (i = 0; i <= alen; i++) { row[i] = i; }

	for (i = 1; i <= blen; i++) {
		res = i;
		for (j = 1; j <= alen; j++) {
			tmp = row[j - 1];
			row[j - 1] = res;
			res = b[i - 1] === a[j - 1] ? tmp : Math.min(tmp + 1, Math.min(res + 1, row[j] + 1));
		}
	}
	return res;
}
function punish()
{
    $("body").addClass("punish");
}

function levenshtein(a, b) {
    if(a.length === 0) return b.length;
    if(b.length === 0) return a.length;
  
    var matrix = [];
  
    // increment along the first column of each row
    var i;
    for(i = 0; i <= b.length; i++){
      matrix[i] = [i];
    }
  
    // increment each column in the first row
    var j;
    for(j = 0; j <= a.length; j++){
      matrix[0][j] = j;
    }
  
    // Fill in the rest of the matrix
    for(i = 1; i <= b.length; i++){
      for(j = 1; j <= a.length; j++){
        if(b.charAt(i-1) == a.charAt(j-1)){
          matrix[i][j] = matrix[i-1][j-1];
        } else {
          matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                  Math.min(matrix[i][j-1] + 1, // insertion
                                           matrix[i-1][j] + 1)); // deletion
        }
      }
    }
  
    return matrix[b.length][a.length];
  }
