val = 1
ud = 0
formClosed = 1;
stats = [[null, 0, 0, 0, 0, 0, 0, 0],[null, 0, 3, 8, 8, 0, 0, 1],[null, 0, 0, 0, 0, 0, 0, 0],[null, 2, 11, 7, 20, 2, 0, 2],[null, 14, 57, 67, 63, 12, 12, 0],[null, 1, 17, 14, 15, 0, 0, 0],[null, 0, 0, 0, 0, 0, 0, 0],[null, 0, 1, 1, 0, 0, 0, 0],[null, 0, 0, 0, 0, 0, 0, 0],[null, 41, 95, 80, 89, 50, 38, 0],[null, 0, 6, 4, 7, 0, 0, 1],[null, 0, 0, 0, 0, 0, 0, 0],[null, 0, 0, 3, 0, 0, 0, 1],[null, 0, 0, 0, 0, 0, 0, 0],[null, 0, 43, 30, 33, 0, 0, 1],[null, 0, 0, 0, 0, 0, 0, 0],[null, 0, 0, 0, 0, 0, 0, 0],[null, 27, 86, 89, 86, 24, 19, 0],[null, 0, 0, 0, 0, 0, 0, 0],[null, 1, 20, 17, 19, 0, 0, 0],[null, 0, 1, 1, 0, 0, 0, 1]]

roster = ['Davis Lau', 'Akhil Tangutur', 'Cole Power', "William D'Arcy", 'Cole Gillis', 'Doug Dahm', 'Gustavo Gomes', 'Dylan Zhai', 'Conner Dahm', 'Francesco Sani', 'Joe Karlous', 'Beck Weber', 'Brandon Marina', 'Cade Martin', 'Connor Campbell', 'Julian Albulescu', 'Josh McCune', 'Hilir Henno', 'Aidan Schulten', 'Maxim Grigoriev', 'Stefan Vartigov']

roster_j = ['Davis Lau', 'Akhil Tangutur', 'Cole Power', "William D'Arcy", 'Cole Gillis', 'Doug Dahm', 'Gustavo Gomes', 'Dylan Zhai', 'Conner Dahm', 'Francesco Sani', 'Joe Karlous', 'Beck Weber', 'Brandon Marina', 'Cade Martin', 'Connor Campbell', 'Julian Albulescu', 'Josh McCune', 'Hilir Henno', 'Aidan Schulten', 'Maxim Grigoriev', 'Stefan Vartigov']

roster_l = ['Julian Albulescu', 'Connor Campbell', "William D'Arcy", 'Conner Dahm', 'Doug Dahm', 'Cole Gillis', 'Gustavo Gomes', 'Maxim Grigoriev', 'Hilir Henno', 'Joe Karlous', 'Davis Lau', 'Brandon Marina', 'Cade Martin', 'Josh McCune', 'Cole Power', 'Francesco Sani', 'Aidan Schulten', 'Akhil Tangutur', 'Stefan Vartigov', 'Beck Weber', 'Dylan Zhai']

roster_f = ['Aidan Schulten', 'Akhil Tangutur', 'Beck Weber', 'Brandon Marina', 'Cade Martin', 'Cole Power', 'Cole Gillis', 'Conner Dahm', 'Connor Campbell', 'Davis Lau', 'Doug Dahm', 'Dylan Zhai', 'Francesco Sani', 'Gustavo Gomes', 'Hilir Henno', 'Joe Karlous', 'Josh McCune', 'Julian Albulescu', 'Maxim Grigoriev', 'Stefan Vartigov', "William D'Arcy"]

roster_p = ['Davis Lau', 'Cole Power', 'Gustavo Gomes', 'Beck Weber', 'Connor Campbell', 'Julian Albulescu', 'Maxim Grigoriev', 'Akhil Tangutur', 'Cole Gillis', 'Doug Dahm', 'Conner Dahm', 'Francesco Sani', 'Brandon Marina', 'Josh McCune', 'Hilir Henno', 'Stefan Vartigov', "William D'Arcy", 'Dylan Zhai', 'Joe Karlous', 'Cade Martin', 'Aidan Schulten']

drop = document.getElementById("drop1")
drop.length = roster.length
sorting_order = "First Name"
roster_f.forEach(expand);

var load = 0;

document.getElementById('gform').onload = function(){
    /*Execute on every reload on iFrame*/
    load++;
    if(load > 1){
        /*Second reload is a submit*/
        alert("thank you for helping us improve the page!")
        form()
        load = 0
        iframe = document.getElementById('gform')
        iframe.src=iframe.src
    }
}


function change(){
  if(val && formClosed){
    val = 0;
    document.getElementsByClassName("blink_me")[0].hidden=1;
    document.getElementById("0").classList.add("wrapwrap");
    document.getElementById("1").classList.add("wrap");
    document.getElementById("2").classList.add("wr");
    document.getElementById("selector").hidden=0
    document.getElementById("2").classList.remove("antiwr");
    document.getElementById("1").classList.remove("antiwrap");
    document.getElementById("0").classList.remove("antiwrapwrap");
    document.getElementById("back-button").hidden=0;
  }else{
    form();
    
  }

  
}


function revert(){
  if(ud){
    document.getElementById("profile").hidden = 1
    document.getElementById("circlesss").hidden = 1
    ud=0
  }
  else if(val){
    
  }else{
    val = 1;
    document.getElementsByClassName("blink_me")[0].hidden = 0;
    document.getElementById("2").classList.add("antiwr");
    document.getElementById("1").classList.add("antiwrap");
    document.getElementById("0").classList.add("antiwrapwrap");
    document.getElementById("selector").hidden=1
    document.getElementById("back-button").hidden=1; 
  }
}



function full_update(){
  ud=1

  e = document.getElementById("drop1");
  e = e.options[e.selectedIndex].text
  value =  e.replace("'","_").replace("Karlous","Karloos").replace("Conner","Connor")
  url = ""
  if(value == "Cade Martin"){
      url = "https://ucirvinesports.com/images/2021/10/26/Cade_Martin.jpg"
  }else if(value == "Davis Lau"){
    url = "https://ucirvinesports.com/images/2022/10/12/100722_28_2_.jpg"
  }else{
    [first, last] =value.split(" ");
    url = "https://ucirvinesports.com/images/2022/10/12/"+first+"_"+last+"_2023.jpg"
  }
  
  document.getElementsByClassName("prof-img")[0].src = url
  console.log(url)
  document.getElementById("profile").hidden=0
  indexx = roster.indexOf(e)
  update(indexx)
}

old_old_index = -1
function update(index=old_old_index){
  if(ud == 1){
    old_old_index = indexx
    
    document.getElementById("circlesss").hidden = 0
    
    c1 = document.getElementById("c1")
    c2 = document.getElementById("c2")
    c3 = document.getElementById("c3")
    c4 = document.getElementById("c4")
    c5 = document.getElementById("c5")
    c6 = document.getElementById("c6")
    
    // ratioratio(c6,0.64,0.1,stats[indexx][6])
    // ratioratio(c5,0.5,0.1,stats[indexx][5])
    // ratioratio(c4,0.36,0.1,stats[indexx][4])
    // ratioratio(c1,0.64,0.5,stats[indexx][1])
    // ratioratio(c2,0.5,0.5,stats[indexx][2])
    // ratioratio(c3,0.36,0.5,stats[indexx][3])
    console.log(indexx)
    ratioratio(c1,0.64,0.5,stats[indexx][1])
    ratioratio(c2,0.64,0.1,stats[indexx][2])
    ratioratio(c3,0.5,0.1,stats[indexx][3])
    ratioratio(c4,0.36,0.1,stats[indexx][4])
    ratioratio(c5,0.36,0.5,stats[indexx][5])
    ratioratio(c6,0.5,0.5,stats[indexx][6])
  
    total = stats[indexx][1]+stats[indexx][2]+stats[indexx][3]+stats[indexx][4]+stats[indexx][5]+stats[indexx][6]
    front = 0
    back = 0
    left = 0
    right = 0
  
    if(total != 0){
      front = Math.round((stats[indexx][2]+stats[indexx][3]+stats[indexx][4])/total*10000)/100
      back = Math.round((stats[indexx][5]+stats[indexx][6]+stats[indexx][1])/total*10000)/100
      left = Math.round((stats[indexx][4]+stats[indexx][5])/total*10000)/100
      right = Math.round((stats[indexx][1]+stats[indexx][2])/total*10000)/100  
    }
    
    document.getElementById("player-stats").innerHTML = "front-row attack%:<br>"+front+"%<br>back-row attack%:<br>"+back+"%<br>left-side attack%:<br>"+left+"%<br>right-side attack%:<br>"+right+"%<br>"
  }
}


  


function expand(element, index, arr){
  drop.options[index] = new Option(element, element);  
}



function form(){
  formClosed = 1;
  document.getElementById("report1").hidden = 0
  document.getElementById("report2").hidden = 0
  
  document.getElementById("form").style["visibility"] = "hidden"
  
}

function report(){
  formClosed = 0;
  document.getElementById("report1").hidden = 1
  document.getElementById("report2").hidden = 1
  
  document.getElementById("form").style["visibility"] = ""
}


function update_drop(val){
  if(val == "Jersey Number"){
    sorting_order = val
    roster_j.forEach(expand);  
  }else if(val == "First Name"){
    sorting_order = val
    roster_f.forEach(expand);
  }else if(val == "Last Name"){
    sorting_order = val
    roster_l.forEach(expand);
    
  }else if(val == "Position"){
    sorting_order = val
    roster_p.forEach(expand);
  }else{
    roster_j = roster_j.reverse()
    roster_f = roster_f.reverse()
    roster_l = roster_l.reverse()
    roster_p = roster_p.reverse()
    update_drop(sorting_order)
  }
    
}




function ratioratio(el=null,r1=0.5,r2=0.5,text=null){
  img = document.getElementById("2")
  l = "left: "+(img.offsetLeft+img.offsetWidth*r1)+"px;"
  t = "top: "+(img.offsetHeight*r2)+"px;"
  el.style = l+t
  if(text != null){
    el.children[0].innerHTML = text  
  }
}

window.addEventListener('resize', update);
