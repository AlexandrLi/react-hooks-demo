import React, {useContext, useEffect, useState} from 'react';
import {LocaleContext, ThemeContext} from '../context';
import {Row} from '../shared/Row';

export function HooksComponent() {
  const name = useInputField('Alexandr');
  const surname = useInputField('Li');
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);
  const width = useWindowWidth();
  useDocumentTitle(name.value + ' ' + surname.value);

  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Locale">{locale}</Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}

function useInputField(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {value, onChange: handleChange};
}

function useDocumentTitle(title) {
  useEffect(() => {
    console.log('Hooks component fullname: ', title);
  }, [title]);
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('useWindowWidth called');
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
