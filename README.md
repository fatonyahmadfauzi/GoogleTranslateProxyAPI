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

### **3️⃣ Deploy sebagai Web App**

1. Klik **"Deploy"** > **"New deployment"**
2. Pilih **"Web App"**
3. Pada bagian **"Who has access"**, pilih **"Anyone"**
4. Klik **"Deploy"**
5. Salin **URL Web App** yang diberikan

---

# 🛠️ **Cara Menggunakan API di Frontend**

Setelah mendapatkan URL Web App, Anda bisa menggunakan `fetch()` untuk menerjemahkan teks dari **English** → **Polish** di frontend.

```javascript
async function translateText(text) {
  const apiUrl = "YOUR_GOOGLE_APPS_SCRIPT_URL?text=" + encodeURIComponent(text);

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("Terjadi kesalahan!");

    const translatedText = await response.text();
    console.log("Terjemahan:", translatedText);
    return translatedText;
  } catch (error) {
    console.error("Error:", error);
    return text;
  }
}

// Contoh penggunaan
translateText("Good morning").then(console.log);
```

## ⚡ **Keuntungan Menggunakan Proxy Ini**

✅ **Melewati Rate Limit Google Translate API**  
✅ **Tidak membutuhkan API Key**  
✅ **Dapat digunakan langsung di Frontend tanpa backend**

🚀 **Coba setup sekarang dan nikmati terjemahan tanpa batas!**
