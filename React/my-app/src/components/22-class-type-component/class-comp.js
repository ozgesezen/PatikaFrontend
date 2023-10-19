import { Component } from "react";


export default class ClassComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Time",
            hour: 12,
            minute: 35
        }
    }

    componentDidMount() {
        console.log("Ilk giriste calisir. (Render)")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("re-render durumunda calisir")

        if (prevState.hour !== this.state.hour) {
            console.log("Hour was change")
        }
        if (prevState.minute !== this.state.minute) {
            console.log("Minute was change")
        }
    }

    componentWillUnmount() {
        console.log("component hafizadan atilir")
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h2>{this.state.hour}:{this.state.minute}</h2>

                <button onClick={() => this.setState({ hour: 19 })}>Set Hour</button>
                <button onClick={() => this.setState({ minute: 45 })}>Set Minute</button>
            </div>
        )
    }
}