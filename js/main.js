function insert(num) {
    let myString = document.form.textView.value;
    let lastChar = myString[myString.length - 1];
    if (myString.length < 30) {
        if (!isNaN(lastChar) || lastChar === "not nul" || !isNaN(num)) {
            document.form.textView.value = myString + num;
        }
        else if (num != lastChar) {
            document.form.textView.value = myString.replace(lastChar, num);
        }
    }
}

function equal() {
    let sum = document.form.textView.value;
    if (sum) {
        document.form.textView.value = eval(sum);
    }
}
function clean() {
    document.form.textView.value = "";
}

function back() {
    let exp = document.form.textView.value;
    document.form.textView.value = exp.substring(0, exp.length - 1);
}