switch(url=document.documentURI,fixedUrl=/^https?:\/\/(.*)\/?\??.*$/g.exec(url)[1],fixedUrl){case"azmayandeh.ir/Forms/Student/OnlineExam.php":secs=7200;let e=document.querySelectorAll("form[name=form1]")[0].children[0].querySelectorAll("tbody")[0];if(e.innerHTML.includes("saveAnsTest"))for(let t=0;t<e.children.length;t++){let r=e.children[t].querySelectorAll("tbody")[0];for(let e=0;e<r.children.length;e++){let t=r.children[e].querySelectorAll("input")[0];t.value==/saveAnsTest\(this\.value,QCode\d*\.value,\d*,\d,(\d),\d,\d\)/g.exec(t.outerHTML)[1]&&(t.parentElement.style="background-color: green;border-radius: 20px;color: black;")}}break;case"azmayandeh.ir/Forms/Student/StudentPage.php":let t=document.createElement("Li");t.setAttribute("style","background: rgb(127,127,127);"),t.innerHTML='<a href="https://net-vpn.app"><span class="ca-icon">B</span><div class="ca-content"><h2 class="ca-main" style="color: rgb(255,255,255) ;">فیلترشکن</h2><h3 class="ca-sub">برای استفاده</h3></div></a>',document.getElementsByClassName("ca-menu")[0].insertBefore(t,document.getElementsByClassName("ca-menu")[0].firstChild),t=document.createElement("Li"),t.setAttribute("style","background: rgb(127,127,127);"),t.innerHTML='<a href="https://hrc.rf.gd/proxy"><span class="ca-icon">D</span><div class="ca-content"><h2 class="ca-main" style="color: rgb(255,255,255); font-family: sans-serif;">Proxy</h2><h3 class="ca-sub">(امنیت کم, رمز وارد نکنید)</h3></div></a>',document.getElementsByClassName("ca-menu")[0].insertBefore(t,document.getElementsByClassName("ca-menu")[0].firstChild);break;case"azmayandeh.ir/Forms/Student/ViewResults.php":var inter=setInterval((()=>{try{"25741993"==document.querySelectorAll(".datagrid")[0].children[0].children[1].children[0].children[0].innerText&&(clearInterval(inter),setInterval((()=>{try{document.querySelectorAll(".datagrid")[1].querySelectorAll("tbody").forEach((e=>{let t=e.children[0].children[4];"-"!=t.innerText&&20!=t.innerText&&(t.innerText=20)}))}finally{}}),10))}finally{}}),10)}
