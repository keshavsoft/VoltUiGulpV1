import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
import ConfigJson from "../../../../../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    const LocalStartRoute = ConfigJson.TableName;
    let jVarLocalStorageData = JSON.parse(localStorage.getItem(LocalStartRoute));
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let response = {};

    if (jVarLocalStorageData) {
        let LocalArrayPk = jVarLocalStorageData.map(element => element.pk);

        let LocalRemoveUndefined = LocalArrayPk.filter(function (element) {
            return element !== undefined;
        });

        let numberArray = LocalRemoveUndefined.map(Number);
        let MaxPk = Math.max(...numberArray, 0) + 1;

        let LocalInsertData = { ...jVarLocalFetchHeaders, pk: MaxPk };
        jVarLocalStorageData.push(LocalInsertData);
        localStorage.setItem(LocalStartRoute, JSON.stringify(jVarLocalStorageData));
        response.status = 200;
        response.RowPk = MaxPk
    } else {
        let LocalSetArray = [];
        let LocalInsertData = { ...jVarLocalFetchHeaders, pk: 1 };
        LocalSetArray.push(LocalInsertData);
        localStorage.setItem(LocalStartRoute, JSON.stringify(jVarLocalStorageData));
        response.status = 200;
        response.RowPk = 1

    }
    return await response
};

export { StartFunc };

