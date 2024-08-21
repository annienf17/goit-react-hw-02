import React from "react";

export default function Feedback({
  feedback,
  totalFeedback,
  positivePercentage,
}) {
  return (
    <div>
      <p>
        Good: {feedback.good} <br /> Neutral: {feedback.neutral} <br /> Bad:{" "}
        {feedback.bad}
      </p>
      <p>Total feedback: {totalFeedback}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}
