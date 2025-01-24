// Supabase configuration
const supabaseUrl = 'https://chhfpnafjajancuedvpi.supabase.co/rest/v1/example_table';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoaGZwbmFmamFqYW5jdWVkdnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjM5ODYsImV4cCI6MjA1MjkzOTk4Nn0.lo-uZsUYOpkmh3mUTDwb6_DgsUmBZb7-84UEnEjKt3A';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

// DOM Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const logOutButton = document.getElementById('logOut');
const fetchDataButton = document.getElementById('fetchData');
const dataContainer = document.getElementById('data-container');
const dataDisplay = document.getElementById('data');

// Sign Up Functionality
signUpButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Sign-up successful! Please check your email to confirm your account.');
    }
});

// Log In Functionality
logInButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Log in successful!');
        toggleAuthState(true);
    }
});

// Log Out Functionality
logOutButton.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Log out successful!');
        toggleAuthState(false);
    }
});

// Fetch Data Functionality
fetchDataButton.addEventListener('click', async () => {
    const { data, error } = await supabase.from('example_table').select('*');
    if (error) {
        dataDisplay.innerHTML = `Error: ${error.message}`;
    } else {
        dataDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
});

// Toggle UI Based on Authentication State
const toggleAuthState = (isLoggedIn) => {
    document.getElementById('auth-container').style.display = isLoggedIn ? 'none' : 'block';
    dataContainer.style.display = isLoggedIn ? 'block' : 'none';
};

// Check User Authentication State on Page Load
supabase.auth.getUser().then(({ data: { user } }) => {
    toggleAuthState(!!user);
});

/*
document.getElementById('fetchData').addEventListener('click', async () => {
    const response = await fetch('https://chhfpnafjajancuedvpi.supabase.co/rest/v1/example_table', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoaGZwbmFmamFqYW5jdWVkdnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjM5ODYsImV4cCI6MjA1MjkzOTk4Nn0.lo-uZsUYOpkmh3mUTDwb6_DgsUmBZb7-84UEnEjKt3A',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoaGZwbmFmamFqYW5jdWVkdnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjM5ODYsImV4cCI6MjA1MjkzOTk4Nn0.lo-uZsUYOpkmh3mUTDwb6_DgsUmBZb7-84UEnEjKt3A'
        }
    });

    const data = await response.json();
    console.log("Received", data);
    const container = document.getElementById('dataContainer');
    container.innerHTML = JSON.stringify(data, null, 2);
});
*/
/*
const supabaseUrl = 'https://chhfpnafjajancuedvpi.supabase.co/rest/v1/example_table';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNoaGZwbmFmamFqYW5jdWVkdnBpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczNjM5ODYsImV4cCI6MjA1MjkzOTk4Nn0.lo-uZsUYOpkmh3mUTDwb6_DgsUmBZb7-84UEnEjKt3A';
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signUpButton = document.getElementById('signUp');
const logInButton = document.getElementById('logIn');
const logOutButton = document.getElementById('logOut');
const fetchDataButton = document.getElementById('fetchData');
const dataContainer = document.getElementById('data-container');
const dataDisplay = document.getElementById('data');

// Sign Up Functionality
signUpButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Sign-up successful! Please check your email to confirm your account.');
    }
});

// Log In Functionality
logInButton.addEventListener('click', async () => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Log in successful!');
        toggleAuthState(true);
    }
});

// Log Out Functionality
logOutButton.addEventListener('click', async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
        alert(`Error: ${error.message}`);
    } else {
        alert('Log out successful!');
        toggleAuthState(false);
    }
});

// Fetch Data Functionality
fetchDataButton.addEventListener('click', async () => {
    const { data, error } = await supabase.from('example_table').select('*');
    if (error) {
        dataDisplay.innerHTML = `Error: ${error.message}`;
    } else {
        dataDisplay.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    }
});

// Toggle UI Based on Authentication State
const toggleAuthState = (isLoggedIn) => {
    document.getElementById('auth-container').style.display = isLoggedIn ? 'none' : 'block';
    dataContainer.style.display = isLoggedIn ? 'block' : 'none';
};

// Check User Authentication State on Page Load
supabase.auth.getUser().then(({ data: { user } }) => {
    toggleAuthState(!!user);
});
*/
