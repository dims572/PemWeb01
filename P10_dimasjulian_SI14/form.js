let submit = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let jam = document.getElementById("jam");
let tujuan = document.getElementById('tujuan');
let tiket = document.getElementById("tiket");
let charMax = 30;
let polaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let error = "";

submit.onclick = function() {
    if (name.value == ""){
        error = "Nama pelanggan harus di isi !";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if (name.value.length > charMax){
        error = "Maksimal 30 karakter !";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if(email.value == ""){
        error = "Email harus di isi !";
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if(!polaEmail.test(email.value)){
        error = "Penulisan email tidak benar !";
        document.getElementById("error_email").innerHTML = error;
        return false;  
    }else if(jam.value == ""){
        error = "Jam keberangkatan harus di isi !";
        document.getElementById("error_jam").innerHTML = error;
        return false;
    }else if(jam.value > 23.00){
        error = "Jam melebihi batas normal !";
        document.getElementById("error_jam").innerHTML = error;
        return false;    
    }else if(tujuan == ""){
        error = "Tujuan harus di isi !";
        document.getElementById("error_tujuan").innerHTML = error;
        return false;
    }else if(tiket.value == ""){
        error = "Tiket harus di isi !";
        document.getElementById("error_tiket").innerHTML = error;
        return false;
    }else if (tiket.value > 10){
        error = "Tiket melebihi batas normal !";
        document.getElementById("error_tiket").innerHTML = error;
        return false;
    } else {
        document.getElementById("hasil").innerHTML = "Data";
        document.getElementById("hasil_nama").innerHTML = "Nama Pelanggan : " + name.value;
        document.getElementById("hasil_email").innerHTML = "Email : " + email.value;
        document.getElementById("hasil_jam").innerHTML = "Jam Keberangkatan : " + jam.value;
        document.getElementById("hasil_tujuan").innerHTML = "Tujuan Keberangkatan : " + tujuan.value;
        document.getElementById("hasil_tiket").innerHTML = "Jumlah Tiket : " + tiket.value;
        return false;
    }
}

submit.addEventListener('click', function(){
    if (name.value == ""){
        error = "Nama pelanggan harus di isi !";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if (name.value.length > charMax){
        error = "Maksimal 30 karakter !";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if(email.value == ""){
        error = "Email harus di isi !";
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if(!polaEmail.test(email.value)){
        error = "Penulisan email tidak benar !";
        document.getElementById("error_email").innerHTML = error;
        return false;  
    }else if(jam.value == ""){
        error = "Jam keberangkatan harus di isi !";
        document.getElementById("error_jam").innerHTML = error;
        return false;
    }else if(jam.value > 23.00){
        error = "Jam melebihi batas normal !";
        document.getElementById("error_jam").innerHTML = error;
        return false;    
    }else if(tujuan == ""){
        error = "Tujuan harus di isi !";
        document.getElementById("error_tujuan").innerHTML = error;
        return false;
    }else if(tiket.value == ""){
        error = "Tiket harus di isi !";
        document.getElementById("error_tiket").innerHTML = error;
        return false;
    }else if (tiket.value > 10){
        error = "Tiket melebihi batas normal !";
        document.getElementById("error_tiket").innerHTML = error;
        return false;
    } else {
        document.getElementById("hasil").innerHTML = "Data";
        document.getElementById("hasil_nama").innerHTML = "Nama Pelanggan : " + name.value;
        document.getElementById("hasil_email").innerHTML = "Email : " + email.value;
        document.getElementById("hasil_jam").innerHTML = "Jam Keberangkatan : " + jam.value;
        document.getElementById("hasil_tujuan").innerHTML = "Tujuan Keberangkatan : " + tujuan.value;
        document.getElementById("hasil_tiket").innerHTML = "Jumlah Tiket : " + tiket.value;
        return false;
    }
})