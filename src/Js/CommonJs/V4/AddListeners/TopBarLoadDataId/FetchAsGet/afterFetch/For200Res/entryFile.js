let StartFunc = ({ inResponseAsJson }) => {
    localStorage.setItem("TableData", JSON.stringify(inResponseAsJson));
};

export { StartFunc };