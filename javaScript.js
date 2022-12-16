const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '645a2fbb9fmsh656c21576b37c4cp1b662ajsn5a160524ab9b',
		'X-RapidAPI-Host': 'address-completion.p.rapidapi.com'
	}
};

fetch('https://address-completion.p.rapidapi.com/v1/geocode/autocomplete?text=Wiebkestieg%201%20Hamburg&limit=1&lang=en&countrycodes=de', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));