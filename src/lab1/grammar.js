function lab1() {
    let sequence = document.getElementById('sequence__input').value;
    let answ = isBelong(sequence);
    let p_alert;
    let message;

    if (document.getElementById('form__alert') == null)
    {
        let p = document.createElement("p");
        p.className = "form__alert alert alert-info";
        p.id = "form__alert";
        document.getElementById('sequence__input').after(p);
    }

    p_alert = document.getElementById("form__alert");
    if (answ)
    {
        message = "Цепочка принадлежит языку"
        p_alert.className = "form__alert alert alert-success";
    }
    else
    {
        message = "Цепочка не принадлежит языку"
        p_alert.className = "form__alert alert alert-danger";
    }

    p_alert.innerHTML = message;
}


function isBelong(sequence) {
    if (/^(10)*(01)+$/.test(sequence)) {
        let counter_01 = 0;
        let counter_10 = 0;

        let seq_arr = sequence.split('');
        for (let i = 0; i < seq_arr.length-1; i+=2) {
            if ((seq_arr[i] + seq_arr[i+1]) == '01')
                counter_01++;
            if ((seq_arr[i] + seq_arr[i+1]) == '10') 
                counter_10++; 
        }
        if ((counter_10 + 2) == counter_01)
            return true;
    }
    return false;
}
