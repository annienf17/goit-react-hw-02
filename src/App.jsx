import Options from "./Options"; //A component that provides buttons for users to give feedback.
import Feedback from "./Feedback"; //A component that displays the feedback summary.
import useFeedback from "./useFeedback"; //A custom hook that manages the feedback state.
import Notification from "./Notification"; //A component that displays a message when there is no feedback.
import "./App.css";

export default function App() {
  const { feedback, updateFeedback, resetFeedback } = useFeedback();

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;

  return (
    <>
      <div>
        <h1>Hard Rock Café</h1>
        <p>
          Please leave your feedback about our service by selecting one of the
          options below.
        </p>

        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedback={totalFeedback}
        />
        {totalFeedback > 0 ? (
          <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback yet" />
        )}
      </div>
    </>
  );
}
