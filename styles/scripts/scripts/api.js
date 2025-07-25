// Fungsi untuk mengambil data statistik
async function fetchInternetStats() {
    try {
        // Simulasi API call
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    active_users: Math.floor(4875321984 + (Math.random() * 100000)),
                    data_sent_pb: (245.7 + (Math.random() * 0.5)).toFixed(1),
                    internet_penetration: (63.2 + (Math.random() * 0.3)).toFixed(1),
                    regions: {
                        asia: Math.floor(49.4 + (Math.random() * 0.5)),
                        europe: Math.floor(16.8 + (Math.random() * 0.3)),
                        north_america: Math.floor(7.6 + (Math.random() * 0.2)),
                        south_america: Math.floor(10.5 + (Math.random() * 0.3)),
                        africa: Math.floor(11.5 + (Math.random() * 0.3)),
                        oceania: Math.floor(4.2 + (Math.random() * 0.1))
                    },
                    hourly_traffic: Array.from({length: 24}, () => Math.floor(Math.random() * 100) + 50),
                    last_updated: new Date().toISOString()
                });
            }, 800); // Simulasi delay jaringan
        });

        return response;

    } catch (error) {
        console.error("Error fetching internet stats:", error);
        return null;
    }
}

// Fungsi untuk mengambil artikel
async function fetchArticles() {
    try {
        // Simulasi API call untuk artikel
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve([
                    {
                        title: "Perkembangan AI dalam Analisis Data",
                        summary: "Artikel tentang bagaimana kecerdasan buatan mengubah cara kita menganalisis data besar...",
                        date: "15 Juni 2023"
                    },
                    {
                        title: "Keamanan Siber di Era 5G",
                        summary: "Pandangan mendalam tentang tantangan keamanan baru yang muncul dengan jaringan 5G...",
                        date: "10 Juni 2023"
                    },
                    {
                        title: "Masa Depan Cloud Computing",
                        summary: "Bagaimana komputasi awan akan berkembang dalam 5 tahun ke depan...",
                        date: "5 Juni 2023"
                    }
                ]);
            }, 1000);
        });

        return response;

    } catch (error) {
        console.error("Error fetching articles:", error);
        return [];
    }
}

// Fungsi untuk subscribe newsletter
async function subscribeNewsletter(email) {
    try {
        // Simulasi API call
        const response = await new Promise(resolve => {
            setTimeout(() => {
                resolve({ success: true, message: "Terima kasih telah berlangganan!" });
            }, 500);
        });

        return response;

    } catch (error) {
        console.error("Error subscribing:", error);
        return { success: false, message: "Gagal berlangganan. Silakan coba lagi." };
    }
}
