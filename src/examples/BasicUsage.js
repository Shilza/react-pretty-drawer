import React from "react";
import Drawer from "../lib/components/Drawer/Drawer";


class BasicUsage extends React.Component {

    state = {
        visible: false
    };

    setIsVisible = visible => this.setState({visible});

    closeDrawer = () => this.setIsVisible(false);
    openDrawer = () => this.setIsVisible(true);

    render() {
        return (
            <div>
                <Drawer visible={this.state.visible} onClose={this.closeDrawer}>
                    <div>Drawer body</div>
                </Drawer>
                <button onClick={this.openDrawer}>{this.state.visible ? "Off" : "Show"}</button>
            </div>
        );
    }
}

export default BasicUsage;
