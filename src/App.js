import React from 'react';
//import logo  from './logo.svg';
import './App.css';
import Profile  from './components/Profile';
import Projects from './components/Projects';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      store: [],
      project: [''],
      activeTag: 'All Projects'
    }

    this.controlTag = this.controlTag.bind(this);
    this.childDiv = React.createRef();
  }

  componentDidMount() {
    fetch('https://sammy-portfolio-api.glitch.me/api/project')
      .then(res => res.json())
      .then(res => {
        this.setState({
          store: res.project,
          project: res.project
        })
      });
    setTimeout(() => {
      this.childDiv.current.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  controlTag(e){
    let prevTag = document.getElementsByClassName('active')[0];
    let main = document.getElementById('all-project');

    if(prevTag) prevTag.className = 'No Name';
    main.className = main.className !== 'first'? 'first': 'second';
    let store = this.state.store;
    let tagID = e.target.id;
    let P = ( tagID === 'all')? store: store.filter(a => a.type === e.target.id);
    e.target.className = 'active';
    this.setState({
      project: P
    })
  }

  render() {
    return (
    <div className="App">
        <Profile />
        <Projects 
          project={this.state.project}
          tag={this.state.activeTag}
          control={this.controlTag}
          scroll={this.childDiv}
         />
      </div>
    );
  }

}

export default App;
