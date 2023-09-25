export type ExcerciseType = {
  weight: number;
  repHi: number;
  repLow: number;
  notes: string;
  tempo: string;
};

export type WorkoutT = { title: string; sets: ExcerciseType[] };

export const PushWorkout: WorkoutT[] = [
  {
    title: "DB Lateral Raise",
    sets: [
      {
        repLow: 11,
        repHi: 15,
        tempo: "1 count in contraction",
        weight: 7,
        notes: "Elbows slightly infront of torso",
      },
      {
        repLow: 8,
        repHi: 10,
        tempo: "1 count in contraction",
        weight: 10,
        notes: "DROPSET. Elbows slightly infront of torso. Incl partial reps",
      },
    ],
  },
  {
    title: "Smith Machine Shoulder Press",
    sets: [
      {
        repLow: 6,
        repHi: 10,
        tempo: "2 second eccentrics",
        weight: 20,
        notes:
          "Dont go too deep here, bring bar down to about eye level and drive back up.",
      },
      {
        repLow: 10,
        repHi: 12,
        tempo: "2 second eccentrics",
        weight: 20,
        notes:
          "Dont go too deep here, bring bar down to about eye level and drive back up.",
      },
    ],
  },
  {
    title: "Chest Press Machine",
    sets: [
      {
        repLow: 6,
        repHi: 10,
        tempo: "2 second eccentrics",
        weight: 70,
        notes: "",
      },
      {
        repLow: 4,
        repHi: 8,
        tempo: "2 second eccentrics",
        weight: 85,
        notes: "",
      },
      {
        repLow: 10,
        repHi: 12,
        tempo: "2 second eccentrics",
        weight: 60,
        notes:
          "Go lighter than set 1 in this set, focus on form and maximum chest contraction",
      },
    ],
  },
  {
    title: "Horizontal Chest Fly",
    sets: [
      {
        repLow: 8,
        repHi: 10,
        tempo: "3 second eccentrics + 1 count in the contraction.",
        weight: 12.5,
        notes:
          "Easy to go too heavy on this one, use the tempo to make it burn rather than the weight itself. Connect with the chest.",
      },
      {
        repLow: 10,
        repHi: 12,
        tempo: "3 second eccentrics + 1 count in the contraction.",
        weight: 15,
        notes:
          "Easy to go too heavy on this one, use the tempo to make it burn rather than the weight itself. Connect with the chest.",
      },
      {
        repLow: 11,
        repHi: 15,
        tempo: "3 second eccentrics + 1 count in the contraction.",
        weight: 10,
        notes:
          "Easy to go too heavy on this one, use the tempo to make it burn rather than the weight itself. Connect with the chest.",
      },
    ],
  },
  {
    title: "Tricep Rope Extension",
    sets: [
      {
        repLow: 8,
        repHi: 10,
        tempo: "2 second eccentrics. 1 second in the contraction, squeeze HARD",
        weight: 25,
        notes: "Elbows nice and tight to the torso",
      },
      {
        repLow: 10,
        repHi: 12,
        tempo: "2 second eccentrics. 1 second in the contraction, squeeze HARD",
        weight: 30,
        notes: "Elbows nice and tight to the torso",
      },
      {
        repLow: 11,
        repHi: 15,
        tempo: "2 second eccentrics. 1 second in the contraction, squeeze HARD",
        weight: 25,
        notes: "Elbows nice and tight to the torso",
      },
    ],
  },
  {
    title: "EZ Bar Skull Crushers",
    sets: [
      {
        repLow: 8,
        repHi: 10,
        tempo: "3 second eccentrics",
        weight: 25,
        notes:
          "Elbows pointed straight up toward the ceiling and locked in place",
      },
      {
        repLow: 11,
        repHi: 15,
        tempo: "3 second eccentrics",
        weight: 30,
        notes:
          "Elbows pointed straight up toward the ceiling and locked in place",
      },
      {
        repLow: 11,
        repHi: 15,
        tempo: "3 second eccentrics",
        weight: 25,
        notes:
          "Elbows pointed straight up toward the ceiling and locked in place",
      },
    ],
  },
  {
    title: "Ab Crunch",
    sets: [
      {
        repLow: 0,
        repHi: 0,
        tempo: "1 count in the contraction. To fatigue",
        weight: 0,
        notes: "Keep eyes and chest towards the ceiling throughout",
      },
    ],
  },
];

export const WorkoutsDB: { title: string, workout: WorkoutT[] }[] = [
  {
    title: "Push Workout",
    workout: PushWorkout
  },
];
