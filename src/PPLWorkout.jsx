// import * as React from "react";
import List from "@mui/material/List";
import { useState } from "react";
import PPLWorkoutItem from "./PPLWorkoutItem";

const starterExercises = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    name: "Row",
    equipment: "bodyweight",
    category: "Pull",
    reps: 12,
    sets: 3,
    set1: false,
    set2: false,
    set3: false,
  },
];

export default function PPLWorkout() {
  const [exercises, setExercises] = useState(starterExercises);

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

  return (
    // <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#333333" }}>
      {exercises.map((exercise) => (
        <PPLWorkoutItem exercise={exercise} key={exercise.id} updateSet={toggleSetCompletion} />
      ))}
    </List>
  );
}
