import React, {useContext, useEffect, useState} from 'react';
import {LocaleContext, ThemeContext} from '../context';
import {Row} from '../shared/Row';

/*
function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return {value, onChange: handleValueChange};
}
*/

/*
function useLogging(value) {
  useEffect(() => {
    console.log('Hooks component fullname: ', value);
  }, [value]);
}
*/

/*
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('useWindowWidth');
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
*/

export function HooksComponent() {
  const name = useInputValue('Alexandr');
  const surname = useInputValue('Li');
  useLogging(name.value + ' ' + surname.value);

  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  const width = useWindowWidth();

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

function useInputValue(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleValueChange(e) {
    setValue(e.target.value);
  }

  return {value, onChange: handleValueChange};
}

function useLogging(value) {
  useEffect(() => {
    console.log('Hooks component fullname: ', value);
  }, [value]);
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log('useWindowWidth');
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
