import { Stack } from "office-ui-fabric-react/lib/Stack";
import * as React from "react";
import { ListItemComments } from "../../../controls/listItemComments";
export var TestControl = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(Stack, null,
            React.createElement(ListItemComments, { listId: "e738c4b3-6cff-493a-a8da-dbbf4732e3bf", itemId: "26", serviceScope: props.context.serviceScope, numberCommentsPerPage: 10, label: "List Item Comments" }))));
};
//# sourceMappingURL=TestControl.js.map