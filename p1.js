module.exports = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Omma IT Task Progress</title>
    <link rel="icon" type="image/png" href="logo-favicon.png">
    <script src="https://cdn.tailwindcss.com"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased min-h-screen flex flex-col" x-data="itApp()">
    <header style="background-color: #285355;" class="text-white shadow-md sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div class="flex items-center gap-4">
                <img src="logo-omma.png" alt="Omma Logo" class="h-10 w-auto">
                <div>
                    <h1 class="text-xl font-bold">Omma IT Task Progress</h1>
                    <p class="text-xs text-emerald-200 opacity-80">Google Sheets Records Sync Enabled</p>
                </div>
            </div>
            <a :href="sheetUrl" target="_blank" class="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm transition flex items-center gap-2 shadow-sm" title="Open Google Spreadsheet">
                <i class="fa-solid fa-file-excel"></i> <span class="hidden sm:inline">Spreadsheet</span>
            </a>
        </div>
    </header>
    <main class="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        <template x-if="notification">
            <div class="mb-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-sm flex justify-between items-center">
                <span x-text="notification"></span>
                <button @click="notification = ''" class="font-bold">&times;</button>
            </div>
        </template>
`;


