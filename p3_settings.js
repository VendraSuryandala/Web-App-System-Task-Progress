module.exports = `
    <!-- Settings Modal (Google Apps Script Web App URL) -->
    <div x-show="showSettings" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 overflow-y-auto" style="display: none;">
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg p-6 space-y-4" @click.away="showSettings = false">
            <div class="flex justify-between items-center border-b pb-3">
                <h3 class="font-bold text-lg"><i class="fa-solid fa-cloud text-blue-600 mr-2"></i> Google Sheets Sync Settings</h3>
                <button @click="showSettings = false" class="text-slate-400 hover:text-slate-600 font-bold">&times;</button>
            </div>
            <p class="text-xs text-slate-500">Masukkan URL Web App Google Apps Script dari Google Sheets Anda untuk mengaktifkan sinkronisasi otomatis.</p>
            <div class="space-y-3">
                <div>
                    <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Web App URL</label>
                    <input type="text" x-model="webAppUrl" placeholder="https://script.google.com/macros/s/.../exec" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm font-mono">
                </div>
                <div class="flex justify-end gap-2 pt-3 border-t">
                    <button type="button" @click="showSettings = false" class="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm">Tutup</button>
                    <button type="button" @click="saveSettings()" class="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium">Simpan URL</button>
                </div>
            </div>
        </div>
    </div>
`;
