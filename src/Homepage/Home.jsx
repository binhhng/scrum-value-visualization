import './Home.css';

const Homepage = () => {
    return (
        <div className="homepage">
            <h1 className="intro">Scrum Values</h1>
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
            <img src={require('./img/scrum2.png')} alt="Scrum2" id="img2"></img>
            <p>Read more about scrum at <a href='https://www.scrum.org/' target='_blank' rel='noreferrer'>https://www.scrum.org/</a></p>
            <p>To visualize your Scrum Value, you can use this tool below. </p>
            <p>Answer 5 questions for each value by selecting yes or no, depending on your own opinion.</p>
        </div>
    );
};

export default Homepage;
