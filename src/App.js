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

    return (
        <>
            <Header />
            <div>
                <h1>FitMe</h1>
                <button className="btn">Tuesday-Thursday</button>
            </div>
            hello

            <h1>Tuesday/Thursday</h1>

            {/* <!-- To add a line break use the <br/> command --> */}
            {/* <routineBtn /> */}
            Test {Button}

            Standing Triceps
            {Button}
            {/* <div id="button"></div> */}

            Regular Curls
            {Button}

            21 Burn out Curls
            {Button}

            Pull down Tri's
            {Button}

            Partner Curls (1-10, 10-1)
            {Button}

            Pull Down (Backwards)
            {Button}

            Reverse Curl
            {Button}

            Dumbell Cross Front
            {Button}

            Military Press
            {Button}

            Up Right Row
            {Button}

            Lat Raisers
            {Button}

            Shrugs (Barbell and Dumbell)
            {Button}

            Supine Extension (Tri's)
            {Button}

            Dumbell Curls Hammer (Thumbs Up)
            {Button}

            Dumbell (Tri's)
            {Button}

            Dumbell Curl Regular (Palm Up)
            {Button}

            Dumbell Press
            {Button}

            Pull Ups (narrow)
            {Button}

            Jump Rope (10 minutes)
            {Button}

            Speed Sqaures
            {Button}

            <h1>Monday/Wednesday</h1>
        </>
    )
}

// terminal code to create new react app
// npx create-react-app name
export default App
