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

    const hiit = (
        <>
            <form>
                <label>Sets</label>
                <input type="number"/>
                <label>Reps</label>
                <input type="number"/>
                <label>Weight</label>
                <input type="number"/>
            </form>
            <br/>
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
