import React from "react";

export default function Feedback({
  feedback,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div>
      <p>
        good: {feedback.good}, neutral: {feedback.neutral}, bad: {feedback.bad}
      </p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
