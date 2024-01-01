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
    //   isPossibleBodyweight: true,
    //   isPossibleWeights: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Push Up",
      bodyweight: true,
      category: "Push",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Row",
      bodyweight: true,
      category: "Pull",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Pull Up",
      bodyweight: true,
      category: "Pull",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Squat",
      bodyweight: false,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Overhead Press",
      bodyweight: false,
      category: "Push",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Reverse Lunge",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Reverse Lunge",
      bodyweight: false,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Forward Lunge",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Forward Lunge",
      bodyweight: false,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Single Leg RDL",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Single Leg RDL",
      bodyweight: false,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Pike Push Up",
      bodyweight: true,
      category: "Push",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Diamond Push Up",
      bodyweight: true,
      category: "Push",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Glute Bridge",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Single Leg Squat",
      bodyweight: true,
      category: "Legs",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
    {
      id: crypto.randomUUID(),
      displayName: "Supermans",
      bodyweight: true,
      category: "Pull",
      enabled: true,
      reps: 12,
      set1Complete: false,
      set2Complete: false,
      set3Complete: false,
    },
  ];

  //   Update Set completion
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

  // Generate new random workout
  const getRandExercise = (type) => {
    const choices = exerciseMasterList;
    let selection = {};
    while ((selection = {})) {
      let index = Math.floor(Math.random() * choices.length);
      if (choices[index].category === type) {
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

  return (
    <div>
      <PPLAppBar gernerateWorkout={newWorkout} />
      <PPLWorkout exercises={exercises} updateSet={toggleSetCompletion} />
    </div>
  );
}
