let log = console.log;
let table = console.table;
let N = 8;

function getMatrix()
{
    let sol = new Array(8);
    for(var i = 0; i < sol.length; i++)
    {
        sol[i] = new Array(2);
    }
    for(let x = 0; x < N; x++)
        for(let y = 0; y < N; y++)
            sol[x][y] = -1;
 
    let xMove = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
    let yMove = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
 
    sol[0][0] = 0;
 
   
    if (!setMatrix(0, 0, 1, sol, xMove, yMove))
    {
        log("Solution does not exist");
        return false;
    }
    else
    table(sol)
 
    return true;
}
 function setMatrix(x, y, movei, sol, xMove, yMove)
{
    let k, next_x, next_y;
    if (movei == N * N)
        return true;
 
 
    for(k = 0; k < 8; k++)
    {
        next_x = x + xMove[k];
        next_y = y + yMove[k];
         
        if ((next_x >= 0 && next_x < N && next_y >= 0 &&
            next_y < N && sol[next_x][next_y] == -1))
        {
            sol[next_x][next_y] = movei;
            //set recursion for next move
            if (setMatrix(next_x, next_y, movei + 1,
                            sol, xMove, yMove))
                return true;
            else
                sol[next_x][next_y] = -1; 
        }
    }
    return false;
}
 
getMatrix();