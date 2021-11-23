import React from 'react';
import logo from './logo.svg';
import LessonOne from './react-hook-lessons/useState/Lesson1';
import LessonTwo from './react-hook-lessons/useEffect/Lesson2';
import './App.css';
import StateTutorial from './react-hook-lessons/useState/Lesson1b';
import MemoExample from './react-hook-lessons/useMemo/Lesson1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LessonOne />
        <LessonTwo />
        <StateTutorial />
        <MemoExample />
      </header>
    </div>
  );
}

export default App;
