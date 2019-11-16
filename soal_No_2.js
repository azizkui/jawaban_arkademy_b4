

function username(user) {
    fuser = /^[A-Z]{7,}/;
 console.log(fuser.test(user));
 
}

username("ARKDEMY");
username("GALIH");

function password(pw) {
    fpassword = /[0-9]{3}[*][a-z]{3}$/;
 console.log(fpassword.test(pw));
 
}
password("111*sss");
password("123*try");
