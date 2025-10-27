const getStoreBooks=()=>{
    const storeBookSTR=localStorage.getItem("readList");
    if(storeBookSTR){
        const storeBookData=JSON.parse(storeBookSTR);
        return storeBookData;
    }else{
        return [];
    }
}

const addToStoreDB=(id)=>{
    const storeBookData=getStoreBooks();
    if(storeBookData.includes(id)){
        alert("This book is already added!!")
    }else{
        storeBookData.push(id);
        const data=JSON.stringify(storeBookData);
        localStorage.setItem("readList",data);
    }
}

export {addToStoreDB}