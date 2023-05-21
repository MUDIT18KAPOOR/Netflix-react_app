import './App.css';
import Cards from './components/Cards';
import Sdata from './components/Sdata.jsx'
import PageHeader from './components/PageHeader';
function App() {
  return (
    <>
    <PageHeader/>
    <Cards sname = {Sdata[0].sname} title={Sdata[0].title} imgsrc={Sdata[0].imgsrc} link={Sdata[0].link} />
    <Cards sname = {Sdata[1].sname} title={Sdata[1].title} imgsrc={Sdata[1].imgsrc} link={Sdata[1].link} />
    <Cards sname = {Sdata[2].sname} title={Sdata[2].title} imgsrc={Sdata[2].imgsrc} link={Sdata[2].link} />
    <Cards sname = {Sdata[3].sname} title={Sdata[3].title} imgsrc={Sdata[3].imgsrc} link={Sdata[3].link} />
    <Cards sname = {Sdata[4].sname} title={Sdata[4].title} imgsrc={Sdata[4].imgsrc} link={Sdata[4].link} />
    <Cards sname = {Sdata[5].sname} title={Sdata[5].title} imgsrc={Sdata[5].imgsrc} link={Sdata[5].link} />
    </>
  );
}

export default App;
