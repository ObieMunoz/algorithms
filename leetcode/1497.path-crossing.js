/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = function (path) {
    let x = 0;
    let y = 0;
    let coordsPassed = { '0,0': 1 }
    for (let i = 0; i < path.length; i++) {
        switch (path[i]) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }
        if (Object.keys(coordsPassed).includes(`${x},${y}`)) return true
        else coordsPassed[`${x},${y}`] = 1
        console.log(coordsPassed)
    }
    return false;
}