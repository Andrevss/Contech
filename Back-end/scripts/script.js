const url = "https://localhost:3000/"

const loadingElement = document.querySelector("#loading")
const postContainer = document.querySelector("#fill-list")

//Get all profiles

function getAllProfiles(){
    const response = await fetch(url)

    console.log(response)

    const data = await response.json()

    
}

getAllProfiles();

