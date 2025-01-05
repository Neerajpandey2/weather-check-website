// script
        let place = ' ';
        const apiKey = "ea203bf37e3141f8919120547250401";

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {

                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    place = `${latitude},${longitude}`;

                    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`)
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            let name = data.location.name;
                            let region = data.location.region;
                            let country = data.location.country;
                            let temperature = data.current.temp_c;
                            let humidity = data.current.humidity;
                            let wind = data.current.wind_kph;
                            let sky = data.current.condition.text;
                            let date = new Date(data.current.last_updated).toLocaleString('en-IN', { hour12: true }); // Convert date to Indian format

                            document.querySelector('#placeH').innerText = name;
                            document.querySelector('#placeN').innerText = name;
                            document.querySelector('#region').innerText = region;
                            document.querySelector('#country').innerText = country;
                            document.querySelector('#temp').innerText = `${temperature} °C`;
                            document.querySelector('#humi').innerText = `${humidity} %`;
                            document.querySelector('#wspeed').innerText = `${wind} km/h`;
                            document.querySelector('#sky').innerText = sky;
                            document.querySelector('#date').innerText = date;
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        })
                })

        }

        document.querySelector('#search').addEventListener('click', function () {
            let inputValue = document.querySelector('#Input').value;
            place = `${inputValue}`;
            document.querySelector('#placeH').innerText = place;

            fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}`)
                .then(response => {
                    return response.json();
                })
                .then(data => {

                    let name = data.location.name;
                    let region = data.location.region;
                    let country = data.location.country;
                    let temperature = data.current.temp_c;
                    let humidity = data.current.humidity;
                    let wind = data.current.wind_kph;
                    let sky = data.current.condition.text;
                    let date = new Date(data.current.last_updated).toLocaleString('en-IN', { hour12: true }); // Convert date to Indian format

                    document.querySelector('#placeN').innerText = `${name}`;
                    document.querySelector('#region').innerText = `${region}`;
                    document.querySelector('#country').innerText = country;
                    document.querySelector('#temp').innerText = `${temperature} °C`;
                    document.querySelector('#humi').innerText = `${humidity} %`;
                    document.querySelector('#wspeed').innerText = `${wind} km/h`;
                    document.querySelector('#sky').innerText = sky;
                    document.querySelector('#date').innerText = date;

                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    let element = document.querySelector('.alert');
                    element.classList.add('show'); // Logs all the classes of the element
                    setTimeout(() => {
                        element.classList.remove('show');
                    }, 3000); // 2000 milliseconds = 2 seconds




                });
        });
