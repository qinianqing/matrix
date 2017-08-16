const placeholder: string = '\t';
function isPair(n: number): number {
    let x = n % 2 == 0 ? n + 1 : n;
    return x;
};
function makeMatrix(n: number): number[] {
    let mMatrix = [];
    for (let i = 0; i < n; i += 1) {
        let content = [];
        for (let k = 0; k < n; k += 1) {
            content.push(placeholder);
        }
        mMatrix.push(content);
    }
    return mMatrix;
}
function printMatrix(mMatrix: any) {
    for (let content of mMatrix) {
        console.log(...content);
    }
}
export function Matrix(n: number) {
    let side = Math.ceil(Math.sqrt(n));
    side = isPair(side);
    let mMatrix = makeMatrix(side);
    let m, k, j, direction;
    k = Math.floor((side / 2));
    j = k;
    m = 1;
    direction = 'Up';
    mMatrix[k][j++] = placeholder + m++;
    mMatrix[k][j] = placeholder + m;
    while (m !== n) {
        switch (direction) {
            case 'Up':
                if (mMatrix[k][j - 1] !== placeholder) {
                    k -= 1;
                } else {
                    direction = 'Left';
                    j -= 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
            case 'Down':
                if (mMatrix[k][j + 1] !== placeholder) {
                    k += 1;
                } else {
                    direction = 'Right';
                    j += 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
            case 'Left':
                if (mMatrix[k + 1][j] !== placeholder) {
                    j -= 1;
                } else {
                    direction = 'Down';
                    k += 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
            case 'Right':
                if (mMatrix[k - 1][j] !== placeholder) {
                    j += 1;
                } else {
                    direction = 'Up';
                    k -= 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
        }
    }
printMatrix(mMatrix);
}