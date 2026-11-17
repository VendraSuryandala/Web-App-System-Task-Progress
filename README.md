# IT Support Daily Checklist & Task Progress App

Aplikasi web interaktif untuk **Daily Checklist & Task Progress IT Support** yang terintegrasi dengan Google Sheets (`Records`).

## Fitur & Integrasi Google Sheets:
1. **Daily Routine Checklist**:
   - Pengecekan rutin harian (Server, Backup, Internet, Ruijie Cloud, Printer).
   - Tersimpan otomatis di browser (`localStorage`).

2. **Task Records & Real-Time Google Sheets Sync**:
   - Form input & edit lengkap sesuai kolom Google Sheets.
   - **Google Sheets Cloud Sync**: Aplikasi dapat terhubung langsung ke Google Sheets Anda secara real-time via **Google Apps Script Web App**.
   - **Export CSV**: Alternatif export manual ke CSV.

---

## 🛠️ Cara Setup Real-Time Sync ke Google Sheets Anda:

1. **Buka Google Sheets** Anda (tab `Records`).
2. Di menu atas, klik **Extensions** (Ekstensi) > **Apps Script**.
3. Paste kode berikut ke editor Apps Script:
   ```javascript
   function doPost(e) {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Records");
     var data = JSON.parse(e.postData.contents);
     if (data.action === "save") {
       var rows = sheet.getDataRange().getValues();
       var headers = rows[0];
       var taskIdCol = headers.indexOf("TASK ID");
       var rowIndex = -1;
       for (var i = 1; i < rows.length; i++) {
         if (rows[i][taskIdCol] === data.record["TASK ID"]) {
           rowIndex = i + 1;
           break;
         }
       }
       var rowData = headers.map(h => data.record[h] || "");
       if (rowIndex > -1) {
         sheet.getRange(rowIndex, 1, 1, rowData.length).setValues([rowData]);
       } else {
         sheet.appendRow(rowData);
       }
       return ContentService.createTextOutput(JSON.stringify({"status": "success"})).setMimeType(ContentService.MimeType.JSON);
     }
     return ContentService.createTextOutput(JSON.stringify({"status": "invalid"})).setMimeType(ContentService.MimeType.JSON);
   }
   ```
4. Klik **Deploy** > **New deployment** > Pilih jenis **Web app**:
   - **Execute as**: Me (`[Email Anda]`)
   - **Who has access**: Anyone (`Siapa saja`)
5. Klik **Deploy** dan salin **Web App URL** yang dihasilkan.
6. Buka aplikasi `index.html`, klik ikon **Gear (Pengaturan)** di sudut kanan atas header, paste URL Web App tersebut, dan klik **Simpan URL**.
7. Selesai! Setiap kali Anda menambah atau mengedit task di aplikasi, data akan otomatis masuk dan tersinkronisasi ke Google Sheets Anda.
