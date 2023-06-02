var id=document.getElementById('id').value;

        fetch(`http://localhost:5000/persons/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('Error: ' + response.status);
            }
        })
