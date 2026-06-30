import { 
  navigateTo 
} from "../core/navigation.js";

import { 
  moveToNextQuestion, 
  restartQuiz, 
  restartQuizState, 
  selectAnswer, 
  submitAnswer 
} from "../core/quizLogic.js";

import { 
  appState 
} from "../core/state.js";

import { 
  clearQuizSession 
} from "../services/auth/quizSessionService.js";

import { 
  startFreshQuiz 
} from "../services/quiz/quizService.js";

import { 
  startQuestionTimer, 
  startQuizTimer 
} from "../services/quiz/timerService";

export function handleQuizAction(
  action,
  target
) {

  switch (action) {
  
    /* ---------------------------------------------------
      START QUIZ
      --------------------------------------------------- */

    case 'begin-custom-quiz': {

      const categorySelect =
        document.querySelector(
          '#quiz-category'
        );

      const difficultySelect =
        document.querySelector(
          '#quiz-difficulty'
        );

      appState.quiz.category =
        categorySelect?.value || 'all';

      appState.quiz.difficulty =
        difficultySelect?.value || 'all';

      const started =
        startFreshQuiz();

      if (!started) {
        return;
      }

      navigateTo('quiz');

      return true;

    }
    
    case 'start-quiz':

      /* -----------------------------------------
        Prevent duplicate navigation
        only if already actively inside quiz
        ----------------------------------------- */

      if (
        appState.currentScreen ===
        'quiz'
      ) {
        return;
      }

      /* -----------------------------------------
        Initialize fresh quiz session
        only if quiz not already active
        ----------------------------------------- */

      startFreshQuiz();

      navigateTo('quiz');

      return true;

    /* ---------------------------------------------------
        ANSWER SELECTION
        --------------------------------------------------- */

    case 'select-answer':

      selectAnswer(
        Number(
          target.dataset.index
        )
      );

      return true;

    /* ---------------------------------------------------
        SUBMIT ANSWER
        --------------------------------------------------- */

    case 'submit-answer':

      submitAnswer();

      return true;

    /* ---------------------------------------------------
        NEXT QUESTION
        --------------------------------------------------- */

    case 'next-question':

      moveToNextQuestion();

      return true;

    /* ---------------------------------------------------
        RESTART QUIZ
        --------------------------------------------------- */

    case 'restart-quiz':

      restartQuiz();

      return true;

    case 'resume-session': 

      Object.assign(

        appState.quiz,

        appState.pendingSession.quiz

      );

      appState.pendingSession =
        null;

      navigateTo('quiz');

      startQuestionTimer();
      
      startQuizTimer();

      return true;
    
    case 'discard-session':

      clearQuizSession();

      appState.pendingSession =
        null;

      restartQuizState();

      navigateTo('home');

      return true;
    
    case 'review-answers':

      navigateTo(
        'review'
      );

      return true;


    default:

      return false;

  }


}