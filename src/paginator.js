
export let paginatorUsersList= (totalUsersCount)=> {
    let usersPaginatorList = Math.trunc(totalUsersCount / 10);
    let arr =  [];
    let chunks = {};
    let iterator = 1;

    for(let i = 1 ; i<=usersPaginatorList; i++){
        if( i%10 ===0 ){
            arr.push(i);
            chunks ={
                ...chunks,
                [`${iterator}`] : [...arr]
            }
            arr = [];
            iterator++;
        }
        else{
            arr.push(i);

        }
    }
    return chunks;
}

