import Header from "./components/Header"
import routineBtn from "./components/routineBtn"

// instructions to push to already existing
// github repo
// https://www.digitalocean.com/community/tutorials/how-to-push-an-existing-project-to-github

function App() {
    const Button = (
        <>
            <button>+</button>
            <button>-</button>
            <br/><br/>
        </>
    )

    // https://www.w3schools.com/tags/att_input_type_number.asp
    // learn how to make symetrical and asymetrical builds, in case
    // all the sets were different weight or reps
    const hiit = (
        <>
            <form>
                {/* 
                    https://www.geeksforgeeks.org/how-to-insert-spaces-tabs-in-text-using-html-css/
                    single space --> &nbsp;
                    two spaces --> &ensp;
                    four spaces --> &emsp;

                    in line style is done with double curly braces
                    or I could make const to host the style
                */}
                <label>Sets&nbsp;</label>
                <input type="number" min="0" style={{width: 60}}/>
                <label>&emsp;Reps&nbsp;</label>
                <input type="number" min="0" style={{width: 60}}/>
                <label>&emsp;Weight&nbsp;</label>
                <input type="number" min="0" style={{width: 60}}/>
                &emsp;soft total
            </form>
            <br/>
        </>
    )

    // will I need php to read and write from files?
    // the files will help me build routines and call these
    // routines in a method, the method would reduce overall
    // line count
    return (
        <>
            <Header />
            <div>
                <h1>FitMe</h1>
                <button className="btn">Tuesday-Thursday</button>
                <button className="btn">Monday-Wednesday</button>
                <button className="btn">Cardio</button>
                <button className="btn">profile --> routines-bodyInfo</button>
                <button className="btn">friends --> buildTeam</button>
            </div>

            <h1>Tuesday/Thursday</h1>

            {/* <!-- To add a line break use the <br/> command --> */}
            {/* <routineBtn /> */}
            Standing Triceps
            {hiit}

            Regular Curls
            {hiit}

            21 Burn out Curls
            {hiit}

            Pull down Tri's
            {hiit}

            Partner Curls (1-10, 10-1)
            {hiit}

            Pull Down (Backwards)
            {hiit}

            Reverse Curl
            {hiit}

            Dumbell Cross Front
            {hiit}

            Military Press
            {hiit}

            Up Right Row
            {hiit}

            Lat Raisers
            {hiit}

            Shrugs (Barbell and Dumbell)
            {hiit}

            Supine Extension (Tri's)
            {hiit}

            Dumbell Curls Hammer (Thumbs Up)
            {hiit}

            Dumbell (Tri's)
            {hiit}

            Dumbell Curl Regular (Palm Up)
            {hiit}

            Dumbell Press
            {hiit}

            Pull Ups (narrow)
            {hiit}

            Jump Rope (10 minutes)
            {hiit}

            Speed Sqaures
            {hiit}

            <h1>Monday/Wednesday</h1>
        </>
    )
}

// terminal code to create new react app
// npx create-react-app name
export default App
