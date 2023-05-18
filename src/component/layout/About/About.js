import React from "react";
import photoDog from "../../../images/photoDog.png"
import "./About.css";

const About = () => {
    return (
        <>
            <h1>About Us</h1>
            <div className="card">
                <div className="card__text">
                    <img src={photoDog} alt="About" />
                    <p>"Find Your Fur-ever Friend!"</p>
                    <p>Description: Welcome to Pawsome Companions, your go-to online destination for pet adoption. We believe that every pet deserves a loving home, and we're dedicated to connecting adorable animals with caring individuals or families like yours. Our platform offers a user-friendly and interactive experience to help you find your perfect companion and make a positive impact on a furry friend's life.</p>
                    <p>Pet Profiles: Browse through an extensive gallery of profiles featuring lovable pets available for adoption. Each profile includes the pet's name, breed, age, personality traits, and adorable photos to help you get to know them better.</p>
                    <p>Advanced Search: Our advanced search feature allows you to refine your search based on specific criteria such as species, breed, age, size, and location. This helps you find the perfect match that aligns with your preferences and lifestyle.</p>
                    <p>Adoption Process: We provide a comprehensive guide on the pet adoption process, including tips on preparing your home for a new arrival, important considerations for different pet types, and the necessary steps involved in the adoption procedure.</p>
                    <p>Adoption Events: Stay up to date with upcoming adoption events, pet fairs, and fundraisers happening in your area. Participate in local community events dedicated to promoting pet adoption and welfare.</p>
                    <p>Community Engagement: Join our vibrant online community of pet lovers and adopters. Connect with fellow pet owners, share stories, seek advice, and receive support throughout your pet adoption journey.</p>
                    <p>Volunteer and Support: Discover opportunities to volunteer at local animal shelters or contribute to animal welfare organizations. Make a difference by donating or fundraising to support the well-being of pets in need.</p>
                    <p>Pawsome Companions is dedicated to facilitating the pet adoption process, spreading awareness about responsible pet ownership, and creating a loving community of pet enthusiasts. Start your journey today and find your perfect four-legged companion through our platform! Together, we can make a difference in the lives of these amazing animals.</p>
                </div>
            </div>
        </>
    )
};

export default About;