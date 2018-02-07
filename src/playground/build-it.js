class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            visibility: false
        }
    }

    toggle() {
        this.setState((prevState) => {
            return (
                //Works without this: this.state.visibility = 
                this.state.visibility = prevState.visibility = !prevState.visibility
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggle}>{this.state.visibility ? "Hide Details" : "Show Details"}</button>
                <p>{this.state.visibility&&"Some Details"}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const values = {
//     title: "Visibility Toggle",
//     text: "Hey! I'm visible!"
// };

// let visibility = false;

// const clickMe = () => {
//     visibility = !visibility;

//     renderApp();
// };

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const app = (
//         <div>
//             <h1>{values.title}</h1>

//             <button onClick={clickMe}>{visibility ? "Hide Details": "Show Details"}</button>
//             <p>{visibility && values.text}</p>
//         </div>
//     );

//     ReactDOM.render(app, appRoot);
// };

// renderApp();