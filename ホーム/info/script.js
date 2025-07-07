alert('こんにちは〜。さようなら～。')
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");
const variableSpan = document.getElementById("variable");
const enterButton = document.getElementById("ent");
let num = 1;
const m2 = '<p class="c">読みたいのですね(圧)。では、</p>';
const m3 = '<a href="https://sites.google.com/sagamihara-kng.ed.jp/newspaper/%E3%83%9B%E3%83%BC%E3%83%A0">新聞のサイトへ...</a>';
const m4 = '<p class="c">ゆっくりしていってください。ではでは〜</p>';
function updateContent() {
    num++; 
    console.log(num);
    if (num === 2) { 
        n2.innerHTML += m2;
    } else if (num === 3) {
        n3.innerHTML += m3;
    } else if (num === 4) {
        n4.innerHTML += m4;
    }
    variableSpan.innerHTML = 'これインナーHTMLでやってるからハッキングもできる<br>（自由に入力できればね）';
}
enterButton.addEventListener('click', updateContent);