let out_result = false;

function state_Q(result, inp_seq) {
    if (inp_seq[0] == 'y')
        state_Y(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == 'z')
        state_Z(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_Y(result, inp_seq) {
    if (inp_seq[0] == '1')
        state_V(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_Z(result, inp_seq) {
    if (inp_seq[0] == '0') {
        state_E(result.concat(inp_seq[0]), inp_seq.slice(1));
        state_Y(result.concat(inp_seq[0]), inp_seq.slice(1));
    }
    else
        return;
}

function state_V(result, inp_seq) {
    if (inp_seq[0] == 'x') {
        state_Z(result.concat(inp_seq[0]), inp_seq.slice(1));
        state_E(result.concat(inp_seq[0]), inp_seq.slice(1));
    }
    else if (inp_seq[0] == '1')
        state_end(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_E(result, inp_seq) {
    if (inp_seq[0] == '1')
        state_Y(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == '0')
        state_end(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_end(result, inp_seq) {
    if (inp_seq.length == 0)
        out_result = true;
    else
        return;
}

function display(result) {
    let answ = result
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

function do_it() {
    let inp_seq = document.getElementById('sequence__input').value;
    state_Q([], inp_seq.split(''));
    display(out_result);
    out_result = false;
}