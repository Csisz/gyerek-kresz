import { useState, useEffect } from 'react';

const STORAGE_KEY = 'kresz-kaland-profile';

const defaultProfile = {
  name: "",
  age: 5,
  avatar: "👧",
  stars: 0,
  badges: [],
  completed_lessons: [],
  quiz_scores: [],
  practice_scores: [],
  competition_results: []
};

export function useLocalProfile() {
  const [profile, setProfile] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return { ...defaultProfile, ...JSON.parse(stored) };
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
    return defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  }, [profile]);

  const addStars = (count) => {
    setProfile(p => ({ ...p, stars: p.stars + count }));
  };

  const addBadge = (badgeId) => {
    setProfile(p => {
      if (p.badges.includes(badgeId)) return p;
      return { ...p, badges: [...p.badges, badgeId] };
    });
  };

  const completeLesson = (lessonId) => {
    setProfile(p => {
      if (p.completed_lessons.includes(lessonId)) return p;
      return { ...p, completed_lessons: [...p.completed_lessons, lessonId] };
    });
  };

  const addQuizScore = (score) => {
    setProfile(p => ({
      ...p,
      quiz_scores: [...p.quiz_scores, { ...score, date: new Date().toISOString() }]
    }));
  };

  const addPracticeScore = (taskScore) => {
    setProfile(p => ({
      ...p,
      practice_scores: [
        ...p.practice_scores.filter(s => s.task_id !== taskScore.task_id),
        { ...taskScore, date: new Date().toISOString() }
      ]
    }));
  };

  const addCompetitionResult = (result) => {
    setProfile(p => ({
      ...p,
      competition_results: [...p.competition_results, { ...result, date: new Date().toISOString() }]
    }));
  };

  const resetProfile = () => {
    setProfile(defaultProfile);
  };

  const updateName = (name) => {
    setProfile(p => ({ ...p, name }));
  };

  const updateAvatar = (avatar) => {
    setProfile(p => ({ ...p, avatar }));
  };

  return {
    profile,
    setProfile,
    addStars,
    addBadge,
    completeLesson,
    addQuizScore,
    addPracticeScore,
    addCompetitionResult,
    resetProfile,
    updateName,
    updateAvatar
  };
}
