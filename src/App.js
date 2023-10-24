import logo from './logo.svg';
import Header from './Header/Header'
import About from './About/About'
import Services from './Services/Services'
import Cta from './Cta/Cta'
import Example from './Example/Example'
import Counts from './Counts/Counts'
import Quote from './Quote/Quote'
import Team from './Team/Team'
import Call from './Call/Call'
import Footer from './Footer/Footer'
import './App.css'
function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Services></Services>
      <Cta></Cta>
      <Example></Example>
      <Counts></Counts>
      <Quote></Quote>
      <Team></Team>
      <Call></Call>
      <Footer></Footer>
    </div>
  );
}

export default App;
