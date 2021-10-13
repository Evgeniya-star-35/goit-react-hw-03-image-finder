import errorImage from '../cat.jpg';
import s from './NoFound.module.css';

export default function NoFound() {
  return (
    <>
      <img className={s.catImg} src={errorImage} width="500" alt="sadcat" />
      <p
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 20,
          textAlign: 'center',
          color: 'red',
        }}
      >
        Nothing was found for your query!
      </p>
    </>
  );
}
