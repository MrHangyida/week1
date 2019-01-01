var login = document.querySelector(".login");
var btns = document.querySelector(".btns");
var catalogue = document.querySelector("#catalogue");
var content = document.querySelector(".content");

btn.onclick = function() {
    login.classList.remove("niu");
}

btns.onclick = function(e) {
    var chil = e.target.innerHTML;
    var text = catalogue.value;
    var time = Date.now();
    var times = new Date(time).toLocaleString();
    console.log(time)
    var html = '';
    if (chil === '取消') {
        login.classList.add("niu");
        catalogue.value = '';

    } else if (chil === '保存') {
        html += ` <dl>
                     <dt>
                     <h3>分类名称：${text}</h3>
                     <p>添加时间：${times}</p>
                     </dt>
                     <dd>
                         <i class="icon iconfont icon-bianji"></i>
                         <i class="icon iconfont icon-shanchu"></i>
                     </dd>
                  </dl>`
        content.innerHTML += html;
        catalogue.value = '';
        login.classList.add("niu");
    }
}
new BScroll('section', {
    probeType: 2,
    click: true
})