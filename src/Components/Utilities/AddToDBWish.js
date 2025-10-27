const getStoreBooks=()=>{
    const storeBookSTR=localStorage.getItem("wishList");
    if(storeBookSTR){
        const storeBookData=JSON.parse(storeBookSTR);
        return storeBookData;
    }else{
        return [];
    }
}

const addToStoreDBWishList=(id)=>{
    const storeBookData=getStoreBooks();
    if(storeBookData.includes(id)){
        alert("This book is already added!!")
    }else{
        storeBookData.push(id);
        const data=JSON.stringify(storeBookData);
        localStorage.setItem("wishList",data);
    }
}

export {addToStoreDBWishList}