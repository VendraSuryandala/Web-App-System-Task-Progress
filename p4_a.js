module.exports = `
    <script>
        function itApp() {
            return {
                notification: '',
                search: '',
                filterStatus: '',
                showModal: false,
                showSettings: false,
                isEdit: false,
                webAppUrl: 'https://script.google.com/macros/s/AKfycbzr4gcOE5wXex--hxHBQcp3w6HIn_GkFdeJP3SB0284KYBAX5mHwGWixu5EhaJrDhPU/exec',
                // Link Spreadsheet asli Anda
                sheetUrl: 'https://docs.google.com/spreadsheets/d/1EDvp8HMxoSQS0uUXJPR58euXrqWe4x1eVk-TYUQwTe0/edit',
                records: [],
                form: {},
                init() {
                    this.fetchData();
                },
                async fetchData() {
                    try {
                        const response = await fetch(this.webAppUrl);
                        this.records = await response.json();
                        localStorage.setItem('it_rec', JSON.stringify(this.records));
                    } catch (err) {
                        console.error('Gagal memuat data:', err);
                        const r = localStorage.getItem('it_rec');
                        if(r) try { this.records = JSON.parse(r); } catch(e){}
                    }
                },
                calcDayProgress: function() {
                    if (!this.form['TASK ID']) return '';
                    var startDate = this.form['DATE ISSUE'];
                    if (!startDate) return '';
                    var today = new Date();
                    var start = new Date(startDate);
                    var status = this.form.STATUS;
                    var solvedDate = this.form['SOLVED DATE'];
                    if (status === 'DONE') {
                        if (startDate && solvedDate) {
                            var solved = new Date(solvedDate);
                            return Math.max(0, Math.round((solved - start) / (1000 * 60 * 60 * 24)));
                        }
                        return '';
                    } else {
                        return Math.max(0, Math.round((today - start) / (1000 * 60 * 60 * 24)));
                    }
                },
`;
