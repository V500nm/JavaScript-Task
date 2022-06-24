let request = new XMLHttpRequest();
request.open('get', 'https://randomuser.me/api?results=20', true)
request.send();
request.onload = function() {
    if (this.readyState == 4 && this.status == 200) {
        let user = JSON.parse(this.responseText);
        let display = "";
        for (let results of user.results) {
            console.log(results)
            display += `
                    <div class="card">
                  
                    <div class="infoCard">
                    <div class="genderDiv ${results.gender}"></div>
                        <div class="img">
                            <img src="${results.picture.large}">
                        </div>
                        <div class="info">
                            <h1 class="title">${results.name.title}&nbsp${results.name.first}&nbsp${results.name.last}</h1>
                            <hr>
                            <p class="age"><b>Age:</b>&nbsp&nbsp${results.dob.age}</p>
                            <p class="email"><b>Email:</b>&nbsp&nbsp${results.email}</p>
                            <p class="country"><b>Country:</b>&nbsp&nbsp${results.location.country}</p>
                            <p class="gender"><b>phone:</b>&nbsp&nbsp${results.phone}</p>
                        </div>
                    </div>
                </div>
                    `;


        }

        document.querySelector(".container").innerHTML = display
    }

}