import { getAlbums } from "../apicalls/api";
import { useEffect, useState } from "react";
import Card from "./Card";
import LazyLoad from 'react-lazyload'

const AlbumsList = () => {

    const [albums, setalbums] = useState([]);

    useEffect(() => {
        albumsResponse();
    }, [])


    const albumsResponse = async () => {
        const response = await getAlbums();
        console.log(response.data);
        setalbums(response.data);
    }
    return (
        <>{albums.map((album, index) => {
            return <LazyLoad height={1000} once><Card key={index} data={album} /></LazyLoad>
        })}</>
    )
}
export default AlbumsList