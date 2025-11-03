import React from "react";
import './home.css';
const Home = () =>{
    return(
        <section>
            <div  style={{width:'100%',height:'550px',textAlign:'bottom'}} className="image">
    <h1>Welcome to our website</h1>
    <p>Looking at other people’s homepages for inspiration doesn’t lead to a successful homepage design. You need to understand the principles that underpin them.</p>     
            </div>
            <div className="second"><h1>Start your Adventure Here</h1>
           <form>
            <label>Name
                 <input type="text"/></label>
                 <label>Email
                 <input type="email" value=""/></label>
                <button type="submit">Customize</button></form></div>
                <div><h1>The Grafton Experience</h1>
                <p>Designed for you, Grafton offers exclusive access to some of the world’s most pristine safari destinations and luxury lodges – from the thrill of the wild to the serenity of the savannah – every detail is considered, and every desire met, with the latest in innovation, technology, luxury and comfort, together with exceptional service and experiences.
From the moment you reach out to us until we bid farewell to you; we strive to deliver a bespoke experience that you will cherish forever. Our team is responsive, professional, and meticulous, dedicated to crafting your perfect journey. Whether it's a thrilling Tanzania Safari, a serene Zanzibar Beach Holiday, or an exhilarating Kilimanjaro Mountain Climb, we have you covered.
                </p>
                </div>
                <div><p>Our itineraries are meticulously personally curated to create a lifetime of memories, where time is truly yours and every moment counts, whether you're traveling with your partner, family, friends, or even solo. </p></div>
        </section>
    )
}
export default Home;