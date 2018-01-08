function chirp(n) {
  // FIX ME
  let chirpStr = "chirp ";
  if (n === 0) {
    return;
  }
  if (n === 1) {
    return chirpStr;
  } else {
    return chirpStr + chirp(--n);
  }
}

$(document).ready(function () {
  $("#result").html(chirp(3));
});