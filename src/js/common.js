// vue调试
Vue.config.devtools = true;

// baseURL
var baseUrl = "http://";

// 动态添加confront.css
// var link = document.createElement("link");
// link.rel = "stylesheet";
// link.type = "text/css";
// link.href = "//at.alicdn.com/t/font_828450_r3835lsp2ji.css";
// document.head.appendChild(link);

// 获取URL参数
function getQueryString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return r[2]; 
    return null; 
}