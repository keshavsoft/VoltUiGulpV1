import CommonConfig from '../../../../../../../../Config.json' with { type: 'json' };

const StartFunc = ({ inRowPk }) => {
    const jVarLocalCommonVersion = CommonConfig.TableName.split("/")[1];
    console.log("jVarLocalCommonVersion",jVarLocalCommonVersion,inRowPk);
    
    let jVarLocalForeignkeyTables = CommonConfig.ForeignkeyTables[0];
    window.location.href = `/${jVarLocalCommonVersion}/${jVarLocalForeignkeyTables}/Unprotected/pages/FromLocalStorage/multiTableV1.html?inRowPk=${inRowPk}`;
};

export { StartFunc };
