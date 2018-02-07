class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            // count: props.count
            count: 0
        };
    }

    componentDidMount() {
        try {
            const num = parseInt(localStorage.getItem('count'));
            const isNumber = isNaN(num);

            if (!isNumber) {
                this.setState({
                    count: num
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count != this.state.count) {
            const num = this.state.count;
            localStorage.setItem('count', num);
            console.log("saving data");
        }
    }

    addOne() {
        this.setState((prevState) => {
            return (
                this.state.count = prevState.count++
            );
        });
    }

    minusOne() {
        this.setState((prevState) => {
            return (
                this.state.count = prevState.count--
            );
        });
    }

    reset() {
        // this.setState((prevState) => {
        //     return (
        //         this.state.count = prevState.count = 0
        //     );
        // });

        this.setState({
            count: 0
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>

//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();