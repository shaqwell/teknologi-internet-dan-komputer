// Fungsi utama untuk mengatur semua interaksi
document.addEventListener('DOMContentLoaded', function() {
    // Set tahun di footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Load data pertama kali
    loadData();

    // Atur interval pembaruan data
    setInterval(loadData, 10000); // Update setiap 10 detik

    // Tangani form newsletter
    document.getElementById('newsletterForm').addEventListener('submit', async function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        const button = this.querySelector('button');
        
        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Mengirim...';
        
        const result = await subscribeNewsletter(email);
        
        button.disabled = false;
        button.textContent = 'Berlangganan';
        
        alert(result.message);
        if (result.success) {
            this.reset();
        }
    });

    // Load artikel
    loadArticles();
});

// Fungsi untuk memuat data statistik
async function loadData() {
    const stats = await fetchInternetStats();
    if (!stats) return;

    // Update statistik real-time
    document.getElementById('activeUsers').textContent = 
        stats.active_users.toLocaleString();
    document.getElementById('dataSent').textContent = 
        stats.data_sent_pb + " PB";
    document.getElementById('internetPenetration').textContent = 
        stats.internet_penetration + "%";
    document.getElementById('usersChange').textContent = 
        `Update: ${new Date(stats.last_updated).toLocaleTimeString()}`;
    document.getElementById('covidImpact').textContent = 
        `+${(Math.random() * 0.5 + 8.5).toFixed(1)}% sejak pandemi`;

    // Update charts
    window.dailyChart.data.datasets[0].data = stats.hourly_traffic;
    window.dailyChart.update();

    window.regionalChart.data.datasets[0].data = [
        stats.regions.asia,
        stats.regions.europe,
        stats.regions.north_america,
        stats.regions.south_america,
        stats.regions.africa,
        stats.regions.oceania
    ];
    window.regionalChart.update();
}

// Fungsi untuk memuat artikel
async function loadArticles() {
    const articles = await fetchArticles();
    const container = document.getElementById('articles-container');
    
    if (articles.length === 0) {
        container.innerHTML = '<p class="text-danger">Gagal memuat artikel. Silakan refresh halaman.</p>';
        return;
    }

    container.innerHTML = articles.map(article => `
        <div class="card mb-3">
            <div class="card-body">
                <h5>${article.title}</h5>
                <small class="text-muted">${article.date}</small>
                <p class="mt-2">${article.summary}</p>
                <a href="#" class="btn btn-sm btn-primary">Baca Selengkapnya</a>
            </div>
        </div>
    `).join('');
}

// Fungsi untuk menangani loading state
function setLoading(elementId, isLoading) {
    const element = document.getElementById(elementId);
    if (isLoading) {
        element.classList.add('loading');
    } else {
        element.classList.remove('loading');
    }
}
