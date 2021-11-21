import ReactReconciler from "react-reconciler";
import { Screen, Container, Button, Text } from "./widgets";

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
  now: Date.now,
  getRootHostContext: () => rootHostContext,
  getChildHostContext: () => childHostContext,
  shouldSetTextContent: (type, props) =>
    typeof props.children === "string" || typeof props.children === "number",
  /**
   This is where react-reconciler wants to create an instance of UI element in terms of the target. Since our target here is the DOM, we will create document.createElement and type is the argument that contains the type string like div or img or h1 etc. The initial values of domElement attributes can be set in this function from the newProps argument
   */
  createInstance: (
    type,
    newProps,
    rootContainerInstance,
    _currentHostContext,
    workInProgress
  ) => {
    const props: any = {};
    let component;

    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === "string" || typeof propValue === "number") {
          props.text = propValue;
        }
      } else if (propName === "onClick") {
        props.listeners = {
          click: propValue,
        };
      } else if (propName === "style") {
        props.style = propValue;
      } else {
        props[propName] = propValue;
      }
    });
    switch (type) {
      case "button": {
        component = new Button(props);
        break;
      }
      case "text": {
        component = new Text(props);
        break;
      }
      default: {
        component = new Container(props);
      }
    }
    return component; // !TODO
  },
  createTextInstance: (text) => new Text({ text }),
  appendInitialChild: (parent, child) => {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(child);
  },
  appendChild(parent, child) {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(child);
  },
  clearContainer() {
    return undefined;
  },
  finalizeInitialChildren: (domElement, type, props) => {},
  supportsMutation: true,
  appendChildToContainer: (parent, child) => {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push(child);
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach((propName) => {
      const propValue = newProps[propName];
      if (propName === "children") {
        if (typeof propValue === "string" || typeof propValue === "number") {
          domElement.props.text = propValue;
        }
      } else {
        const propValue = newProps[propName];
        domElement.props[propName] = propValue;
      }
    });
  },
  commitTextUpdate(textInstance, oldText, newText) {
    textInstance.props.text = newText;
  },
  removeChild(parentInstance, child) {
    if (!parentInstance.props.children) {
      parentInstance.props.children = [];
    }
    const index = parentInstance.props.children.findIndex(
      (item) => item === child
    );
    parentInstance.props.children.splice(index, 1);
  },
  prepareForCommit() {
    // Noop
    return null;
  },
  resetAfterCommit(screen: Screen) {
    screen.screenCommit();
  },
};

const ReactReconcilerInst = ReactReconciler(hostConfig);

export default {
  regist: (reactElement, domElement, callback?) => {
    // console.log(arguments);
    // Create a root Container if it doesnt exist
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(
        domElement,
        false
      );
    }

    // update the root Container
    return ReactReconcilerInst.updateContainer(
      reactElement,
      domElement._rootContainer,
      null,
      callback
    );
  },
};
