// lib/utils.js

import { SCORE_RANGES } from './constants';

export const getScoreAnalysis = (score) => {
  const analysis = SCORE_RANGES.find(
    range => score >= range.min && score <= range.max
  );
  
  return analysis || SCORE_RANGES[SCORE_RANGES.length - 1];
};

export const calculateTotalScore = (answers) => {
  return Object.values(answers).reduce(
    (sum, val) => sum + (val === 'yes' ? 1 : 0), 
    0
  );
};

export const allQuestionsAnswered = (answers, totalQuestions) => {
  return Object.keys(answers).length === totalQuestions &&
    Object.values(answers).every(answer => answer !== undefined);
};