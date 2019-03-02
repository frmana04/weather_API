const axios=require('axios')

const getWeather = async(lat,lng)=>{

    console.log(lat,lng)
    let data= await axios.get(`https://samples.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.API_KEY_WEATHER}`)
    let temp=data.data.main.temp;
    
    return temp;

}

module.exports={
    getWeather
}