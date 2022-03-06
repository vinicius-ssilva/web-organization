
 var res=window.document.getElementById('res')
function clicar(){
   

    var agora= new Date()
    var hora=agora.getHours()
    var min= agora.getUTCMinutes()


res.innerHTML=(`${hora}:${min}`)


}

