import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getStoreBooks } from "./AddToDB";

const getStoreBooksWishList = () => {
  const storeBookSTR = localStorage.getItem("wishList");
  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};

const MySwal = withReactContent(Swal);

const addToStoreDBWishList = (id) => {
  const storeBookData = getStoreBooksWishList();
  const readListData=getStoreBooks();
  if (storeBookData.includes(id)) {
    alert("This book is already added!!");
  }else if(readListData.includes(id)){
        Swal.fire("Already in Read List!");

  } else {
    storeBookData.push(id);
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("wishList", data);
    Swal.fire({
      title: "Good job!",
      text: "Added Wish List Successfully!",
      icon: "success",
    });
  }
};

export { addToStoreDBWishList, getStoreBooksWishList };
