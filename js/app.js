const Title = props => <h1 className="tc">{props.title}</h1>;
const TopBanner = props => (
  <h1 className="tc f1 yellow pa3">
    {props.firstName} {props.lastName}
  </h1>
);

const App = () => (
  <div>
    <Title title="Welcome to my website!" />
    <TopBanner firstName="Adam" lastName="Parsons" />
  </div>
);

const App = () => (
  <React.Fragment>
    <Title title="Welcome to my website!" />
    <TopBanner firstName="Adam" lastName="Parsons" />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));
