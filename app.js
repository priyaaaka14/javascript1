window.navigator.geolocation.getCurrentPosition(function (data) {
    const latitude = parseFloat(data.coords.latitude);
    const longitude = parseFloat(data.coords.longitude);
    console.log(latitude);
    console.log(longitude);


    fetch("https://api.opencagedata.com/geocode/v1/json?key=99b9206f968840608ec76f2da3d48a9d&q=" + latitude + "+" + longitude + "&pretty=1&no_annotations=1")
        .then(response => response.json())
        .then(function (data1) {
            let city = data1['results'][0]['components']['state_district'];
            let state = data1['results'][0]['components']['state'];
            let country = data1['results'][0]['components']['country'];
            let continent = data1['results'][0]['components']['continent'];
            let p1 = document.getElementById("city");
            let p2 = document.getElementById("state");
            let p3 = document.getElementById("country");
            let p4 = document.getElementById("continent");
            let p5 = document.getElementById("location");

            p1.append(city);
            p2.append(state);
            p3.append(country);
            p4.append(continent);
            p5.append(city+' | '+state+' | '+country+' | '+continent);

            let p11 = document.getElementById("city1");
            let p12 = document.getElementById("state1");
            let p13 = document.getElementById("country1");
            let p14 = document.getElementById("continent1");

            p11.append(city);
            p12.append(state);
            p13.append(country);
            p14.append(continent);


            var img = document.createElement("img");
            img.src = "https://api.tomtom.com/map/1/staticimage?layer=basic&style=main&format=png&zoom=7&center="+ longitude +"%2C"+ latitude+"&width=400&height=250&view=IN&key=33ZTQWd0AvI0xHSTIN7fcUpax8Gdl5QT";
            var src = document.getElementById("map");
            src.append(img);



            fetch("https://api.unsplash.com/photos/random?query="+ city +"&client_id=Ks_hJ_xWcKF34syVSBj4asVPVuy8f0yA7ka01aeUQ9o")
            .then(response => response.json())
            .then(function(city_data){
                let city_pic=city_data['urls']['raw'];

                var img = document.createElement("img"); 
                img.src = city_pic; 
                var src = document.getElementById("city_pic"); 
                src.append(img); 
                var img1 = document.createElement("img"); 
                img1.src = city_pic; 
                var src1 = document.getElementById("city_pic1"); 
                src1.append(img1); 
            
            });

            fetch("https://api.unsplash.com/photos/random?query="+ state +"&client_id=Ks_hJ_xWcKF34syVSBj4asVPVuy8f0yA7ka01aeUQ9o")
            .then(response => response.json())
            .then(function(state_data){
                let state_pic=state_data['urls']['raw'];

                var img = document.createElement("img"); 
                img.src = state_pic; 
                var src = document.getElementById("state_pic"); 
                src.append(img);
                var img1 = document.createElement("img"); 
                img1.src = state_pic; 
                var src1 = document.getElementById("state_pic1"); 
                src1.append(img1); 
            
            });

            fetch("https://api.unsplash.com/photos/random?query="+ country +"&client_id=Ks_hJ_xWcKF34syVSBj4asVPVuy8f0yA7ka01aeUQ9o")
            .then(response => response.json())
            .then(function(country_data){
                let country_pic=country_data['urls']['raw'];

                var img = document.createElement("img"); 
                img.src = country_pic; 
                var src = document.getElementById("country_pic"); 
                src.append(img);
                var img1 = document.createElement("img"); 
                img1.src = country_pic;
                var src1 = document.getElementById("country_pic1"); 
                src1.append(img1); 
            
            });

            fetch("https://api.unsplash.com/photos/random?query="+ continent +"&client_id=Ks_hJ_xWcKF34syVSBj4asVPVuy8f0yA7ka01aeUQ9o")
            .then(response => response.json())
            .then(function(continent_data){
                let continent_pic=continent_data['urls']['raw'];

                var img = document.createElement("img"); 
                img.src = continent_pic; 
                var src = document.getElementById("continent_pic"); 
                src.append(img);
                var img1 = document.createElement("img"); 
                img1.src = continent_pic; 
                var src1 = document.getElementById("continent_pic1"); 
                src1.append(img1); 

            });

        });

});




