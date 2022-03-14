import axios from 'axios'

const albumsUrl= "https://jsonplaceholder.typicode.com/albums" 
export  const getAlbums = async() => {

    return  await axios.get(albumsUrl);
}



export  const getImages = async(id) => {

    return  await axios.get(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`);
}

