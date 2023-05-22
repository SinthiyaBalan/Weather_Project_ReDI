

const ul = document.createElement('ul')
document.body.appendChild(ul)
console.log("hi")

fetch("https://api.openweathermap.org/data/2.5/weather?q=munich&appid=e10c8842896652d1ca26c5176f602a72")
.then(i => i.json())
.then(i => {

    const li = document.createElement('li');
 
    console.log(i);

    console.log(i.main.temp)
    console.log(i.name)
    console.log(i.sys.country);
    
    li.textContent = `City Name :${i.name} ,Temp :${i.main.temp} , Country :${i.sys.country} , Weather : ${i.weather[0].main}`;

  
    ul.appendChild(li);

    // another way to get data from array of objects
   /*    i.weather.forEach(element => {
        console.log(element.main)
      }); */
        
  })

.catch(e => console.log(e))