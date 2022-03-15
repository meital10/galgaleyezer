import { createContext } from "react";

export const GoalContext = createContext({ goal: null, setGoal: null });

export const SubgoalContext = createContext({
  subgoal: null,
  setSubgoal: null,
});
