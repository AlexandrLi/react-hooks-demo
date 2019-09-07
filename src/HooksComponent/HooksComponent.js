import React, {useContext, useEffect, useState} from 'react';
import {LocaleContext, ThemeContext} from '../context';
import Row from '../shared/Row';

export default function() {
  const [name, setName] = useState('Alexandr');
  function handleNameChange(e) {
    setName(e.target.value);
  }

  const [surname, setSurname] = useState('Li');
  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  useEffect(() => {
    document.title = name + ' ' + surname;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
      <Row label="Width">{width}</Row>
      <Row label="Locale">{locale}</Row>
    </section>
  );
}
