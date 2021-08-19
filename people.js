const fs = require('fs');
const fetch = require("node-fetch");

const createNewJsonPeople = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/person/popular?api_key=1eb88851a7abaab1a0a08b633460d75d&language=en-US&page=1')
        const {results: people} = await response.json();

        // const newPeople = await people.map(person => {
        //     const newPerson = {
        //         fullName: person.full_name,
        //         avatar: person.avatar,
        //     }
        //     return newPerson;
        // }).filter(person => person.avatar !== 'http://image.tmdb.org/t/p/w185null');

        //await fs.writeFileSync('./NewDatabase/people.json', JSON.stringify(newPeople));
        console.table(typeof people);
        
    } catch (error) {
        console.log('🚀 ~ file: people.js ~ line 8 ~ createNewJsonPeople ~ error', error);
        return [];
    }
};


createNewJsonPeople();