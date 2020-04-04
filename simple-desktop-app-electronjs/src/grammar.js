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
  return /^[ac]*[01]+$/.test(sequence);
}
