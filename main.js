const ul = document.createElement('ul')
document.body.appendChild(ul)


const UserCity = prompt("Enter the city name")

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${UserCity}&appid=e10c8842896652d1ca26c5176f602a72`)
.then(i => i.json())
.then(i => {

    const li = document.createElement('li');
 
    console.log(i);
    // C = K – 273.15  kelvin to Celsius 

    let toCelsius = Math.round(i.main.temp - 273.15);
    
    li.textContent = `City :${i.name} ,Temp :${toCelsius} °C, Country :${i.sys.country} , Weather : ${i.weather[0].main}`;
    ul.appendChild(li);

    // another way to get data from array of objects
   /*    i.weather.forEach(element => {
        console.log(element.main)
      }); */
        
  })

.catch(e => console.log(e))