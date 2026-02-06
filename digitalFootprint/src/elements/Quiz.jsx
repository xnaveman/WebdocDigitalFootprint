import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Quiz.css';

const Quiz = () => {
    const { t } = useLanguage();
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 'q1',
            questionKey: 'quiz_q1',
            options: [
                { key: 'quiz_q1_a', correct: false },
                { key: 'quiz_q1_b', correct: true },
                { key: 'quiz_q1_c', correct: false },
            ]
        },
        {
            id: 'q2',
            questionKey: 'quiz_q2',
            options: [
                { key: 'quiz_q2_a', correct: true },
                { key: 'quiz_q2_b', correct: false },
                { key: 'quiz_q2_c', correct: true },
                { key: 'quiz_q2_d', correct: true },
            ]
        },
        {
            id: 'q3',
            questionKey: 'quiz_q3',
            options: [
                { key: 'quiz_q3_a', correct: true },
                { key: 'quiz_q3_b', correct: false },
                { key: 'quiz_q3_c', correct: true },
            ]
        },
        {
            id: 'q4',
            questionKey: 'quiz_q4',
            options: [
                { key: 'quiz_q4_a', correct: false },
                { key: 'quiz_q4_b', correct: true },
                { key: 'quiz_q4_c', correct: true },
                { key: 'quiz_q4_d', correct: false },
            ]
        },
        {
            id: 'q5',
            questionKey: 'quiz_q5',
            options: [
                { key: 'quiz_q5_a', correct: true },
                { key: 'quiz_q5_b', correct: true },
                { key: 'quiz_q5_c', correct: false },
                { key: 'quiz_q5_d', correct: true },
            ]
        }
    ];

    const handleCheckboxChange = (questionId, optionKey) => {
        setAnswers(prev => {
            const current = prev[questionId] || [];
            if (current.includes(optionKey)) {
                return { ...prev, [questionId]: current.filter(k => k !== optionKey) };
            } else {
                return { ...prev, [questionId]: [...current, optionKey] };
            }
        });
    };

    const calculateScore = () => {
        let totalCorrect = 0;
        let userCorrect = 0;

        questions.forEach(question => {
            const userAnswers = answers[question.id] || [];
            question.options.forEach(option => {
                if (option.correct) {
                    totalCorrect++;
                    if (userAnswers.includes(option.key)) {
                        userCorrect++;
                    }
                } else {
                    if (userAnswers.includes(option.key)) {
                        userCorrect = Math.max(0, userCorrect - 0.5);
                    }
                }
            });
        });

        return Math.round((userCorrect / totalCorrect) * 100);
    };

    const handleSubmit = () => {
        const finalScore = calculateScore();
        setScore(finalScore);
        setSubmitted(true);
    };

    const getResultMessage = () => {
        if (score >= 80) return { key: 'quiz_result_excellent' };
        if (score >= 60) return { key: 'quiz_result_good' };
        if (score >= 40) return { key: 'quiz_result_average' };
        return { key: 'quiz_result_poor' };
    };

    if (submitted) {
        const result = getResultMessage();
        return (
            <div className="quiz-container">
                <div className="quiz-result">
                    <h1>{t('quiz_completed')}</h1>
                    <div className="score-display">
                        <span className="score-number">{score}%</span>
                    </div>
                    <p className="result-message">{t(result.key)}</p>
                    <div className="result-summary">
                        <h3>{t('quiz_takeaway')}</h3>
                        <ul>
                            <li>{t('quiz_lesson1')}</li>
                            <li>{t('quiz_lesson2')}</li>
                            <li>{t('quiz_lesson3')}</li>
                            <li>{t('quiz_lesson4')}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h1>{t('quiz_title')}</h1>
                <p>{t('quiz_intro')}</p>
            </div>

            <div className="quiz-questions">
                {questions.map((question, qIndex) => (
                    <div key={question.id} className="quiz-question">
                        <h3>
                            <span className="question-number">{qIndex + 1}</span>
                            {t(question.questionKey)}
                        </h3>
                        <div className="quiz-options">
                            {question.options.map((option) => (
                                <label key={option.key} className="quiz-option">
                                    <input
                                        type="checkbox"
                                        checked={(answers[question.id] || []).includes(option.key)}
                                        onChange={() => handleCheckboxChange(question.id, option.key)}
                                    />
                                    <span className="checkmark"></span>
                                    <span className="option-text">{t(option.key)}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="quiz-submit">
                <button onClick={handleSubmit} className="submit-btn">
                    {t('quiz_submit')}
                </button>
            </div>
        </div>
    );
};

export default Quiz;
