const placeholder: string = '\t';
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
export function Matrix(n: number,sep: number) {
    let side = Math.ceil(Math.sqrt(n));
    let mMatrix = makeMatrix(side);
    let m, k, j, direction;
    k = Math.floor((side / 2));
    j = k;
    m = 1;
    direction = 'Up';
    mMatrix[k][j++] = placeholder + m++;
    mMatrix[k][j] = placeholder + m;
    if(n<m){
        console.log('请输入大于1的数字')
        return;
    }
    while (n>m) {
        if(sep == 0){
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

        }else if(sep == 1){
          switch (direction) {
            case 'Up':
                if (mMatrix[k][j + 1] !== placeholder) {
                    k -= 1;
                } else {
                    direction = 'Right';
                    j += 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
            case 'Down':
                if (mMatrix[k][j - 1] !== placeholder) {
                    k += 1;
                } else {
                    direction = 'Left';
                    j -= 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
            case 'Left':
                if (mMatrix[k - 1][j] !== placeholder) {
                    j -= 1;
                } else {
                    direction = 'Up';
                    k -= 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
            case 'Right':
                if (mMatrix[k + 1][j] !== placeholder) {
                    j += 1;
                } else {
                    direction = 'Down';
                    k -= 1;
                }
                mMatrix[k][j] = placeholder + (++m);
                break;
        }
        }
        
    }
printMatrix(mMatrix);
}