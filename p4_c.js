module.exports = `
                exportCSV() {
                    if(this.records.length === 0) { alert('Tidak ada data'); return; }
                    const headers = Object.keys(this.records[0]);
                    let csv = headers.join(',') + '\\n';
                    this.records.forEach(r => {
                        csv += headers.map(h => {
                            let v = r[h] || '';
                            if(typeof v === 'string' && (v.includes(',') || v.includes('"'))) v = '"' + v.replace(/"/g, '""') + '"';
                            return v;
                        }).join(',') + '\\n';
                    });
                    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'IT_Support_Records.csv';
                    a.click();
                    URL.revokeObjectURL(url);
                    this.notification = 'CSV berhasil di-export!';
                },
                get filteredRecords() {
                    return this.records.filter(r => {
                        const s = this.search.toLowerCase();
                        const matchS = !s || Object.values(r).some(v => String(v).toLowerCase().includes(s));
                        const matchSt = !this.filterStatus || r.STATUS === this.filterStatus;
                        return matchS && matchSt;
                    });
                }
            }
        }
    </script>
</body>
</html>
`;
