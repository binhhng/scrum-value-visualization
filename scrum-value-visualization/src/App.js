import React, { useState, useEffect } from 'react';
import './App.css';

const ScrumValuesForm = () => {
  const [values, setValues] = useState([
    {
      name: 'Courage',
      questions: [
        {
          question: 'I work on the next highest priority Product Backlog Item (I do not cherry pick the work I pick up in the Sprint)',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'If I see something that is wrong with what I\'m being asked to do, I will say so.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I will question & reproach my team members if I feel that they are doing something wrong',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'Regardless of the person talking, I will correct them if I believe that they are incorrect.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I will stand firm if I believe I am right, even if I\'m in the minority within the group.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
      ],
      points: 0,
    },
    {
      name: 'Commitment',
      questions: [
        {
          question: 'I always know what the sprint goal is and how my work supports it.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I do everything I can to ensure we achieve the goals of the sprint.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'In my current team, I have never thought of taking a sick day to avoid going into work.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I always arrive on time for the events, my colleagues never have to wait for me to start the event.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I know what it means to say that an item is done, i.e. I know the criteria that meets our Definition of Done.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
      ],
      points: 0,
    },
    {
      name: 'Focus',
      questions: [
        {
          question: 'Whilst working on a story I do not get distracted.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'If I am not enjoying the work in a story I still give it the attention it needs.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'When enjoying working on a story I will not over work a story just to prolong it.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I do not procrastinate when working on a story.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'As soon as the story is ready to move into a new state, I will tell my colleagues and either hand it over or ensure that they know it is ready to pick up.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
      ],
      points: 0,
    },
    {
      name: 'Openness',
      questions: [
        {
          question: 'I do not shy away from telling difficult news to team members and stakeholders',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I do not hide away difficult issues in the hope that they will sort themselves out.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'If something / someone is annoying me I will address it / tell them.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'My colleagues can judge what state of mind I\'m in, I can share my feelings with my them.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I always say the true state of an item, and do not over/under play it.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
      ],
      points: 0,
    },
    {
      name: 'Respect',
      questions: [
        {
          question: 'I listen with equal intensity regardless of who is talking.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'When listening to people I never talk over them.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I value everyone\'s opinion equally.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I am never concerned who works on what item in the backlog.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
        {
          question: 'I feel that my opinion is respected and that I have an equal say in the team.',
          options: [
            { value: 'no', label: 'No' },
            { value: 'yes', label: 'Yes' },
          ],
        },
      ],
      points: 0,
    },
    
  ]);

  // useEffect(() => {
  //   document.title = `Scrum Values - ${getTotalPoints()} points`;
  // });

  const handleSelectChange = (value, index, parentIndex) => {
    const newValues = values.slice();
    newValues[parentIndex].questions[index].answer = value; // add answer property to questions array
    const currentAnswer = newValues[parentIndex].points;

    if (value === 'yes') {
      newValues[parentIndex].points = currentAnswer + 1;
    } else if (value === 'no' && currentAnswer > 0) {
      newValues[parentIndex].points = currentAnswer - 1;
    }
    setValues(newValues);
  };

  // const getTotalPoints = () => {
  //   return values.reduce((acc, value) => acc + value.points, 0);
  // };

  return (
    <div className='ScrumValuesForm'>
      {values.map((value, index) => (
        <div key={index}>
          <h3>{value.name}</h3>
          <ul>
            {value.questions.map((question, i) => (
              <li key={i}>
                <label>
                  {question.question}
                  <select
                    onChange={(e) => handleSelectChange(e.target.value, i, index)}
                  >
                    {/* <option value="no" selected>No</option> */}
                    {question.options.map((option, j) => (
                      <option key={j} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </li>
            ))}
          </ul>
          <p>Total Points: {value.points}</p>
        </div>
      ))}
      {/* <h3>Total Points: {getTotalPoints()}</h3> */}
    </div>
  );
};

export default ScrumValuesForm;
