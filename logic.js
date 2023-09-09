let TIME = 5000;
const RESULT_TIME = 3000;
let CUR_INTERVAL = null;
let CUR_TIMER = null;

function setTime() {
    let sec = parseInt(document.getElementById('sec').value) * 1000;
    console.log(sec);
    if (sec <= RESULT_TIME || CUR_INTERVAL == null) {
        sec = TIME;
    }
    TIME = sec;
    document.getElementById('sec').value = sec / 1000;
    if (CUR_INTERVAL) {
        prepare();
    }
};

function setNumbers() {
    if (CUR_TIMER) {
        clearTimeout(CUR_TIMER);
    }
    const l1 = document.getElementById('n1');
    const l2 = document.getElementById('n2');
    const res = document.getElementById('res');
    const n1 = parseInt(Math.random() * 10000);
    let n2 = parseInt(Math.random() * 10000);
    while (n2 >= n1) {
        n2 = parseInt(Math.random() * 10000);
    }
    l1.innerText = n1;
    l2.innerText = n2;
    res.innerText = '?'
    CUR_TIMER = setTimeout((n1, n2) => {
        const res = document.getElementById('res');
        res.innerText = n1 - n2;
    }, TIME, n1, n2);
};

function prepare() {
    setNumbers();
    if (CUR_INTERVAL) {
        clearInterval(CUR_INTERVAL);
    }
    CUR_INTERVAL = setInterval(() => {
        setNumbers();
    }, TIME + RESULT_TIME);
};

document.addEventListener("DOMContentLoaded", () => {
    prepare();
});
