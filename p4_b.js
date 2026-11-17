module.exports = `
                openModal() {
                    this.isEdit = false;
                    const num = String(this.records.length + 1).padStart(3, '0');
                    const today = new Date().toISOString().split('T')[0];
                    this.form = {
                        'TASK ID': 'IT-IR-' + num,
                        'DATE ISSUE': today,
                        'TARGET DATE': today,
                        'CATEGORY': 'FIXING',
                        'TECHNICAL CATEGORY': 'HARDWARE.NETWORK',
                        'Site': '',
                        'DEVICE': '',
                        'TASK DESCRIPTION': '',
                        'ACTION PLAN': '',
                        'ACTION TAKEN': '',
                        'STATUS': 'IN PROGRESS',
                        'CRITICAL ISSUE? (YES/NO)': 'NO',
                        'PIC': '',
                        'SOLVED DATE': '',
                        'REMARKS': '',
                        'DAY PROGRESS': '0',
                        'MONTH': 'November',
                        'YEAR': '2026',
                        'DATA QUALITY': 'OK'
                    };
                    this.showModal = true;
                },
                editRecord(r) { 
                    this.isEdit = true; 
                    let formattedRecord = { ...r };
                    
                    const toDateInput = (val) => {
                        if (!val) return '';
                        let d = new Date(val);
                        
                        // Handle format DD/MM/YYYY atau DD/MM/YY jika new Date gagal
                        if (isNaN(d.getTime()) && typeof val === 'string' && val.includes('/')) {
                            const p = val.split('/');
                            if (p.length === 3) {
                                let day = p[0].padStart(2, '0');
                                let month = p[1].padStart(2, '0');
                                let year = p[2].length === 2 ? '20' + p[2] : p[2];
                                d = new Date(year + '-' + month + '-' + day);
                            }
                        }
                        
                        if (isNaN(d.getTime())) return '';
                        
                        // Return YYYY-MM-DD
                        const y = d.getFullYear();
                        const m = ('0' + (d.getMonth() + 1)).slice(-2);
                        const day = ('0' + d.getDate()).slice(-2);
                        return y + '-' + m + '-' + day;
                    };

                    formattedRecord['DATE ISSUE'] = toDateInput(formattedRecord['DATE ISSUE']);
                    formattedRecord['TARGET DATE'] = toDateInput(formattedRecord['TARGET DATE']);
                    formattedRecord['SOLVED DATE'] = toDateInput(formattedRecord['SOLVED DATE']);

                    this.form = formattedRecord; 
                    this.form['DAY PROGRESS'] = this.calcDayProgress();
                    this.showModal = true; 
                },
                saveSettings() {
                    localStorage.setItem('it_sheets_url', this.webAppUrl);
                    this.showSettings = false;
                    this.notification = 'Google Sheets Web App URL berhasil disimpan!';
                },
                saveRecord() {
                    this.form['DAY PROGRESS'] = this.calcDayProgress();
                    let recordToSave = { ...this.form };
                    
                    // Ubah format tanggal ke DD-MM-YY sebelum dikirim ke Google Sheets
                    const toSheetDate = (val) => {
                        if (!val) return '';
                        const d = new Date(val);
                        if (isNaN(d.getTime())) return val;
                        const day = ('0' + d.getDate()).slice(-2);
                        const m = ('0' + (d.getMonth() + 1)).slice(-2);
                        const y = d.getFullYear();
                        return day + '-' + m + '-' + y;
                    };

                    recordToSave['DATE ISSUE'] = toSheetDate(recordToSave['DATE ISSUE']);
                    recordToSave['TARGET DATE'] = toSheetDate(recordToSave['TARGET DATE']);
                    recordToSave['SOLVED DATE'] = toSheetDate(recordToSave['SOLVED DATE']);

                    if(this.isEdit) {
                        const idx = this.records.findIndex(x => x['TASK ID'] === recordToSave['TASK ID']);
                        if(idx !== -1) this.records[idx] = recordToSave;
                        this.notification = 'Task diperbarui!';
                    } else {
                        this.records.unshift(recordToSave);
                        this.notification = 'Task ditambahkan!';
                    }
                    localStorage.setItem('it_rec', JSON.stringify(this.records));
                    this.showModal = false;

                    // Sync Save to Google Sheets
                    if(this.webAppUrl && this.webAppUrl.startsWith('http')) {
                        const formData = new URLSearchParams();
                        formData.append('payload', JSON.stringify({ action: 'save', record: recordToSave }));

                        fetch(this.webAppUrl, {
                            method: 'POST',
                            mode: 'no-cors',
                            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                            body: formData.toString()
                        }).then(() => {
                            this.notification = 'Task tersimpan & tersinkronisasi ke Google Sheets!';
                        }).catch(err => {
                            console.error(err);
                            this.notification = 'Tersimpan lokal, gagal sync ke Sheets.';
                        });
                    }
                },
                deleteRecord(id) {
                    if(confirm('Hapus task ' + id + '?')) {
                        this.records = this.records.filter(x => x['TASK ID'] !== id);
                        localStorage.setItem('it_rec', JSON.stringify(this.records));
                        this.notification = 'Task dihapus!';

                        // Sync Delete to Google Sheets
                        if(this.webAppUrl && this.webAppUrl.startsWith('http')) {
                            const formData = new URLSearchParams();
                            formData.append('payload', JSON.stringify({ action: 'delete', taskId: id }));

                            fetch(this.webAppUrl, {
                                method: 'POST',
                                mode: 'no-cors',
                                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                                body: formData.toString()
                            }).then(() => {
                                this.notification = 'Task terhapus dari aplikasi & Google Sheets!';
                            }).catch(err => {
                                console.error(err);
                            });
                        }
                    }
                },
                formatDate(dateStr) {
                    if (!dateStr) return '';
                    const d = new Date(dateStr);
                    if (isNaN(d.getTime())) return dateStr;
                    return ('0' + d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear().toString().slice(-2);
                },

`;




