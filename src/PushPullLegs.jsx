import "./PushPullLegs.css";
import PPLAppBar from "./PPLAppBar";
import PPLWorkout from "./PPLWorkout";
import { useState } from "react";

export default function PushPullLegs() {
  const [exercises, setExercises] = useState([]);

  const exerciseMasterList = [
    {
      id: crypto.randomUUID(),
      name: "Squat",
      equipment: "bodyweight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Push Up",
      equipment: "bodyweight",
      category: "Push",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Row",
      equipment: "bodyweight",
      category: "Pull",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Pull Up",
      equipment: "bodyweight",
      category: "Pull",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Squat",
      equipment: "weight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Overhead Press",
      equipment: "weight",
      category: "Push",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Reverse Lunge",
      equipment: "bodyweight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Reverse Lunge",
      equipment: "weight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Forward Lunge",
      equipment: "bodyweight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Forward Lunge",
      equipment: "weight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Single Leg RDL",
      equipment: "bodyweight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Single Leg RDL",
      equipment: "weight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Pike Push Up",
      equipment: "bodyweight",
      category: "Push",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Diamond Push Up",
      equipment: "bodyweight",
      category: "Push",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Glute Bridge",
      equipment: "bodyweight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Single Leg Squat",
      equipment: "bodyweight",
      category: "Legs",
      reps: 12,
      sets: 3,
      set1: false,
      set2: false,
      set3: false,
    },
  ];

  //   Update Set completion
  const toggleSetCompletion = (id, setNumb) => {
    setExercises((prevProgress) => {
      return prevProgress.map((exercise) => {
        if (exercise.id === id && setNumb === "set1") {
          return { ...exercise, set1: !exercise.set1 };
        } else if (exercise.id === id && setNumb === "set2") {
          return { ...exercise, set2: !exercise.set2 };
        } else if (exercise.id === id && setNumb === "set3") {
          return { ...exercise, set3: !exercise.set3 };
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
