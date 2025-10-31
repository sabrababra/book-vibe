import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

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
  if (storeBookData.includes(id)) {
    alert("This book is already added!!");
  } else {
    storeBookData.push(id);
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("wishList", data);
    Swal.fire({
      title: "Good job!",
      text: "Added Read List Successfully!",
      icon: "success",
    });
  }
};

export { addToStoreDBWishList, getStoreBooksWishList };
