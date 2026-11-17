const fs = require('fs');
const modalHTML = `
    <!-- Modal Form -->
    <div x-show="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 overflow-y-auto" style="display: none;">
        <div class="bg-white rounded-2xl shadow-xl w-full max-w-xl p-6 space-y-4">
            <div class="flex justify-between items-center border-b pb-3">
                <h3 class="font-bold text-lg" x-text="isEdit ? 'Edit Task' : 'Tambah Task Baru'"></h3>
                <button @click="showModal = false" class="text-slate-400 hover:text-slate-600 font-bold">&times;</button>
            </div>
            <form @submit.prevent="saveRecord()" class="space-y-3">
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Task ID</label>
                        <input type="text" x-model="form['TASK ID']" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Site</label>
                        <input type="text" x-model="form.Site" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Date Issue</label>
                        <input type="date" x-model="form['DATE ISSUE']" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Target Date</label>
                        <input type="date" x-model="form['TARGET DATE']" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Category</label>
                        <select x-model="form.CATEGORY" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                            <option value="FIXING">FIXING</option>
                            <option value="MAINTENANCE">MAINTENANCE</option>
                            <option value="REQUEST">REQUEST</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Device</label>
                        <input type="text" x-model="form.DEVICE" placeholder="Switch / PC" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                </div>
                <div>
                    <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Task Description</label>
                    <textarea x-model="form['TASK DESCRIPTION']" rows="2" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Action Taken</label>
                        <input type="text" x-model="form['ACTION TAKEN']" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">PIC</label>
                        <input type="text" x-model="form.PIC" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Status</label>
                        <select x-model="form.STATUS" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                            <option value="DONE">DONE</option>
                            <option value="IN PROGRESS">IN PROGRESS</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Critical Issue?</label>
                        <select x-model="form['CRITICAL ISSUE? (YES/NO)']" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                            <option value="NO">NO</option>
                            <option value="YES">YES</option>
                        </select>
                    </div>
                </div>
                <div class="flex justify-end gap-2 pt-3 border-t">
                    <button type="button" @click="showModal = false" class="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm">Batal</button>
                    <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-xl text-sm font-medium" x-text="isEdit ? 'Simpan' : 'Tambah'"></button>
                </div>
            </form>
        </div>
    </div>
`;
fs.appendFileSync('C:\\Users\\itomm\\.cline\\data\\workspaces\\chat\\it-support-checklist-app\\index.html', modalHTML, 'utf8');
console.log('Appended modal');
