function displayLocation(latitude, longitude) {
    let request = new XMLHttpRequest();

    const method = 'GET',
          apiUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=',
          url = `${apiUrl}${latitude},${longitude}&sensor=true`,
          async = true;

    request.open(method, url, async);
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            const data = JSON.parse(request.responseText),
                  address = data.results[0],
                  location = address.address_components.filter(component => {
                    const types = component.types;
                    if (types){
                        return types.includes("country") || types.includes("locality");
                    }
                  }),
                  city = location[0]["long_name"],
                  country = location[1]["long_name"];

                Session.set("country", (country ? country : ""));
                Session.set("city", (city ? city : ""));

                console.log(city, country);
        }
    };
    request.send();
};

const successCallback = function(position) {
    const x = position.coords.latitude,
          y = position.coords.longitude;
    displayLocation(x, y);
};

const errorCallback = function(error) {
    let errorMessage = 'Unknown error';
    switch (error.code) {
        case 1:
            errorMessage = 'Permission denied';
            break;
        case 2:
            errorMessage = 'Position unavailable';
            break;
        case 3:
            errorMessage = 'Timeout';
            break;
    }
    console.log(errorMessage);
};


navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


