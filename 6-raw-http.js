const http = require('http')

const url = 'http://api.weatherstack.com/current?access_key=a48c0f6e084d0dabf140094bcb6f1c7a&query=37.8267,-122.4233&units=f'

const request = http.request(url,(response)=>{

    let data = ''
    response.on("data",(chunk)=>{
        data = data + chunk.toString()
        console.log(data)
    })
   
    response.on("end",()=>{
        console.log(JSON.parse(data))
    })

    response.on("error",(error)=>{
        console.log(error)
    })
})

request.end()
