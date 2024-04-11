var serves=0
function s1(){
    serves=0
    document.getElementById("user").placeholder="message"
    document.getElementById("user").focus()
}
function s2(){
    serves=1
    document.getElementById("user").placeholder="phone number"
    document.getElementById("user").focus()
}
function s3(){
    serves=2
    document.getElementById("user").placeholder="message"
    document.getElementById("user").focus()
}
function create(){
    a=document.getElementById("user").value
    b=document.getElementById("re")
    if(serves==1){
        b.innerHTML="https://wa.me/" + a
    }else if(serves==0){
        b.innerHTML="https://wa.me/?text=" + a
    }else{
        p=prompt("phone number")
        b.innerHTML="https://wa.me/" + p + "?text=" + a
    }
}