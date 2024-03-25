function sendTelegram() {
    const namaKamu = document.getElementById("namaKamu");
    const namaCowo = document.getElementById("namaCowo");
    const pesan = document.getElementById("pesan");
    
    const gabungan = 'Namakamu%3A%20' + namaKamu.value + '%0ANamacowok%3A%20' + namaCowo.value + '%0APesan%3A%20' + pesan.value;
    const token = '7133473796:AAGFT5tMJhuXx7QP9NiYKb54uEZpg_ZAGN0';
    const grup = '-4176665368';
    
    
    if(namaKamu.value && namaCowo.value && pesan.value) {
      $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
      })
    } else {
      alert("Mohon Dilengkapi Terlebih Dahulu!");
    }
};
