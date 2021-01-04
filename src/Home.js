import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';

function Home() {
    return (
        <div className='home'>
            <Banner />
            <div className='home__section'>
                <Card 
                    src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>

            <div className='home__section'>
                <Card 
                    src="https://a0.muscache.com/im/pictures/69f224a9-837d-495d-adc7-e9275e23765e.jpg?im_w=720"
                    title="3 Bedroom Flat in Malibu"
                    description="Superhost with a stunning view of the beachside in Sunny Malibu"
                    price="$485/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/c87dfe64-eb89-416b-8698-2edc2b440d81.jpg?im_w=720"
                    title="Penthouse in Istanbul"
                    description="Enjoy the amazing sights of Istanbul with this stunning penthouse"
                    price="$570/night"
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/3a75f7e7-573d-4001-b133-744430fcbb12.jpg?im_w=720"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="$46/night"
                />
            </div>
        </div>
    )
}

export default Home
