export const insertIntoTable = (tableName, objectBody) => {
    const bodyKeys = Object.keys(objectBody).join(', ');
    const bodyValues = Object.values(objectBody).join("', '");
    return `INSERT INTO ${tableName} (${bodyKeys}) VALUES (${"'" + bodyValues + "'"}) returning id;`
};