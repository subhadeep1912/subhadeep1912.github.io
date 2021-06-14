import './App.css';
import boat from './boat.svg'

function App() {
  return (
    <div id="app">
    <script type="module" src="/main.js"></script>
    <div id="head-card">
      <div id="name-card">
        <h1>Hi I am a DEVELOPER</h1> 
      </div>
      <div id="intro-card">
        <p>I started devloping around a year ago and been doing this ever since</p>
      </div>
      <div id="my-socials">
        <p>Github</p>
        <p>Twitter</p>
      </div>
      <div id = "animation">
        <object type="image/svg+xml" data = {boat}>This works?</object>
      </div>
    </div>
    <div id="skill-card">
      <div id="skill-head-1">
        I have been using the following since some days
      </div>
      <div id="skill-col">
      <div id="skill-list">
      
          <p>React Js</p>
          <p>Vite Js(website made using this)</p>
          <p>Node Js</p>
          <p>Doge To the MOON</p>
        
      </div>
      <div id="skill-head-2">
        I am a big machine learning enthusiast:
      </div>
        <div id="skill-list">
        
            <p>Python</p>
            <p>Linear Regression</p>
            <p>Logisitic Regression</p>
            <p>SVM</p>
            <p>Clustering</p>
            <p>PCA</p>
            <p>LDA</p>
            <p>t-SNE</p>
            <p>Kaggle Novice</p>
          
        </div>
        </div>
    </div>
  </div>
  );
}

export default App;
