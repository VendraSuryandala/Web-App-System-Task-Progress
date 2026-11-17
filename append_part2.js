const fs = require('fs');

const part2 = `
        <!-- Checklist Tab -->
        <div x-show="activeTab === 'checklist'" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div class="flex justify-between items-center border-b pb-4">
                <h2 class="text-lg font-bold text-slate-900"><i class="fa-solid fa-list-check text-blue-600 mr-2"></i> Daily Routine Checklist</h2>
                <button @click="resetChecklist()" class="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-lg">Reset</button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <template x-for="(item, index) in checklist" :key="index">
                    <label class="flex items-start gap-3 p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-200 cursor-pointer">
                        <input type="checkbox" x-model="item.done" @change="saveChecklist()" class="mt-1 w-4 h-4 text-blue-600 rounded">
                        <div class="flex-grow">
                            <div class="text-sm font-medium text-slate-800" :class="item.done ? 'line-through text-slate-400' : ''" x-text="item.task"></div>
                            <input type="text" x-model="item.note" @input.debounce="saveChecklist()" placeholder="Catatan..." class="mt-1.5 w-full text-xs px-2 py-1 bg-white border border-slate-200 rounded">
                        </div>
                    </label>
                </template>
            </div>
        </div>

        <!-- Records Tab -->
        <div x-show="activeTab === 'records'" class="space-y-6">
            <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center">
                <div class="flex gap-3">
                    <input type="text" x-model="search" placeholder="Cari task / PIC..." class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                    <select x-model="filterStatus" class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                        <option value="">Semua Status</option>
                        <option value="DONE">DONE</option>
                        <option value="IN PROGRESS">IN PROGRESS</option>
                    </select>
                </div>
                <div class="flex gap-2">
                    <button @click="exportCSV()" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-medium"><i class="fa-solid fa-file-excel mr-1"></i> Export CSV</button>
                    <button @click="openModal()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium"><i class="fa-solid fa-plus mr-1"></i> Tambah Task</button>
                </div>
            </div>

            <div class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-slate-50 text-slate-600 uppercase text-[11px] font-semibold border-b">
                            <th class="p-3">Task ID</th>
                            <th class="p-3">Date</th>
                            <th class="p-3">Site / Device</th>
                            <th class="p-3">Category</th>
                            <th class="p-3">Description</th>
                            <th class="p-3">PIC</th>
                            <th class="p-3">Status</th>
                            <th class="p-3 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y text-sm">
                        <template x-for="r in filteredRecords" :key="r['TASK ID']">
                            <tr class="hover:bg-slate-50">
                                <td class="p-3 font-mono text-xs font-bold text-blue-600" x-text="r['TASK ID']"></td>
                                <td class="p-3 text-xs" x-text="r['DATE ISSUE']"></td>
                                <td class="p-3"><div class="font-semibold" x-text="r.Site"></div><div class="text-xs text-slate-400" x-text="r.DEVICE"></div></td>
                                <td class="p-3"><span class="px-2 py-0.5 bg-slate-100 rounded text-xs" x-text="r.CATEGORY"></span></td>
                                <td class="p-3 max-w-xs"><div class="font-medium truncate" x-text="r['TASK DESCRIPTION']"></div></td>
                                <td class="p-3 text-xs" x-text="r.PIC"></td>
                                <td class="p-3"><span class="px-2 py-1 rounded-full text-xs font-semibold" :class="r.STATUS === 'DONE' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'" x-text="r.STATUS"></span></td>
                                <td class="p-3 text-right space-x-1">
                                    <button @click="editRecord(r)" class="p-1.5 bg-slate-100 hover:bg-blue-50 text-slate-600 rounded"><i class="fa-solid fa-pen text-xs"></i></button>
                                    <button @click="deleteRecord(r['TASK ID'])" class="p-1.5 bg-slate-100 hover:bg-rose-50 text-slate-600 rounded"><i class="fa-solid fa-trash text-xs"></i></button>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
`;

fs.appendFileSync('C:\\Users\\itomm\\.cline\\data\\workspaces\\chat\\it-support-checklist-app\\index.html', part2, 'utf8');
console.log('Appended part2');
