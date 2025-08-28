// document.getElementById('copy-btn1')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn2')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn3')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn4')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn5')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn6')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn7')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn8')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })
// document.getElementById('copy-btn9')
//     .addEventListener('click', function () {
//         const copyCount = parseInt(document.getElementById('copy-count').innerText);
//         const updateValue = copyCount + 1;
//         document.getElementById('copy-btn1').classList.add("copy-btn");
//         document.getElementById('copy-count').innerText = updateValue;
//     })


const copyBtns=document.getElementsByClassName('copy-btn');
for(let copyBtn of copyBtns)
{
    copyBtn.addEventListener('click', function(){
        const copyCount = parseInt(document.getElementById('copy-count').innerText);
        const updateValue = copyCount + 1;
        document.getElementById('copy-btn1').classList.add("copy-btn");
        document.getElementById('copy-count').innerText = updateValue;
        // 
        const title=copyBtn.parentNode.parentNode.childNodes[7].innerText;
        // console.log(title);
        navigator.clipboard.writeText(title)
        .then(() => {
          alert("✅ Text copied: " + title);
        })
        .catch(err => {
          alert("❌ Failed to copy: " + err);
        });
    })
}