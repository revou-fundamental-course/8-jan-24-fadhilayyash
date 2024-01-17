let upper = document.querySelector('#upper');
let display = document.querySelector('#display');
let display1 = document.querySelector('#display1');
let display2 = document.querySelector('#display2');
let display3 = document.querySelector('#display3');
let display4 = document.querySelector('#display4');
let display5 = document.querySelector('#display5');
let display6 = document.querySelector('#display6');
let display7 = document.querySelector('#display7');


let supscript = "2".sup();



function hitungLuas()  {
    let angka = Number(document.querySelector('#input-luas').value);
    const luas = angka * angka;
    if (angka === 0 ) {
        upperL.innerHTML = "Masukkan nilai sisi terlebih dahulu";
        display.innerText = "";
        display1.innerText = "";
        display2.innerText = "";
        display3.innerText = "";
    } else {
        upperL.innerHTML = ""
        display.innerHTML = "L = S × S"
        display1.innerHTML = "L = " + angka + " × " + angka;
        display2.innerHTML = "L = " + luas;
        display3.innerHTML = "Jadi, jika nilai sisi pada persegi adalah " + angka + " cm, maka luas persegi adalah " + luas + " cm" + supscript;
    }
}

function hitungKeliling()  {
    let angka = Number(document.querySelector('#input-keliling').value);
    const keliling = 4 * angka;
    if (angka === 0 ) {
        upperK.innerHTML = "Masukkan nilai sisi terlebih dahulu";
        display4.innerText = "";
        display5.innerText = "";
        display6.innerText = "";
        display7.innerText = "";
    } else {
        upperK.innerHTML = "";    
        display4.innerHTML = "K = 4 × S"
        display5.innerHTML = "K = " + 4 + " × " + angka;
        display6.innerHTML = "K = " + keliling;
        display7.innerHTML = "Jadi, jika nilai pada sisi persegi adalah " + angka + " cm, maka keliling persegi adalah " + keliling + " cm" + supscript;
    }
}

function resetL() {
    angka = Number(document.querySelector('#input-luas').value = "");
        upperL.innerHTML = "hasil akan terlihat di sini...";
        display.innerText = "";
        display1.innerText = "";
        display2.innerText = "";
        display3.innerText = "";
}

function resetK() {
    angka = Number(document.querySelector('#input-keliling').value = "");
        upperK.innerHTML = "hasil akan terlihat di sini...";
        display4.innerText = "";
        display5.innerText = "";
        display6.innerText = "";
        display7.innerText = "";
}
