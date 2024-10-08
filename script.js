function start(){
    let div = document.getElementById('first-container');
    let div2 = document.getElementById('second-container');
    div.style.display = "none"
    div2.style.display = "block"
    
    console.log("start")
}

function secondanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'Тасюша'){
        console.log('yes')
        let div = document.getElementById('second-container');
        let div2 = document.getElementById('third-container');
        div.style.display = "none"
        div2.style.display = "block"
    }else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}

function thirdanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'Овчарка'){
        console.log('yes')
        let div = document.getElementById('third-container');
        let div2 = document.getElementById('fourth-container');
        div.style.display = "none"
        div2.style.display = "block"
    }else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}

function fourthanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'Чихуа-хуа'){
        console.log('yes')
        let div = document.getElementById('fourth-container');
        let div2 = document.getElementById('five-container');
        div.style.display = "none"
        div2.style.display = "block"
    } else if(selectedColor == 'Тасюша'){
        alert("Тасюша, ты тоже маленькая, но мы говорим про собачек")
    }else if(selectedColor == 'Фред'){
        alert('Да, Фред - малыш, но он не самый маленький')
    }
    
    else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}

function fiveanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'верно'){
        console.log('yes')
        let div = document.getElementById('five-container');
        let div2 = document.getElementById('six-container');
        div.style.display = "none"
        div2.style.display = "block"
    } else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}

function sixanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'верно'){
        console.log('yes')
        let div = document.getElementById('six-container');
        let div2 = document.getElementById('seven-container');
        div.style.display = "none"
        div2.style.display = "block"
    } else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}

function sevenanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'верно'){
        console.log('yes')
        let div = document.getElementById('seven-container');
        let div2 = document.getElementById('eight-container');
        div.style.display = "none"
        div2.style.display = "block"
    } else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}

function eightanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'верно'){
        console.log('yes')
        let div = document.getElementById('eight-container');
        let div2 = document.getElementById('nine-container');
        div.style.display = "none"
        div2.style.display = "block"
    } else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}


function nineanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'верно'){
        console.log('yes')
        let div = document.getElementById('nine-container');
        let div2 = document.getElementById('finish-container');
        div.style.display = "none"
        div2.style.display = "block"
    } else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}


function tenanwswer(){

    const radios = document.getElementsByName('color');
    let selectedColor;
    for (const radio of radios) {
        if (radio.checked) {
            selectedColor = radio.value;
            break;
        }
    }
    if (selectedColor == 'верно'){
        console.log('yes')
        let div = document.getElementById('ten-container');
        let div2 = document.getElementById('finish-container');
        div.style.display = "none"
        div2.style.display = "block"
    } else{
        alert("Неправильно, попробуй еще раз(")
    }

    console.log(selectedColor)
    

}