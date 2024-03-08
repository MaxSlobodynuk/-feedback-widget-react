import { useState } from 'react';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';
import css from './App.module.css';

import React from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(prevGood => prevGood + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(prevNeutral => prevNeutral + 1);
  };

  const handleClickBad = () => {
    setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback();

  return (
    <div>
      <h2>Please leave feedback</h2>
      <div className={css.buttonContainer}>
        <button onClick={handleClickGood} type="button" name="good">
          Good
        </button>
        <button onClick={handleClickNeutral} type="button" name="neutral">
          Neutral
        </button>
        <button onClick={handleClickBad} type="button" name="bad">
          Bad
        </button>
      </div>
      <h3>Statistics</h3>
      {total ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification massage="There is no feedback" />
      )}
    </div>
  );
};

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleClick = ({ target }) => {
//     this.setState(prevState => ({
//       [target.name]: prevState[target.name] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const total = this.countTotalFeedback();
//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div>
//         <h2>Please leave feedback</h2>
//         <div className={css.buttonContainer}>
//           <button onClick={this.handleClick} type="button" name="good">
//             Good
//           </button>
//           <button onClick={this.handleClick} type="button" name="neutral">
//             Neutral
//           </button>
//           <button onClick={this.handleClick} type="button" name="bad">
//             Bad
//           </button>
//         </div>
//         <h3>Statistics</h3>
//         {total ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={positivePercentage}
//           />
//         ) : (
//           <Notification massage="There is no feedback" />
//         )}
//       </div>
//     );
//   }
// }

// export default App;
