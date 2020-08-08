
console.log('client side server')
console.log('welcome')
console.log('hi!')
//to print the output on develop tool console box

const wf=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#msg1')
const msg2=document.querySelector('#msg2')


wf.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    msg1.textContent='loading..'
    msg2.textContent=''
    fetch('/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            msg1.textContent= data.error
        }
        else{
            msg1.textContent= data.location

            msg2.textContent=data.forecast
        }
    })
})
})

//to get the output on windows tab
