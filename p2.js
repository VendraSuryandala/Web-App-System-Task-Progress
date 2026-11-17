module.exports = `
        <!-- Records Tab -->
        <div class="space-y-6">
            <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-col lg:flex-row justify-between items-center gap-4">
                <div class="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                    <div class="relative flex-grow sm:flex-grow-0 sm:w-64">
                        <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <i class="fa-solid fa-magnifying-glass text-xs"></i>
                        </span>
                        <input type="text" x-model="search" placeholder="Cari task..." class="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500">
                    </div>
                    <select x-model="filterStatus" class="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm">
                        <option value="">Semua Status</option>
                        <option value="DONE">DONE</option>
                        <option value="IN PROGRESS">IN PROGRESS</option>
                        <option value="PENDING">PENDING</option>
                    </select>
                </div>
                <div class="flex items-center gap-2 w-full lg:w-auto justify-end">
                    <button @click="openModal()" class="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition flex items-center gap-2 shadow-sm"><i class="fa-solid fa-plus"></i> Tambah Task</button>
                </div>
            </div>

            <div class="rounded-2xl overflow-hidden">
                <!-- Mobile View List -->
                <div class="block lg:hidden space-y-4 w-full">
                    <template x-for="r in filteredRecords" :key="r['TASK ID']">
                        <div class="bg-white p-4 rounded-2xl shadow-sm border-2 border-slate-200 space-y-3">
                            <div class="flex justify-between items-center">
                                <span class="font-mono text-xs font-bold text-blue-600" x-text="r['TASK ID']"></span>
                                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100" x-text="r.STATUS"></span>
                            </div>
                            <div class="font-semibold text-slate-800 text-sm" x-text="r['TASK DESCRIPTION']"></div>
                            <div class="text-xs text-slate-500 p-2.5 rounded-xl">
                                <span class="font-medium text-slate-700" x-text="r.Site"></span> • 
                                <span x-text="r.DEVICE"></span> • 
                                <span x-text="formatDate(r['DATE ISSUE'])"></span>
                            </div>
                            <div class="flex justify-between items-center pt-2 border-t border-slate-100">
                                <span class="text-xs text-slate-500 font-medium">PIC: <strong class="text-slate-700" x-text="r.PIC"></strong></span>
                                <div class="flex gap-1.5">
                                    <button @click="editRecord(r)" class="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-lg text-xs font-medium transition flex items-center gap-1"><i class="fa-solid fa-pen"></i> Edit</button>
                                    <button @click="deleteRecord(r['TASK ID'])" class="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-lg text-xs font-medium transition flex items-center gap-1"><i class="fa-solid fa-trash"></i> Hapus</button>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>

                <!-- Desktop View Table -->
                <div class="hidden lg:block bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-slate-50 text-slate-600 uppercase text-[11px] font-semibold border-b border-slate-200">
                                <th class="p-3.5">Task ID</th>
                                <th class="p-3.5">Date</th>
                                <th class="p-3.5">Site / Device</th>
                                <th class="p-3.5">Category</th>
                                <th class="p-3.5">Description</th>
                                <th class="p-3.5">PIC</th>
                                <th class="p-3.5">Status</th>
                                <th class="p-3.5 text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 text-sm">
                            <template x-for="r in filteredRecords" :key="r['TASK ID']">
                                <tr class="hover:bg-slate-50 transition">
                                    <td class="p-3.5 font-mono text-xs font-bold text-blue-600" x-text="r['TASK ID']"></td>
                                    <td class="p-3.5 text-xs text-slate-600" x-text="formatDate(r['DATE ISSUE'])"></td>
                                    <td class="p-3.5">
                                        <div class="font-semibold text-slate-800" x-text="r.Site"></div>
                                        <div class="text-[11px] text-slate-400" x-text="r.DEVICE"></div>
                                    </td>
                                    <td class="p-3.5"><span class="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-[11px] font-medium" x-text="r.CATEGORY"></span></td>
                                    <td class="p-3.5 max-w-xs"><div class="font-medium text-slate-800 truncate" x-text="r['TASK DESCRIPTION']"></div></td>
                                    <td class="p-3.5 text-xs text-slate-600" x-text="r.PIC"></td>
                                    <td class="p-3.5"><span class="px-2.5 py-1 rounded-full text-[11px] font-semibold" :class="r.STATUS === 'DONE' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'" x-text="r.STATUS"></span></td>
                                    <td class="p-3.5 text-right space-x-1">
                                        <button @click="editRecord(r)" class="p-1.5 bg-slate-50 hover:bg-blue-50 text-slate-400 hover:text-blue-600 rounded-lg transition"><i class="fa-solid fa-pen text-[11px]"></i></button>
                                        <button @click="deleteRecord(r['TASK ID'])" class="p-1.5 bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-lg transition"><i class="fa-solid fa-trash text-[11px]"></i></button>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
`;



