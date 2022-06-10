import { useEffect, useState } from "react";
import "../../style/Leaderboard.css";
import { api } from "../../util/api";
import ScorePost from "../ScorePost";

function Leaderboard() {
  const [scores, setScores] = useState([]);
  // let rankNum = 0;
  const getScores = async () => {
    try {
      const res = await api.getScores();
      const scorePosts = await res.json();
      const newScore = [ ...scorePosts];
    console.log(newScore);

    // Call setBucket to update state with our new set of bucket list items
    setScores(newScore);
    //   setScores(scorePosts);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getScores();
  }, [] );

//   const {
//     username = '',
//     score = '',
   
//   } = scores;

  

  return (
    <section className="Leaderboard">
      <img src={require('../../Assets/LeaderBoard/title.png')}/>
      <table className="ScoreTable">
        <thead>
          <tr className="ScoreHeader">
            {/* <th>Rank</th> */}
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          {/* <td>{rankNum++}</td> */}
            {scores.map((scores) => (
              <ScorePost scorePost={scores}></ScorePost>
            ))}
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Leaderboard;

// <section className="Leaderboard">
//     <h2>Leaderboard</h2>
//     <table className="ScoreTable">
//         <thead>
//             <tr className="ScoreHeader">
//                 <th>Rank</th>
//                 <th>Name</th>
//                 <th>Score</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td>1.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>2.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>3.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>4.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>5.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>6.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>7.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>8.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>9.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//             <tr>
//                 <td>10.</td>
//                 <td>Winner</td>
//                 <td>9000</td>
//             </tr>
//         </tbody>
//     </table>
// </section>
