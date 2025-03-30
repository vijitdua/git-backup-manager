// utils.js

export function getTimestamp() {
    const now = new Date();
    return now.toISOString().replace(/T/, "_").replace(/:/g, "-").split(".")[0];
}
