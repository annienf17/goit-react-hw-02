import { useState, useEffect } from "react";
import Options from "./Options";
import Feedback from "./Feedback";
import Notification from "./Notification";
import "./App.css";

export default function App() {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  useEffect(() => {
    const savedFeedback = localStorage.getItem("feedback");
    if (savedFeedback) {
      setFeedback(JSON.parse(savedFeedback));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;

  return (
    <>
      <div>
        <h1>Sip Happens Café</h1>
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
          <Notification message="No feedback given yet" />
        )}
      </div>
    </>
  );
}
