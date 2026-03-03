let StartFunc = ({ inResponseAsJson }) => {
    localStorage.setItem("TableData", JSON.stringify(inResponseAsJson));

    LocalFuncRemoveClass({ inHtmlId: "TopBarNotificationId", inClassName: "unread" });
};

const LocalFuncRemoveClass = ({ inHtmlId, inClassName }) => {
    let jVarLocalinHtmlId = document.getElementById('inHtmlId');
    jVarLocalinHtmlId.classList.remove(inClassName);
};

export { StartFunc };