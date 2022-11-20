// 删除侧边栏
$('.blog_container_aside').remove()
// 删除专栏目录
$('#toolBarBox').remove()
// 去除需要关注才能查看
$('.hide-article-box.hide-article-pos.text-center').remove()
$('#article_content').css('height', 'auto')
// 去除广告
$('.programmer1Box').remove()
$('#recommendAdBox').remove()
// 去除专栏
$('.aside-box.kind_person').remove()

setTimeout(() => {
    // 重新设置样式
    const isExistDirDom = $('#recommend-right #groupfile')[0]
    if (isExistDirDom) {
        $('#mainBox').css('width', '80%')
        $('#mainBox main').css('width', '100%')
    } else {
        $('.nodata .recommend-right').css('width', 0)
        $('#mainBox').css('width', '80%')
        $('#mainBox main').css('width', '100%')
    }

    // 隐藏右边悬浮工具按钮，只显示返回顶部按钮
    for (let i = 0; i < $('.option-box').length; i++) {
        const dataType = $($('.option-box')[i]).attr('data-type')
        if (dataType !== 'gotop') {
            $($('.option-box')[i]).hide()
        }
    }
    setTimeout(() => {
        $('.sidecolumn').hide()
        $('.directory').hide()
    }, 1000)


    // 去除需要登录才能复制代码
    $('code').css('user-select', 'text')

    // 设置背景图片
    const bgUrl = localStorage.getItem('bgUrl')
    if (bgUrl) {
        $('body').css('background', `url(${bgUrl})`)
        $('body').css('background-size', `cover`)
        console.log('设置背景图片成功！', bgUrl);
    }

}, 0)


// 净化截切版
function InjectJs(jsPath) {
    jsPath = jsPath || 'js/inject.js';
    var temp = document.createElement('script');
    temp.setAttribute('type', 'text/javascript');
    temp.src = chrome.extension.getURL(jsPath);
    temp.onload = function () {
        this.parentNode.removeChild(this);
    };
    document.head.appendChild(temp);
}
InjectJs("js/clearPaster.js");


