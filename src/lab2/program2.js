let g_result = false;
let g_message = ""


function state_Q(result, inp_seq) {
    g_message = "Q";
    if (inp_seq[0] == 'y')
        state_A(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == 'z')
        state_Z(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_A(result, inp_seq) {
    g_message = "A";
    if (inp_seq[0] == '1')
        state_Y(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_Z(result, inp_seq) {
    g_message = "Z";
    if (inp_seq[0] == '0')
        state_E(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_E(result, inp_seq) {
    g_message = "E";
    if (inp_seq[0] == '0')
        state_F(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == '1')
        state_Y(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_F(result, inp_seq) {
    g_message = "F";
    if (inp_seq.length == 0)
        g_result = true;
    else
        return;
}

function state_Y(result, inp_seq) {
    g_message = "Y";
    if (inp_seq[0] == '1')
        state_V(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == 'x')
        state_H(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_V(result, inp_seq) {
    g_message = "V";
    if (inp_seq[0] == '1')
        state_F(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == 'x')
        state_H(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq.length == 0)
        g_result = true;
    else
        return;
}

function state_H(result, inp_seq) {
    g_message = "H";
    if (inp_seq[0] == '1')
        state_Y(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == '0')
        state_G(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_G(result, inp_seq) {
    g_message = "G";
    if (inp_seq[0] == '1')
        state_K(result.concat(inp_seq[0]), inp_seq.slice(1));
    if (inp_seq[0] == '0')
        state_F(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq.length == 0)
        g_result = true;
    else
        return;
}

function state_K(result, inp_seq) {
    g_message = "K";
    if (inp_seq[0] == '1')
        state_L(result.concat(inp_seq[0]), inp_seq.slice(1));
    else
        return;
}

function state_L(result, inp_seq) {
    g_message = "L";
    if (inp_seq[0] == '1')
        state_F(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq[0] == 'x')
        state_H(result.concat(inp_seq[0]), inp_seq.slice(1));
    else if (inp_seq.length == 0)
        g_result = true;
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
        message = "Цепочка принадлежит языку <br> Состояние " + g_message;
        p_alert.className = "form__alert alert alert-success";
    }
    else
    {
        message = "Цепочка не принадлежит языку <br> Состояние " + g_message;
        p_alert.className = "form__alert alert alert-danger";
    }

    p_alert.innerHTML = message;
}

function do_it() {
    let inp_seq = document.getElementById('sequence__input').value;
    state_Q([], inp_seq.split(''));
    display(g_result);
    g_result = false;
}