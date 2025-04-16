let lastSrcs; // 上一次获取到的script地址

const scriptReg = /\<script.*src=["'](?<src>[^"']+)/gm;

// 获取最新页面中的script连接

async function extractNewScripts() {
    const html = await fetch('/?_timestamp=' + Date.now()).then((resp) => {
        resp.text()
    });
    console.log('html', html)
    scriptReg.lastIndex = 0;
    let result = [];
    let match;
    while ((match = scriptReg.exec(html))) {
        result.push(match.groups.src);
    }
    return result;
}

async function needUpdate() {
    const newScripts = await extractNewScripts();
    console.log('newScripts', newScripts)
    if (!lastSrcs) {
        lastSrcs = newScripts;
        return false;
    }
    let result = false;
    if (lastSrcs.length !== newScripts.length) {
        result = true;
    }
    for (let i = 0; i < lastSrcs.length; i++) {
        if (lastSrcs[i] !== newScripts[i]) {
            result = true;
            break;
        }
    }
    lastSrcs = newScripts;
    return result;
}

const DURATION = 2000;
function autoRefresh() {
    setTimeout(async () => {
        console.log('定时器执行')
        const willUpdate = await needUpdate();
        if (willUpdate) {
            console.log('页面有更新')
            location.reload();
        }
        clearTimeout();
        autoRefresh();
    }, DURATION);
}
// autoRefresh();