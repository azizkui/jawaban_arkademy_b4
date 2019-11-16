var kata ="1 adalah sebuah kata"
var katainti ="1 adalah sebuah kata"
function cek_kata(kata) {
  
  // return kata.split(/([^0-9](?!\w)\S+)/g).length;
  return kata.split(/([^0-9](\w)\S+)/g).length;
  
}
function cek_kata2(katainti) {
  return katainti.split(" ").length;
}

console.log(cek_kata(kata)+" / " + cek_kata2(katainti) );