let getResidentsBtn = document.getElementById('get-residents')
let body = document.querySelector('body')

function getResidents(){
    axios.get('https://swapi.dev/api/planets/?search=Alderaan').then((res) => {
        //Find residents within the alderaan array
        let residentsArray = res.data['results'][0]['residents']
        console.log(residentsArray)
        for(let i = 0; i < residentsArray.length; i++){

            axios.get(residentsArray[i]).then(resident => {
                //each resident object
                console.log(resident.data)
                //each resident's name
                console.log(resident.data['name'])
                //create h2
                let newH2 = document.createElement('h2')
                // give h2 text content
                newH2.textContent = resident.data['name']

                body.appendChild(newH2)
            })
        }
    })
    console.log('button clicked')
}

getResidentsBtn.addEventListener('click', getResidents)