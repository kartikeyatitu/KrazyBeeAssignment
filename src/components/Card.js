import { getImages } from "../apicalls/api";
import { useEffect, useState } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = (props) => {

    const [images, setImage] = useState([]);

    useEffect(() => {
        imageResponse();
    }, [])

    useEffect(() => {
        console.log(Object.keys(images));
        // Object.keys(images)
    }, [images])

    const imageResponse = async () => {
        const response = await getImages(props.data.id);
        setImage(response.data);
        console.log(response.data);
    }

    return (
        <div style={{ border: 'solid 2px #CFCFCF', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', margin: '1rem' }}>
            <div style={{ border: 'solid 2px #CFCFCF', padding: '1rem' }}>
                <div style={{ fontSize: '20px', fontWeight: '600' }}>{props.data.title}</div>
                <div>
                    <span>
                        id:{props.data.id}
                    </span>,<span>
                        userId:{props.data.userId}
                    </span>
                </div>
            </div>
            <div style={{ padding: '1rem', display: 'flex', overflowY: 'scroll' }}>
                {Object.keys(images).map((image) => {
                    return (<>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
                            <div>
                                <LazyLoadImage src={images[image].thumbnailUrl} />
                            </div>
                            <div >
                                <div>
                                    {images[image].title}
                                </div>
                                <div>
                                    <span>
                                        id:{images[image].id}
                                    </span>

                                </div>
                            </div>
                        </div>
                    </>)
                })}
            </div>
        </div>
    )
}

export default Card;