import styles from "./Options.module.css";
const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
    return (
        <div>
            <button className={styles.button} onClick={() => updateFeedback('good')}>
                Good
            </button>
            <button className={styles.button} onClick={() => updateFeedback('neutral')}>
                Neutral
            </button>
            <button className={styles.button} onClick={() => updateFeedback('bad')}>
                Bad
            </button>
            {totalFeedback > 0 && (
                <button className={styles.button} onClick={resetFeedback}>
                    Reset
                </button>
            )}
        </div>
    );
};
export default Options;
