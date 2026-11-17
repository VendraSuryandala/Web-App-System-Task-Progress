module.exports = `
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
                        <input type="text" x-model="form['TASK ID']" class="w-full px-3 py-2 bg-slate-100 border rounded-xl text-sm font-bold text-slate-500" readonly>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Site</label>
                        <select x-model="form.Site" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">-- Pilih Site --</option>
                            <option value="OMMA">OMMA</option>
                            <option value="HO">HO</option>
                            <option value="The Raz">The Raz</option>
                        </select>
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
                            <option value="TRAINING">TRAINING</option>
                            <option value="PROJECT">PROJECT</option>
                            <option value="DESIGN">DESIGN</option>
                            <option value="DAILY CASE">DAILY CASE</option>
                            
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Technical Category</label>
                        <select x-model="form['TECHNICAL CATEGORY']" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">-- Pilih Technical Category --</option>
                            <option value="HARDWARE.SERVERS">HARDWARE.SERVERS</option>
                            <option value="HARDWARE.WORKSTATION">HARDWARE.WORKSTATION</option>
                            <option value="HARDWARE.PERIPHERALS">HARDWARE.PERIPHERALS</option>
                            <option value="HARDWARE.NETWORK">HARDWARE.NETWORK</option>
                            <option value="HARDWARE.MISC / OTHERS">HARDWARE.MISC / OTHERS</option>
                            <option value="SOFTWARE.SERVERS">SOFTWARE.SERVERS</option>
                            <option value="SOFTWARE.OS">SOFTWARE.OS</option>
                            <option value="SOFTWARE.APPLICATION">SOFTWARE.APPLICATION</option>
                            <option value="SOFTWARE.MISC / OTHERS">SOFTWARE.MISC / OTHERS</option>
                            <option value="SERVICES.EMAIL">SERVICES.EMAIL</option>
                            <option value="SERVICES.CLOUD">SERVICES.CLOUD</option>
                            <option value="SERVICES.INTERNET">SERVICES.INTERNET</option>
                            <option value="SERVICES.LICENSE">SERVICES.LICENSE</option>
                            <option value="SERVICES.MISC / OTHERS">SERVICES.MISC / OTHERS</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Device</label>
                        <select x-model="form.DEVICE" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                            <option value="">-- Pilih Device --</option>
                            <option value="Infrastruktur">Infrastruktur</option>
                            <option value="PC">PC</option>
                            <option value="Laptop">Laptop</option>
                            <option value="Tab">Tab</option>
                            <option value="Access Point">Access Point</option>
                            <option value="Router">Router</option>
                            <option value="Switch">Switch</option>
                            <option value="Monitor">Monitor</option>
                            <option value="Kabel">Kabel</option>
                            <option value="UPS">UPS</option>
                            <option value="Xero">Xero</option>
                            <option value="Server Room">Server Room</option>
                            <option value="Email">Email</option>
                            <option value="IOT">IOT</option>
                            <option value="CCTV">CCTV</option>
                            <option value="Phone">Phone</option>
                            <option value="Website">Website</option>
                            <option value="Server">Server</option>
                            <option value="Payment Gateway">Payment Gateway</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Action Plan</label>
                        <input type="text" x-model="form['ACTION PLAN']" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
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
                        <select x-model="form.PIC" required class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">-- Pilih PIC --</option>
                            <option value="Yuda">Yuda</option>
                            <option value="Vendra">Vendra</option>
                            <option value="Training">Training</option>
                            <option value="Yuda & Vendra">Yuda & Vendra</option>
                            <option value="Yuda & Training">Yuda & Training</option>
                            <option value="Vendra & Training">Vendra & Training</option>
                            <option value="Yuda, Vendra & Training">Yuda, Vendra & Training</option>
                        </select>
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
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Solved Date</label>
                        <input type="date" x-model="form['SOLVED DATE']" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Remarks</label>
                        <input type="text" x-model="form.REMARKS" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Month</label>
                        <input type="text" x-model="form.MONTH" placeholder="October" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Year</label>
                        <input type="text" x-model="form.YEAR" placeholder="2026" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Data Quality</label>
                        <input type="text" x-model="form['DATA QUALITY']" value="OK" class="w-full px-3 py-2 bg-slate-50 border rounded-xl text-sm">
                    </div>
                    <div>
                        <label class="block text-xs font-semibold text-slate-600 uppercase mb-1">Day Progress</label>
                        <div x-effect="form['DAY PROGRESS'] = calcDayProgress()">
                            <input type="text" :value="calcDayProgress()" class="w-full px-3 py-2 bg-slate-100 border rounded-xl text-sm font-bold text-blue-600" readonly>
                        </div>
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
