import { useEffect } from "react";
import '../../style/Leaderboard.css'

function Leaderboard() {

    return (
        <section className="Leaderboard">
            <h2>Leaderboard</h2>
            <table className="ScoreTable">
                <thead>
                    <tr className="ScoreHeader">
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>5.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>6.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>7.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>8.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>9.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                    <tr>
                        <td>10.</td>
                        <td>Winner</td>
                        <td>9000</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default Leaderboard;