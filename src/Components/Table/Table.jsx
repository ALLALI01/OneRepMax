import React, { useState } from 'react';
import styles from './Table.module.css';

function Table() {
        const initialWorkoutCycle = [
        { week: "Test Week", sets: 1, reps: 1, exercises: ["Test1", "Test2", "Test3"], weight: "{input}"},
        { week: 1, sets: 4, reps: 6, exercises: ["Test1", "Test2", "Test3"], weight: "70% of 1RM"},
        { week: 2, sets: 4, reps: 6, exercises: ["Test1", "Test2", "Test3"], weight: "72% of 1RM"},
        { week: 3, sets: 4, reps: 5, exercises: ["Test1", "Test2", "Test3"], weight: "76% of 1RM"},
        { week: "4 Rest", sets: 4, reps: 6, exercises: ["Test1", "Test2", "Test3"], weight: "60% of 1RM, REST WEEK"},
        { week: 5, sets: 3, reps: 5, exercises: ["Test1", "Test2", "Test3"], weight: "78% of 1RM"},
        { week: 6, sets: 4, reps: 4, exercises: ["Test1", "Test2", "Test3"], weight: "83% of 1RM"},
        { week: 7, sets: 4, reps: 3, exercises: ["Test1", "Test2", "Test3"], weight: "87% of 1RM"},
        { week: "8 Rest", sets: 3, reps: 5, exercises: ["Test1", "Test2", "Test3"], weight: "60% of 1RM, REST WEEK"},
        { week: 9, sets: 4, reps: 3, exercises: ["Test1", "Test2", "Test3"], weight: "88% of 1RM"},
        { week: 10, sets: 3, reps: 2, exercises: ["Test1", "Test2", "Test3"], weight: "91% of 1RM"},
        { week: 11, sets: 3, reps: 1, exercises: ["Test1", "Test2", "Test3"], weight: "97% of 1RM"},
        { week: "12 Rest", sets: 4, reps: 3, exercises: ["Test1", "Test2", "Test3"], weight: "65% of 1RM, REST WEEK"},
    ]

    const [workoutCycle, setWorkoutCycle] = useState(initialWorkoutCycle);

    const repeatCycle = () => {
        setWorkoutCycle(prevCycle => [...prevCycle, ...initialWorkoutCycle]);
    }

  return (
    <div className={styles.routineContainer}>
      <h1>Your 12-Week Routine</h1>
      <table className={styles.tableContainer}>
        <caption>Cycle 1</caption>
        <thead>
          <tr>
            <th>Week</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {workoutCycle.map((weekData) => (
            <React.Fragment key={weekData.week}>
              {weekData.exercises.map((exercise, index) => (
                <tr key={`${weekData.week}-${index}`}>
                  {index === 0 && <td rowSpan={weekData.exercises.length}>{weekData.week}</td>}
                  <td>{weekData.exercises}</td>
                  <td>{weekData.sets}</td>
                  <td>{weekData.reps}</td>
                  <td>{weekData.weight}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
        <div className={styles.buttonContainer}>
            <button className={styles.tableButton} onClick={repeatCycle}>Repeat Cycle</button>
            <button className={styles.tableButton} onClick={() => alert('Calculate functionality not implemented yet.')}>Calculate Weight</button>
        </div>
    </div>
  );
}

export default Table;


// Separate into tables of "12 week cycles" starting with a test week, add button to repeat cycle
// Each cycle should have a caption with the cycle number
// Each week should have each exercise listed, and sets/reps for that week
// Each exercise should have weight calculation based on 1RM
// Pull exercises from local storage

// Week 1: 4 sets of 6, 70% of 1RM
// Week 2: 4 sets of 6, 72% of 1RM
// Week 3: 4 sets of 5, 76% of 1RM
// Week 4: 4 sets of 6, 60% of 1RM, REST WEEK
// Week 5: 3 sets of 5, 78% of 1RM
// Week 6: 4 sets of 4, 83% of 1RM
// Week 7: 4 sets of 3, 87% of 1RM
// Week 8: 3 sets of 5, 60% of 1RM, REST WEEK
// Week 9: 4 sets of 3, 88% of 1RM
// Week 10: 3 sets of 2, 91% of 1RM
// Week 11: 3 sets of 1, 97% of 1RM
// Week 12: 4 sets of 3, 65% of 1RM, REST WEEK
// Test Week 13: The goal is to hit a higher 1RM for the next routine cycle