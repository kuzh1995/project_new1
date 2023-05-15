import React from 'react'
import Header from "./Components/Header/Header";
import Left_content from './Components/Content/Left_content/Left_content';
import Right_content from './Components/Content/Right_content/right_content';



function App() {
  return (
    <>
      <Header />
      <section>
        <div className='container'>
          <div className='row'>
            <Left_content />
            <Right_content />
          </div>
        </div>
      </section>
      
    </>
  );
}

export default App;
