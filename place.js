const axios=require('axios')
let getPlaceLatLng =async (adress)=>{

    let encodeUrl = encodeURI(adress)
    let data= await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${encodeUrl}&key=${process.env.API_KEY_GEOCODING}`)
    let coord=data.data.results[0].annotations.DMS;

    return coord;
}

module.exports={
    getPlaceLatLng
}

