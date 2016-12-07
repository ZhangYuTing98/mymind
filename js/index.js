var render = (function () {
    var btn = document.getElementById('btn');
    function bindEvent(e) {
        e = e || window.event;
        var tar = e.target || e.srcElement,
            tarTag = tar.tagName.toUpperCase();
        if (tarTag == 'BUTTON') {
            window.open('detail.html');
            return;
        }
    }
    return {
        init: function () {
            btn.onclick = bindEvent;
        }
    }
})();
render.init();
