let login, password;
login= prompt('Who is it?','');
if (login==='Admin'){
    password=prompt('Password?','');
    if(password==='The Master'){
        alert("Welcome!")
    }
    else if(password===''||password===null){
        alert('Canceled')
    }
    else{
        alert('Wrong password')
    }
}
else if(login===''||login===null){
    alert("Canceled")
}
else{
    alert("I don't know you")
}