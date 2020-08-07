const request=require('request')

/*const geocode =(address,callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3VyYWpyYXl1ZHUiLCJhIjoiY2tkYjY5aHp1MGtwdTJ4bXpxNTg4eTZubCJ9.KSNQusV0o-sLSVnV0ZJlXw&limit=1'
    
    request( {url:url,json:true}, (error,response)=>{
        if(error){
            callback('cannot connect to weather service!')
        }
        else if(response.body.features.length===0){
            callback('please check the input co ordinates')
        }
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
    
    }

    module.exports=geocode */

    //destructuring method

const geocode =(address,callback) =>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3VyYWpyYXl1ZHUiLCJhIjoiY2tkYjY5aHp1MGtwdTJ4bXpxNTg4eTZubCJ9.KSNQusV0o-sLSVnV0ZJlXw&limit=1'
    
    request( {url,json:true}, (error,{body}={})=>{
        if(error){
            callback('cannot connect to weather service!')
        }
        else if(body.features.length===0){
            callback('please check the input co ordinates')
        }
        else{
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
    
    }

    module.exports=geocode