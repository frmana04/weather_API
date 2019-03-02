const adress={
    alias: 'd',
    desc:'City adress to get the weather',
    demand:true

}


const argv=require ('yargs').options({
    adress
}).argv;





module.exports={
    argv
}