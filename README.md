# Google Translate Proxy API (Google Apps Script)

## 📌 Tujuan

Google Translate API gratis memiliki **rate limit** yang dapat menyebabkan error **429 Too Many Requests** jika digunakan terlalu sering.  
Dengan **Google Apps Script**, kita dapat membuat **proxy server** yang memungkinkan penggunaan Google Translate **tanpa batasan kuota per detik**.

---

## 🚀 **Langkah-langkah Setup**

### **1️⃣ Buat Google Apps Script Baru**

1. **Buka Google Apps Script:**  
   ➝ [Klik di sini untuk membuka Apps Script](https://script.google.com)
2. **Klik `New Project` (Proyek Baru)**

---

### **2️⃣ Tambahkan Kode Google Translate Proxy**

1. **Hapus semua kode di editor**
2. **Salin kode berikut ke dalam editor:**

```javascript
function translate(text) {
  var url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pl&dt=t&q=" +
    encodeURIComponent(text);
  var response = UrlFetchApp.fetch(url);
  return JSON.parse(response.getContentText())[0][0][0];
}

function doGet(e) {
  return ContentService.createTextOutput(translate(e.parameter.text));
}
```
