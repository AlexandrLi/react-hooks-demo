import React from 'react';
import kz from './assets/kz.png';
import ClassComponent from './ClassComponent/ClassComponent';
import {LocaleContext, ThemeContext} from './context';
import {HooksComponent} from './HooksComponent/HooksComponent';

function App() {
  return (
    <div className="main">
      <LocaleContext.Provider value={<img src={kz} alt="kz" />}>
        <ThemeContext.Provider value="light">
          <ClassComponent />
          <HooksComponent />
        </ThemeContext.Provider>
      </LocaleContext.Provider>
    </div>
  );
}

export default App;
