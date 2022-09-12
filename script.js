let view = document.getElementById('view')

function inputValue(value) {
    view.innerHTML += value;
}

function tinh() {
    let result = eval(view.innerHTML);
    console.log(result)
    view.innerHTML = result;
}

function xoa() {
    view.innerHTML = "";
}