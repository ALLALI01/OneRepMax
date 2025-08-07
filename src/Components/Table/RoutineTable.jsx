import React, { useState, useMemo } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import styles from './RoutineTable.module.css';

function RoutineTable({ selectedExercises = [] }) {

  const [testWeight, setTestWeight] = useState([]);

  const loadedExercises = selectedExercises.map(exercise => exercise.name);
  
  const initialWorkoutCycle = [
    { week: "Test Week", sets: 1, reps: 1, exercises: loadedExercises, weight: testWeight },
    { week: 1, sets: 4, reps: 6, exercises: loadedExercises, weight: "70%" },
    { week: 2, sets: 4, reps: 6, exercises: loadedExercises, weight: "72%" },
    { week: 3, sets: 4, reps: 5, exercises: loadedExercises, weight: "76%" },
    { week: "4 Rest", sets: 4, reps: 6, exercises: loadedExercises, weight: "60%" },
    { week: 5, sets: 3, reps: 5, exercises: loadedExercises, weight: "78%" },
    { week: 6, sets: 4, reps: 4, exercises: loadedExercises, weight: "83%" },
    { week: 7, sets: 4, reps: 3, exercises: loadedExercises, weight: "87%" },
    { week: "8 Rest", sets: 3, reps: 5, exercises: loadedExercises, weight: "60%" },
    { week: 9, sets: 4, reps: 3, exercises: loadedExercises, weight: "88%" },
    { week: 10, sets: 3, reps: 2, exercises: loadedExercises, weight: "91%" },
    { week: 11, sets: 3, reps: 1, exercises: loadedExercises, weight: "97%" },
    { week: "12 Rest", sets: 4, reps: 3, exercises: loadedExercises, weight: "65%" },
  ];

  const handleCalculateWeight = () => {
      setWorkoutCycle((prev) => {
        const updated = [...prev];
        const numCycles = Math.ceil(prev.length / 13);

        // Loop through each cycle
        for (let cycleIdx = 0; cycleIdx < numCycles; cycleIdx++) {
          const testWeekIdx = cycleIdx * 13;
          const testWeek = updated[testWeekIdx];
          const testWeightObj = testWeight[cycleIdx] || {};

          // Update the following 12 weeks based on the test week
          for (let i = 1; i < 13; i++) {
            const weekIdx = testWeekIdx + i;
            if (!updated[weekIdx]) continue;

            // Get the percentage from initialWorkoutCycle
            const week = updated[weekIdx];

            // Ensure we have a valid percentage to calculate
            const templateWeek = initialWorkoutCycle[i];
            const percentMatch = typeof templateWeek.weight === "string" && templateWeek.weight.match(/(\d+)%/);
            if (!percentMatch) continue;

            // Calculate new weights for each exercise
            const percent = parseFloat(percentMatch[1]) / 100;
            const newWeight = {};

            // Loop through each exercise to calculate the new weight
            week.exercises.forEach((exercise) => {
              const oneRM = parseFloat(testWeightObj[exercise]);
              if (!isNaN(oneRM)) {
                newWeight[exercise] = Math.round(oneRM * percent);
              } else {
                newWeight[exercise] = "";
              }
            });

            updated[weekIdx] = { ...week, weight: newWeight };
          }
        }
        return updated;
      });
    };

  const [workoutCycle, setWorkoutCycle] = useState(initialWorkoutCycle);

  const cycles = useMemo(() => {
    const cycleArray = [];
    for (let i = 0; i < workoutCycle.length; i += 13) {
      cycleArray.push(workoutCycle.slice(i, i + 13));
    }
    return cycleArray;
  }, [workoutCycle]);

  const adjustedTestWeight = useMemo(() => {
    const currentCycles = cycles.length;
    const currentTestWeightLength = testWeight.length;

    if (currentTestWeightLength < currentCycles) {
      return [
        ...testWeight,
        ...Array(currentCycles - currentTestWeightLength).fill(""),
      ];
    } else if (currentTestWeightLength > currentCycles) {
      return testWeight.slice(0, currentCycles);
    }

    return testWeight;
  }, [testWeight, cycles.length]);

  const handleTestWeekInput = (e, cycleIdx) => {
    const value = e.target.value;

    setTestWeight((prev) => {
      const updated = [...prev];
      updated[cycleIdx] = value;
      return updated;
    });

    setWorkoutCycle((prev) => {
      const globalIndexOfTestWeek = cycleIdx * 13;
      return prev.map((week, idx) => {
        if (idx === globalIndexOfTestWeek) {
          return { ...week, weight: value };
        }
        return week;
      });
    });
  };

  const repeatCycle = () => {
    setWorkoutCycle((prevCycle) => [...prevCycle, ...initialWorkoutCycle]);
  };

  const captionColors = [
    '#8785FF', // tropical indigo
    '#00B7FF', // deep sky blue
    '#0FFFFF', // aqua
    '#20B2AA', // light sea green
    '#62FF62', // screamin' green
  ];

  return (
    <div className={styles.routineContainer}>
      <h1>Your Custom Routine</h1>
      {cycles.map((cycle, cycleIdx) => (
        <Table className={styles.tableContainer} key={cycleIdx}>
          <caption
            className={styles.cycleCaption} style={{ backgroundColor: captionColors[cycleIdx % captionColors.length] }}>Cycle {cycleIdx + 1}
          </caption>
          <Thead>
            <Tr>
              <Th>Week</Th>
              <Th>Exercise</Th>
              <Th>Sets</Th>
              <Th>Reps</Th>
              <Th>Weight</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cycle.map((weekData, weekIdx) => (
              <React.Fragment key={weekData.week + '-' + cycleIdx}>
                {weekData.exercises.map((exercise, index) => (
                  <Tr key={`${weekData.week}-${index}-${cycleIdx}`}>
                    {index === 0 && <Td rowSpan={weekData.exercises.length}>{weekData.week}</Td>}
                    <Td>{exercise}</Td>
                    {index === 0 && <Td rowSpan={weekData.exercises.length}>{weekData.sets}</Td>}
                    {index === 0 && <Td rowSpan={weekData.exercises.length}>{weekData.reps}</Td>}
                    <Td id="tableWeightData">
                      {weekIdx === 0 ? (
                        <input
                          type="number"
                          name={exercise}
                          value={
                            (testWeight[cycleIdx] && testWeight[cycleIdx][exercise]) || ""
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            setTestWeight((prev) => {
                              const updated = [...prev];
                              if (!updated[cycleIdx]) updated[cycleIdx] = {};
                              updated[cycleIdx] = { ...updated[cycleIdx], [exercise]: value };
                              return updated;
                            });
                            setWorkoutCycle((prev) => {
                              const globalIndexOfTestWeek = cycleIdx * 13;
                              return prev.map((week, idx) => {
                                if (idx === globalIndexOfTestWeek) {
                                  const newWeight = { ...(week.weight || {}) };
                                  newWeight[exercise] = value;
                                  return { ...week, weight: newWeight };
                                }
                                return week;
                              });
                            });
                          }}
                          placeholder="Enter 1RM"
                          className={styles.testWeekInput}
                        />
                      ) : (
                        typeof weekData.weight === "object"
                          ? weekData.weight[exercise] || ""
                          : weekData.weight
                      )}
                    </Td>
                  </Tr>
                ))}
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      ))}
      <div className={styles.buttonContainer}>
        <button className={styles.tableButton} onClick={repeatCycle}>Add New Cycle</button>
        <button className={styles.tableButton} onClick={handleCalculateWeight}>Calculate Weight</button>
      </div>
    </div>
  );
}

export default RoutineTable;


// DONE:
// Separate into tables of "12 week cycles" starting with a test week, add button to repeat cycle
// Each week should have each exercise listed, and sets/reps for that week
// Each cycle should have a caption with a unique cycle number
// Add color changing cycles for separation
// Pull exercises from local storage to persist data from exercises page
// Write functionality to calculate weight based on 1RM input from TEST WEEK


// TO DO:
// Add functionality to save the routine to local storage to track progress


// *** STRETCH GOAL ***
// Add functionality to input last set actual reps for each exercise
// Add functionality to increase or decrease weight based on previous week last set actual reps for dynamic routine adjustment (IE: if else statement, if last set actual reps
// is less than target, decrease weight by 5%, if last set actual reps is greater than target, increase weight by 5%)
// Add user logins to allow multi-device viewing of routines and progress


// Test Week: 1 set of 1, input max
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
// New Cycle Test Week: The goal is to hit a higher 1RM than previous test week