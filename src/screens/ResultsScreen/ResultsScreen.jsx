import React from 'react'; 
import styles from './ResultsScreen.module.css'; 
import logo from '../../assets/logo-desktop-on-light.svg';
import decorBottomLeft from '../../assets/card-decor-bottom-left.svg';
import decorTopRight from '../../assets/card-decor-top-right.svg';
import Button from '../../components/Button';

function ResultsScreen({ score, totalQuestions, onReturnHome}) {
  // Result copy for conditional scoring logic 
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;
  let resultTitle;  
  let resultDescription; 

  // hardcoding for now, but potentially could be dynamic based on quiz category and score percentage
  switch (true){
    case percentage >= 80: 
      resultTitle = 'Great Work!';
      resultDescription = 'You really know your stuff. Keep it up!';
      break;
    case percentage >= 50: 
      resultTitle = "Good Effort!";
      resultDescription = `A little more practice and you'll ace it.`; 
      break;
    default:
      resultTitle = "Keep going!"; 
      resultDescription = `Review the topic and try again - you'll get there.`;
  }
  return (
    <div className={styles.canvas}>
      <div className={styles.card}>
        <img src={decorTopRight} alt="" aria-hidden="true" className={styles.decorTopRight} />
        <img src={decorBottomLeft} alt="" aria-hidden="true" className={styles.decorBottomLeft} />

        <header className={styles.header}>
          <img src={logo} alt="devquiz" className={styles.logo} />
        </header>

        <main className={styles.quizContent}>
          <h1 className={styles.headerTitle}>Quiz Complete</h1>


          <div className={styles.scoreCard}>
            <div className={styles.scoreCircleTrack} /> 
            <div className={styles.scoreCircleFill} />
            <div className={styles.scoreEllipseOutsideBorder} />
            <div className={styles.scoreEllipseInsideBorder} />
            <div className={styles.scoreText}>
              <span className={styles.scoreNumbers}>{score}/{totalQuestions}</span>
              <span className={styles.scoreLabel}>Score</span>
            </div>
          </div>

          <div className={styles.resultsCopy}>
            <h2>{resultTitle}</h2>
            <p>{resultDescription}</p>
          </div>

          <Button onClick={onReturnHome}>
            Return Home →
          </Button>
        </main>
      </div>
    </div>
  );
}


export default ResultsScreen;
