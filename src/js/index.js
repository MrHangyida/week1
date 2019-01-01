var login = document.querySelector(".login");
var btns = document.querySelector(".btns");
var catalogue = document.querySelector("#catalogue");
var content = document.querySelector(".content");
init();

function init() {
    ajax({
        url: '/render',
        success: function(data) {
            render(data.data);
        }
    })

    function render(data) {
        var html = '';
        data.map(function(i, v) {
            html += `<dl>
                         <dt>
                         <h3>分类名称：${i.name}</h3>
                         <p>添加时间：${i.time}</p>
                         </dt>
                         <dd>
                             <i class="icon iconfont icon-bianji"></i>
                             <i class="icon iconfont icon-shanchu"></i>
                         </dd>
                     </dl>`
        })
        content.innerHTML += html;
    }
}

btn.onclick = function() {
    login.classList.remove("niu");
}

btns.onclick = function(e) {
    var chil = e.target.innerHTML;
    var text = catalogue.value;
    var time = Date.now();
    var times = new Date(time).toLocaleString();
    var html = '';
    if (chil === '取消') {
        login.classList.add("niu");
        catalogue.value = '';

    } else if (chil === '保存') {
        ajax({
            url: `/create?name=${text}&time=${times}`,
            success: function(data) {
                content.innerHTML = '';
                init();
            }
        })
        catalogue.value = '';
        login.classList.add("niu");
    }
}
new BScroll('section', {
    probeType: 2,
    click: true
})