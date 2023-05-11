import React, { useState, useEffect } from 'react';
import './ScrumValueForm.css';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const ScrumValuesForm = () => {
    const [values, setValues] = useState([
        {
            name: 'Courage',
            questions: [
                {
                    question: 'I work on the next highest priority Product Backlog Item (I do not cherry pick the work I pick up in the Sprint)',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'If I see something that is wrong with what I\'m being asked to do, I will say so.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I will question & reproach my team members if I feel that they are doing something wrong',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'Regardless of the person talking, I will correct them if I believe that they are incorrect.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I will stand firm if I believe I am right, even if I\'m in the minority within the group.',
                    options: ['No', 'Yes'],
                },
            ],
            points: 0,
        },
        {
            name: 'Commitment',
            questions: [
                {
                    question: 'I always know what the sprint goal is and how my work supports it.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I do everything I can to ensure we achieve the goals of the sprint.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'In my current team, I have never thought of taking a sick day to avoid going into work.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I always arrive on time for the events, my colleagues never have to wait for me to start the event.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I know what it means to say that an item is done, i.e. I know the criteria that meets our Definition of Done.',
                    options: ['No', 'Yes'],
                },
            ],
            points: 0,
        },
        {
            name: 'Focus',
            questions: [
                {
                    question: 'Whilst working on a story I do not get distracted.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'If I am not enjoying the work in a story I still give it the attention it needs.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'When enjoying working on a story I will not over work a story just to prolong it.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I do not procrastinate when working on a story.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'As soon as the story is ready to move into a new state, I will tell my colleagues and either hand it over or ensure that they know it is ready to pick up.',
                    options: ['No', 'Yes'],
                },
            ],
            points: 0,
        },
        {
            name: 'Openness',
            questions: [
                {
                    question: 'I do not shy away from telling difficult news to team members and stakeholders',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I do not hide away difficult issues in the hope that they will sort themselves out.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'If something / someone is annoying me I will address it / tell them.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'My colleagues can judge what state of mind I\'m in, I can share my feelings with my them.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I always say the true state of an item, and do not over/under play it.',
                    options: ['No', 'Yes'],
                },
            ],
            points: 0,
        },
        {
            name: 'Respect',
            questions: [
                {
                    question: 'I listen with equal intensity regardless of who is talking.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'When listening to people I never talk over them.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I value everyone\'s opinion equally.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I am never concerned who works on what item in the backlog.',
                    options: ['No', 'Yes'],
                },
                {
                    question: 'I feel that my opinion is respected and that I have an equal say in the team.',
                    options: ['No', 'Yes'],
                },
            ],
            points: 0,
        },

    ]);

    const data = {
        labels: [values[0].name, values[1].name, values[2].name, values[3].name, values[4].name],
        datasets: [
            {
                label: 'Scrum values visualization',
                data: [values[0].points, values[1].points, values[2].points, values[3].points, values[4].points],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                scaleStep: 1,
            },
        ],
    }

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 5,
                ticks: {
                    stepSize: 1
                }
            }
        }
    };

    const handleSelectChange = (value, index, parentIndex) => {
        const newValues = values.slice();
        newValues[parentIndex].questions[index].answer = value;
        const currentAnswer = newValues[parentIndex].points;

        if (value === 'Yes') {
            newValues[parentIndex].points = currentAnswer + 1;
        } else if (value === 'No' && currentAnswer > 0) {
            newValues[parentIndex].points = currentAnswer - 1;
        }
        setValues(newValues);
    };



    return (
        <div className='container'>
            <h3 className='tutorial'>Answer 5 questions for each value by selecting yes or no. The result will be generate automatically.</h3>
            <div className='row' >
                <div className='col-6'>
                    <div className='ScrumValuesForm'>
                        {values.map((value, index) => (
                            <div key={index}>
                                <h3 className='questions'>{value.name} - point: {value.points}</h3>
                                {value.questions.map((question, i) => (
                                    <div className='row question' key={i}>
                                        <div className='col-10'>
                                            {question.question}
                                        </div>
                                        <div className='col-2'>
                                            <select
                                                onChange={(e) => handleSelectChange(e.target.value, i, index)}
                                            >
                                                {question.options.map((option, j) => (
                                                    <option key={j} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='col-6'>
                    <Radar data={data} options={options} />
                </div>
            </div>
        </div>
    );
};

export default ScrumValuesForm;
