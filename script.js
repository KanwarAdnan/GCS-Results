function downloadResults() {
    const rollNumber = document.getElementById('rollNumber').value;
    const semester = document.getElementById('semester').value;

    // old 
    //https://gcs-bs-results-vvicnw7txq-uc.a.run.app/download/results
    const apiUrl = `https://gcs-bs-portal-vvicnw7txq-uc.a.run.app/download/results/${rollNumber}/${semester}`;

    const link = document.createElement('a');
    link.href = apiUrl;
    link.style.display = 'none';
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

function clearForm() {
    document.getElementById('rollNumber').value = '';
    document.getElementById('semester').value = '1';

    document.getElementById('resultMessage').innerHTML = '';
}
