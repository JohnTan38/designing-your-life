// lib/constants.js

export const QUESTIONS = [
  " I enjoy almost everyday at this job",
  " This job is one of the stepping stones in my career, and I want to do a good job in order to have better opportunities in the future",
  " I am more interested in this job than I was when I started",
  " I think I might be moving forward or potentially have found my calling with this job",
  " I enjoy learning new things on the job, almost everyday",
  " Setbacks at work do not discourage me. I do not give up easily",
  " I like setting personal and professional goals, and I use this job to accomplish my goals",
  " I have the autonomy to do this job the way I think I think best",
  " I enjoy collaborating with my peers at this job. It is one of the best parts of this job",
  " Someday I hope to master all the elements of this job, move on to the next level, and keep getting better"
];

export const SECTIONS = [
  { id: 0, title: "Growth Mindset", key: "mindset" },
  { id: 1, title: "GRIT", key: "grit" },
  { id: 2, title: "Try Stuff", key: "assessment" }
];

export const GRIT_ASSETS = [
  {
    num: "1",
    title: " Enjoyment",
    text: " Everything starts with enjoying what you do. To persevere, you need to be intrinsically interested in your subject."
  },
  {
    num: "2",
    title: " Practice",
    text: " Next comes the capacity to practice. You must devote yourself to the kind of deliberate and well-informed practice that leads to mastery. And you practice everyday, every week, every year - there is no end to practice - it is an end in itself."
  },
  {
    num: "3",
    title: " Purpose",
    text: " Third is purpose. You have to believe that your work matters to something and someone greater than yourself."
  },
  {
    num: "4",
    title: " Hope",
    text: " And, finally, you have to be a hopeful person. Hope is what keeps you going even when things get tough and your plans are not working. Hope is related to optimism and a deeper sense that your mission is ultimately possible."
  }
];

export const SCORE_RANGES = [
  {
    min: 1,
    max: 2,
    range: "1-2 points",
    message: " You are working for a living; your current job is probably just a job."
  },
  {
    min: 3,
    max: 4,
    range: "3-4 points",
    message: " You are enjoying your job, and you may be working on a career."
  },
  {
    min: 5,
    max: 6,
    range: "5-6 points",
    message: " You are getting grittier, and working on something you value."
  },
  {
    min: 7,
    max: 8,
    range: "7-8 points",
    message: " You might have found your calling."
  },
  {
    min: 9,
    max: 10,
    range: "9-10 points",
    message: " Excellent! I wish I had your job, and probably your life."
  }
];

export const RESULTS_STORAGE_KEY = "dyl-results";
