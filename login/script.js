const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    // Fetch users.json file note: In a real application, never fetch passwords like this.
    const res = await fetch('users.json');
    const users = await res.json();

    // Check credentials to see if they match any user in users.json"geetrend"
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      message.textContent = "✅ Login Successful!";
      message.style.color = "green";
    } else {
      message.textContent = "❌ Invalid username or password!";
      message.style.color = "red";
    }
  } catch (err) {
    console.error(err);
    message.textContent = "⚠️ Error loading user data.";
    message.style.color = "orange";
  }
});
