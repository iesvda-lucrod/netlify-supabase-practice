document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://chhfpnafjajancuedvpi.supabase.co', {
        headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoaGZwbmFmamFqYW5jdWVkdnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjM5ODYsImV4cCI6MjA1MjkzOTk4Nn0.lo-uZsUYOpkmh3mUTDwb6_DgsUmBZb7-84UEnEjKt3A',
            'Authorization': 'Bearer your-supabase-api-key'
        }
    });

    const data = await response.json();
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
