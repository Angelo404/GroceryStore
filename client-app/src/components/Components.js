import React from "react";
import Item from "./Item";

export const Components = {
    item: Item
  };



export default block => {
// component does exist
if (typeof Components[block.component] !== "undefined") {
    return React.createElement(Components[block.component], {
    key: block._uid,
    block: block
    });
}
// component doesn't exist yet
return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
);
}