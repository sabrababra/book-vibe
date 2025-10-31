import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const getStoreBooks=()=>{
    const storeBookSTR=localStorage.getItem("readList");
    if(storeBookSTR){
        const storeBookData=JSON.parse(storeBookSTR);
        return storeBookData;
    }else{
        return [];
    }
}

 const MySwal = withReactContent(Swal)


const addToStoreDB=(id)=>{
    const storeBookData=getStoreBooks();
    if(storeBookData.includes(id)){
        alert("This book is already added!!")
    }else{
        storeBookData.push(id);
        const data=JSON.stringify(storeBookData);
        localStorage.setItem("readList",data);
        Swal.fire({
                title: "Good job!",
                text: "Added Read List Successfully!",
                icon: "success"
            });
        
    }
}

export {addToStoreDB,getStoreBooks}