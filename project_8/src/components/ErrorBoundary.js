import { Component } from "react/cjs/react.production.min";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Somthing went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
