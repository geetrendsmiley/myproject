const form = document.getElementById('userForm');
const output = document.getElementById('output');
const downloadBtn = document.getElementById('downloadBtn');

let formData = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();

  const entry = { name, email, age };
  formData.push(entry);

  output.textContent = JSON.stringify(formData, null, 2);

  form.reset();
});

downloadBtn.addEventListener('click', () => {
  const blob = new Blob([JSON.stringify(formData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "form-data.json";
  a.click();
  URL.revokeObjectURL(url);
});
