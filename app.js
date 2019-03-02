const {argv}=require('./config/argv')
require('dotenv').config();
const {getPlaceLatLng}=require ('./place')
const {getWeather}=require ('./weather')



getPlaceLatLng(argv.adress).then(data=>{

    console.log('lat:',data.lat,' lng:',data.lng)
    getWeather(data.lat.split('°')[0],data.lng.split('°')[0]).then(dat=>{
        console.log('temp:', dat)
    }).catch(err=>{
        console.log(err)
       })
       

}).catch(err=>{
    console.log(err)
})






