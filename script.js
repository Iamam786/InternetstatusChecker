window.addEventListener('load', () => {
    let statusText = document.getElementById('statusText')
    let ipAdd = document.getElementById('ipAdd')
    let networkStrengthText = document.getElementById('networkStrengthText')

    statusText.textContent = 'Checking...';

    if (navigator.onLine) {
        fetch('https://api.ipify.org?format=json')
            .then((res) => res.json())
            .then((data) => {
                ipAdd.textContent = data.ip;
                statusText.textContent = "Connected";

                let connection = navigator.connection;
                let networkStrength = connection ? connection.downlink + "Mbps" : 'Unknown';

                networkStrengthText.textContent = networkStrength
            })
            .catch(() => {
                statusText.textContent = 'Disconnected';
                ipAdd.textContent = '-';
                networkStrengthText.textContent = '-';
            })
    } else {
        statusText.textContent = 'Disconnected';
        ipAdd.textContent = '-';
        networkStrengthText.textContent = '-';
    }
})