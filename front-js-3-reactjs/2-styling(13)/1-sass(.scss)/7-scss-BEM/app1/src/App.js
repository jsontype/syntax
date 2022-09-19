import React from 'react'
import './App.scss'

function App () {
  return (
    <div className="App">
      <header class="tsHeader">
        {/* 재사용 가능한 블록 영역 */}
        <h1 class="tsHeader__logo"><a href="#" class="tsHeader__logoLink">Shop!</a></h1>
        
        {/* 블록은 블록을 포함할 수 있음 */}
        <nav class="tsNav">
          <ul class="tsNav__list">
            <li class="tsNav__item">
              <a href="#" class="tsNav__link">
                HOME
              </a>
            </li>
            <li class="tsNav__item">
              <a href="#" class="tsNav__link">
                Best
              </a>
            </li>
            <li class="tsNav__item">
              <a href="#" class="tsNav__link">
                FAQ
              </a>
            </li>
          </ul>
          
          <div class="tsNav__shortcut">
            <button type="button" class="btn__icon"><span class="heart-solid icon"></span></button>
            <button type="button" class="btn__icon"><span class="shutdown icon"></span></button>
          </div>
        </nav>
      </header>

      <section class="tsContainer">
        <div class="tsContents">Contents Area . . .</div>
        <div class="tsBottom">
          <button type="button" class="btnBasic">cancel</button>
          <button type="button" class="btnBasic--submit">submit</button>
        </div>
      </section>
    </div>
  )
}

export default App
