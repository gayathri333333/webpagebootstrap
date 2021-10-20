function addMore() {
    let name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('error').innerHTML = "please enter value";
    }
    else {
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent = name;

        let a = document.createElement('a');
        a.textContent ="delete"
        a.href = "javascript:void(0)";
        a.className = "remove";
        li.appendChild(a);








        let pos = box.firstElementChild;
        if (pos == null) {
            box.append(li);

        } else {
            box.insertBefore(li, pos);
        }


    }




    let btn = document.querySelector('ul');
    btn.addEventListener('click', function (e) {
        let box = document.getElementById('box');
        let li = e.target.parentNode;
        box.removeChild(li);
    })


    let btnClear = document.querySelector('button');
    let inputs = document.querySelectorAll('input');

    btnClear.addEventListener('click', () => {
        inputs.forEach(input => input.value = "");


    })



}

    