import React from "react";
import { AppWrap } from "../../../wrapper";
import './About.css';
import { images } from "../../../constants";

const aboutData = {
    title: "Little Lemon",
    subTitle: "Chicago",
    description:
    `Little Lemon is a charming restaurant in Chicago, known for its delectable dishes and warm ambiance. The modern yet cozy interior features elegant wooden furnishings and lemon-themed decor. The diverse menu offers innovative flavors with locally sourced ingredients, catering to various dietary preferences. Guests can enjoy mouthwatering breakfast options, flavorful lunches, and delightful dinners. Handcrafted cocktails, fine wines, and artisanal beers complement the dishes. With excellent service and a welcoming atmosphere, Little Lemon is a beloved destination for locals and visitors alike, providing a memorable dining experience in the heart of Chicago.`,
    image1: images.MarioandAdrianA,
    image2: images.resturantChefB,
};
const About = () => {
    return (
        <div
            className="app_about-section"
        >
                <div className="app_about-description-box">
                    <h1 className="app__about-title">{aboutData.title}</h1>
                    <br />
                    <h4 className="app__about-subtitle">{aboutData.subTitle}</h4>
                    <br />
                    <p className="app__about-description">
                        {aboutData.description}
                            <br />
                            <br />
                        {aboutData.description}
                    </p>
                </div>

                <div className="app__about-image-holder">
                        <div className="app__about-image-box img-box-1"
                            style=
                            {
                                {
                                    backgroundImage: `url(${aboutData.image2})`
                                }
                            }
                        />
                        <div className="app__about-image-box img-box-2"
                            style=
                            {
                                {
                                    backgroundImage: `url(${ aboutData.image1 })`
                                }
                            }
                        />
                </div>
        </div>
    );
}

export default AppWrap(About, 'About', 'app__about');