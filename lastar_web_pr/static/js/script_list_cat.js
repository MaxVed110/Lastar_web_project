const button_vis = document.querySelector('.trigger')
const tree = document.querySelector('.discover')
const button_vis1 = document.querySelector('.trigger1')
const tree1 = document.querySelector('.discover1')
const button_vis2 = document.querySelector('.trigger2')
const tree2 = document.querySelector('.discover2')


function logMenuVisible() {
    tree.classList.toggle('tree-in')
}

function logMenuVisible1() {
    tree1.classList.toggle('tree-in')
}

function logMenuVisible2() {
    tree2.classList.toggle('tree-in')
}

button_vis.addEventListener('click', logMenuVisible); button_vis1.addEventListener('click', logMenuVisible1);
button_vis2.addEventListener('click', logMenuVisible2)