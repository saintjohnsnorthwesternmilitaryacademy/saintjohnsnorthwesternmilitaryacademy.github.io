
var secret = 
[
    "",
    "the quick brown fox jumped over the fence",
    
    "aaa bbb ccc",

    "test k 1"
];
var x = 1;
var typed;
$( document ).ready(function() {
    reset();
    for(var page = 1;page<secret.length;page++)
    {
        $( "div" ).append("<a href=\"javascript:void(0)\" class='pages' onclick=\"page(this.id);\" id=a"+page+" >"+page+"</a>");
    }
});

$( '.pages' ).on( 'click', function () { alert("hi")});

$( "body" ).keypress(function( event ) {
  if ((event.which >= 65 && event.which <= 90) ||
      (event.which >= 97 && event.which <= 122) ||
      (event.which >= 48 && event.which <= 57) ||
      (event.which == 32)){		
      typed = typed + String.fromCharCode(event.which);
      
  }
  else if (event.which == 13){
  		$("#typed").text(typed);
        var missed = levenshtein(secret[x],typed)
        
        secret[x].length - typed.length;
        
        var hit = secret[x].length - missed;
        var percent = 100*(hit / secret[x].length);

    
        $("#missed").text("missed="+missed);
        $("#hit").text("hit="+hit);
        $("#percent").text("percent="+percent);
  }
  
  if ( event.which == 13 ) {
     event.preventDefault();
  }
});
function page(id)
{
    x = parseInt(id.substring(1, id.length),10);
    reset();
}
function next()
{
    x = x + 1;
    reset(); 
}
function reset()
{
    typed = "";
    $("#lesson").text(secret[x]);
    $("#typed").text("");
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
