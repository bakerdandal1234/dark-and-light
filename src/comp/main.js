import React from 'react';
import './Main.css'
const Main = ({pageName,ok}) => {
  return (
    <main>
      my name is <br/>
      {pageName} i like {ok}
    </main>
  );
}

export default Main;
