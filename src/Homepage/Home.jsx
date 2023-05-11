import './Home.css';
import { Link } from 'react-router-dom';


const Homepage = () => {
    return (
        <div className="homepage">
            <h1>What is Scrum?</h1>
            <p>
                If you are just getting started, think of Scrum as a way to get work done as a team in small pieces at a time,
                with continuous experimentation and feedback loops along the way to learn and improve as you go.
                Scrum helps people and teams deliver value incrementally in a collaborative way.
                As an agile framework, Scrum provides just enough structure for people and teams to integrate into how they work,
                while adding the right practices to optimize for their specific needs.You may be thinking, that sounds great!
                But, how do I get started?
            </p>
            <img src="/public/img/scrum.png" alt="Scrum" id="img1" width="30vw" height="20vh"></img>
            <p>
                It starts with understanding the Scrum framework which is defined in The Scrum Guide and was first introduced to the world in 1995
                as a better way of team collaboration for solving complex problems.
                The Scrum framework is fairly simple being made up of a Scrum Team consisting of a Product Owner,
                a Scrum Master and Developers, each of which have specific accountabilities.
                The Scrum Team takes part in five events and produces three artifacts.
                Scrum co-creators Ken Schwaber and Jeff Sutherland wrote and maintain The Scrum Guide, which explains Scrum clearly and succinctly.
                The guide contains the definition of Scrum, describing the Scrum accountabilities, events, artifacts and the guidance that binds them together.
            </p>
            <p>
                So, why is it called Scrum? People often ask, “Is Scrum an acronym for something?” and the answer is no.
                It is actually inspired by a scrum in the sport of rugby.
                In rugby, the team comes together in what they call a scrum to work together to move the ball forward.
                In this context, Scrum is where the team comes together to move the product forward.
            </p>
            <p>
                Scrum is an empirical process, where decisions are based on observation, experience and experimentation.
                Scrum has three pillars: transparency, inspection and adaptation.
                This supports the concept of working iteratively.
                Think of Empiricism as working through small experiments, learning from that work and adapting both what you are doing and how you are doing it as needed.
            </p>
            <p>
                One critical Scrum Team characteristic that binds all of the elements together is Trust.
                If Trust is not present on a Scrum Team, there will likely be tension and bottlenecks in the way of getting work done.
                The Scrum Values are also critical for Scrum Teams to adhere to as they help to guide how you work and drive trust.
                The Scrum Values of Courage, Focus, Commitment, Respect, and Openness, are all important elements that Scrum Team members must consider when working together.
                The Scrum Values are particularly important in environments where experimentation is core to making progress.
            </p>
            <img src="/public/img/scrum2.png" alt="Scrum2" id="img2" width="30vw" height="20vh"></img>
            <br />
            <p>To visualize your Scrum Value, you can use this tool. </p>
            <p>Answer 5 questions for each value by selecting yes or no, depending on your own opinion.</p>
            <a href="/visualize" >Scrum Value Visualization</a>
            {/* <Link to="/visualize"></Link> */}
        </div>
    );
};

export default Homepage;
