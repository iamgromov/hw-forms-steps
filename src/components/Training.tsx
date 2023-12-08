import { TrainingProps } from "../interface/TrainingProps";

const Training: React.FC<TrainingProps> = ({ training, removeTraining }) => {
    const date = training.date && new Date(training.date).toLocaleDateString() || '';

    return (
        <div className='content-row'>
            <div>{date}</div>
            <div>{training.distance}</div>
            <div>
                <button className="content-btn">✏️</button>
                <button 
                    className="content-btn"
                    onClick={() => training.date && removeTraining(training.date)}
                >❌</button>
            </div>
        </div>
    )
}

export default Training