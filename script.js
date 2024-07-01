document.getElementById('upload-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append('file', document.getElementById('file-input').files[0]);

    fetch('/api/data/import', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        if (data.message === 'File imported successfully') {
            // Logic to update the visualization section
        }
    })
    .catch(error => console.error('Error:', error));
});
