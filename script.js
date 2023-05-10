function search()
{
  placename = inputText.value
  console.log(placename);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placename}&units=metric&appid=e9d0568578369b72caed0af4179881ba`)
  .then(res=>res.json())
  .then(data=>displaydata(data))
  .catch(error=>alert(error))
  
}
 


function displaydata(weatherdetails)
{
   
  
   temperature = weatherdetails.main.temp
   description = weatherdetails.weather[0].description
   humidity = weatherdetails.main.humidity
   windspeed = weatherdetails.wind.speed

   




   htmldata = `
   <h2 class="city">WEATHER IN ${placename}</h2>
   <h2 class="temp">${temperature}°C</h2>
   <div class="description">Sky : ${description}</div>
   <div class="humidity">humidity : ${humidity}</div>
   <div class="wind">wind speed : ${windspeed}</div>
  `

    weatherresult.innerHTML = htmldata



}

function clearWeather() {
  document.querySelector('.city').textContent = 'WEATHER IN : ';
  document.querySelector('.temp').textContent = '';
  document.querySelector('.description').textContent = 'Sky : ';
  document.querySelector('.humidity').textContent = 'humidity : ';
  document.querySelector('.wind').textContent = 'wind speed : ';

}