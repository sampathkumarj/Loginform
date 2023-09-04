function user(){
    var fname=document.getElementById("sk1");
    var e1=document.getElementById("er1");
   if(fname.value==""){
        e1.innerHTML="enter a user name"
        return false
   }
  else if(fname.value!="sampathkumar"){
            e1.innerHTML="enter a valid  user name"
            return false
        }
    else{
        e1.innerHTML==""
    }    
    var pname=document.getElementById("sk2");
    var e2=document.getElementById("er2");
   if(pname.value==""){
        e2.innerHTML="enter a password"
        return false
   }
   else if(pname.value!="123"){
            e2.innerHTML="enter a valid user password"
         return false
}
  else{
    e1.innerHTML=""
  }
}
function admin(){
    var fname=document.getElementById("sk1");
    var e1=document.getElementById("er1");
  
     if(fname==""){
        e1.innerHTML="Ener a admin name"
        return false
     }
     else if(fname.value!="sampath"){
            e1.innerHTML="enter a valid  admin name"
            return false
        }
    
    else{
        e1.innerHTML=""
    }
    var pname=document.getElementById("sk2");
    var e2=document.getElementById("er2");

    if(pname.value==""){
        e2.innerHTML="enter a password"
          return false
    }
   else if(pname.value!="skj123"){
        e2.innerHTML="enter a valid admin password"
        return false
   }
  
  else{
    e2.innerHTML=""
  }
}