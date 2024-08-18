import { Component } from "react";

type Props = {fallback?: React.ReactNode, children?: React.ReactNode}

export class ErrorBoundary extends Component<Props> {
    state: {hasError: boolean}

    constructor(props: {fallback: React.ReactNode, children: React.ReactNode}) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error: Error, info: any) {
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
    //   logErrorToMyService(error, info.componentStack);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return this.props.fallback;
      }
  
      return this.props.children;
    }
  }