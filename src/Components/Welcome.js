import React, { useState, useEffect } from 'react'
// import imageLinksData from './data/gallery_images.json'

export default function Welcome() {
    const [imageLinksData, setImageLinksData] = useState([]);
    const loadImageLinksData = async () => {
        const resp = await fetch("https://udkz91dbjf.execute-api.us-east-1.amazonaws.com/Production/galleryImages");
        const jsonData = await resp.json();
        setImageLinksData(jsonData);
    }
    useEffect(() => {
        loadImageLinksData()
    }, [])
    return (
        <div className="scene" id="welcome">
            <article className="content">
                <div className="gallery">
                    {
                        imageLinksData.map((imgs) => {
                            return <img className={imgs.class} src={imgs.src} alt={imgs.alt} />
                        })
                    }
                </div>
                <h1>Welcome to the Landon&nbsp;Hotel</h1>
                <p>The original Landon perseveres after 50 years in the heart of West London. The West End neighborhood has something for everyone—from theater to dining to historic sights. And the not-to-miss Rooftop Cafe is a great place for travelers and locals to engage over drinks, food, and good&nbsp;conversation. &nbsp;To learn more about the Landon Hotel in the West End, browse our website and <a href="files/landon_information_sheet_London.pdf">download our handy information sheet</a>.</p>
            </article>
        </div>
    )
}
