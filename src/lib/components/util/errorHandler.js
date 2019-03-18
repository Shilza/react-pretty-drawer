import React from "react";

export function withErrorHandler(Component) {
    class WithErrorHandler  extends React.PureComponent {
        state = {
            hasError: false
        };

        componentDidCatch (error) {
            this.setState({hasError: true});
            console.error(error);
        }

        render() {
            return !this.state.hasError && <Component {...this.props} />
        }
    }

    WithErrorHandler.displayName = `withErrorHandler(${Component.displayName})`;
    return WithErrorHandler;
}

