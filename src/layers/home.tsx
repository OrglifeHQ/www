import Services from "@/components/Service";
import React from "react";
import Gallery from "@/components/Gallery";
import Journal from "@/components/Journal";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import { Hero } from "@/components/Hero";

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Services />
            <Gallery />
            <Journal />
            <Testimonials />
            <Stats />
            {/* <Awards /> */}
        </>
    );
};

export default HomePage;
