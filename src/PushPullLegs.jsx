import "./PushPullLegs.css";
import PPLAppBar from "./PPLAppBar";
import PPLWorkout from "./PPLWorkout";
import { useState } from "react";

export default function PushPullLegs() {
  const [exercises, setExercises] = useState([]);

  const exerciseMasterList = [
    {
      id: crypto.randomUUID(),
      displayName: "Squat",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 12,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Push Up",
      bodyweight: true,
      category: "Push",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Row",
      bodyweight: true,
      category: "Pull",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Pull Up",
      bodyweight: true,
      category: "Pull",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 5,
      goalRepsWeight: 3,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Overhead Press",
      bodyweight: false,
      category: "Push",
      enabled: true,
      isPossibleBodyweight: false,
      isPossibleWeight: true,
      goalRepsBodyweight: null,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Reverse Lunge",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Forward Lunge",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Single Leg RDL",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Dips",
      bodyweight: true,
      category: "Push",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Pike Push Up",
      bodyweight: true,
      category: "Push",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: false,
      goalRepsBodyweight: 4,
      goalRepsWeight: null,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Diamond Push Up",
      bodyweight: true,
      category: "Push",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Glute Bridge",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Single Leg Squat",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: true,
      goalRepsBodyweight: 8,
      goalRepsWeight: 5,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Supermans",
      bodyweight: true,
      category: "Pull",
      enabled: true,
      isPossibleBodyweight: true,
      isPossibleWeight: false,
      goalRepsBodyweight: 8,
      goalRepsWeight: null,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
      exerciseCompleted: false,
    },
  ];

  //   Update individual set completion
  const toggleSetCompletion = (id, setNumb) => {
    setExercises((prevProgress) => {
      return prevProgress.map((exercise) => {
        if (exercise.id === id && setNumb === "set1") {
          return { ...exercise, set1Complete: !exercise.set1Complete };
        } else if (exercise.id === id && setNumb === "set2") {
          return { ...exercise, set2Complete: !exercise.set2Complete };
        } else if (exercise.id === id && setNumb === "set3") {
          return { ...exercise, set3Complete: !exercise.set3Complete };
        } else {
          return exercise;
        }
      });
    });
  };

  //   Update rep goal
  const increaseReps = (id) => {
    setExercises((prevExercise) => {
      return prevExercise.map((exercise) => {
        if (exercise.id === id && exercise.bodyweight) {
          return {
            ...exercise,
            goalRepsBodyweight: exercise.goalRepsBodyweight + 1,
          };
        } else if (exercise.id === id && !exercise.bodyweight) {
          return { ...exercise, goalRepsWeight: exercise.goalRepsWeight + 1 };
        } else {
          return exercise;
        }
      });
    });
  };
  const decreaseReps = (id) => {
    setExercises((prevExercise) => {
      return prevExercise.map((exercise) => {
        if (exercise.id === id && exercise.bodyweight) {
          return {
            ...exercise,
            goalRepsBodyweight: exercise.goalRepsBodyweight - 1,
          };
        } else if (exercise.id === id && !exercise.bodyweight) {
          return { ...exercise, goalRepsWeight: exercise.goalRepsWeight - 1 };
        } else {
          return exercise;
        }
      });
    });
  };

  // Toggle Global Bodyweight Only Option
  const [bodyweightOnly, setBodyweightOnly] = useState(false);
  const toggleBodyweightOnly = () => {
    setBodyweightOnly(!bodyweightOnly);
  };

  // Generate new random workout
  const getRandExercise = (type) => {
    const choices = exerciseMasterList;
    let selection = {};
    while ((selection = {})) {
      let index = Math.floor(Math.random() * choices.length);
      if (bodyweightOnly) {
        if (choices[index].category === type && choices[index].isPossibleBodyweight) {
          selection = choices[index];
          return selection;
        }
      } else if (choices[index].category === type) {
        selection = choices[index];
        return selection;
      }
    }
  };

  const newWorkout = () => {
    setExercises([]);
    setExercises((priorWorkout) => {
      return [
        ...priorWorkout,
        getRandExercise("Push"),
        getRandExercise("Pull"),
        getRandExercise("Legs"),
      ];
    });
  };

  //   Toggle bodyweight vs weighted
  const toggleWeightMode = (id) => {
    setExercises((prevProgress) => {
      return prevProgress.map((exercise) => {
        if (
          exercise.id === id &&
          exercise.isPossibleBodyweight &&
          exercise.isPossibleWeight
        ) {
          return { ...exercise, bodyweight: !exercise.bodyweight };
        } else {
          return exercise;
        }
      });
    });
  };

  return (
    <div>
      <PPLAppBar
        generateWorkout={newWorkout}
        toggleBodyweightOnly={toggleBodyweightOnly}
        bodyweightOnly={bodyweightOnly}
      />
      <PPLWorkout
        exercises={exercises}
        updateSet={toggleSetCompletion}
        toggleWeightMode={toggleWeightMode}
        increaseReps={increaseReps}
        decreaseReps={decreaseReps}
      />
    </div>
  );
}
