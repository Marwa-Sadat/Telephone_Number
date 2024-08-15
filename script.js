function validatePhoneNumber(phone) {
  const phonePattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  return phonePattern.test(phone);
}

document.getElementById('check-btn').onclick = function handleCheckButtonClick() {
  const userInput = document.getElementById('user-input').value;
  const resultsDiv = document.getElementById('results-div');

  if (!userInput.trim()) {
    alert('Please provide a phone number');
    return;
  }

  if (validatePhoneNumber(userInput)) {
    resultsDiv.textContent = `Valid US number: ${userInput}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput}`;
  }
};

document.getElementById('clear-btn').onclick = function handleClearButtonClick() {
  document.getElementById('results-div').textContent = '';
  document.getElementById('user-input').value = '';
};
