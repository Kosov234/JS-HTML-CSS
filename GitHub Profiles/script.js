const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const search = document.getElementById('search')

async function getUser(username) {
    try {
        const { data } = await axios.get(APIURL + username)
    } catch(err) {
        
    }   
}

form.addEventListener('submit',(e) => {
    e.preventDefault()

    const user = e.target.value
})