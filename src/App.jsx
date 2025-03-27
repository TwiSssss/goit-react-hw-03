import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

export const App = () => {
    const saveClick = JSON.parse(localStorage.getItem("feedback"));
    const [feedback, setClick] = useState(saveClick || { good: 0, neutral: 0, bad: 0 });
    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);
    const updateFeedback = feedbackType => {
        setClick ({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    };
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
    const resetFeedback = () => {
        setClick({ good: 0, neutral: 0, bad: 0 });
    };
    return (
        <>
            <Description />
            <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
            {totalFeedback > 0 ? <Feedback feedback={feedback} positiveFeedback={positiveFeedback} totalFeedback={totalFeedback} /> : <Notification />}
        </>
    );
};
