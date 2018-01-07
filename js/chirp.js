function chirp(n){
  // FIX ME
  if (n === 0){
    return;
  }
  let chirpStr = "chirp ";
  return chirpStr.repeat(n);
  chirp(--n);
}

$(document).ready(function(){
  $("#result").html(chirp(3));
});