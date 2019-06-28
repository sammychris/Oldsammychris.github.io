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
  }
  componentDidMount() {
    fetch('https://sammy-portfolio-api.glitch.me/api/project')
      .then(res => res.json())
      .then(res => {
        console.log(res.project)
        this.setState({
          store: res.project,
          project: res.project
        })
      });
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
         />
      </div>
    );
  }
}

export default App;
