import axios from "axios";

const token = localStorage.getItem("TokenYesmonProveedor");

//? STORES
export const getStores = async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL_BUSINESS}/store/list`,
    {
      headers: { "access-token": token }, /* headers: { "access-token": `Bearer ${token}` }, */
    }
  );
  return response;
};

//? ORDERS
export const getOrders = async ( state ) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/listorders?skip=0&limit=all&state=${state}`,
    {
      headers: { "access-token": token }, /* headers: { "access-token": `Bearer ${token}` }, */
    }
  );
  return response;
};

export const updateStateOrders = async (idOrder, stateOrder) => {
  const { data } = await axios.patch(
    `${process.env.REACT_APP_BACKEND_URL_BUSINESS}/supplier/orderstate`,
    { 
			id: idOrder, 
			estado: stateOrder 
		},
    {
      headers: {
        "access-token": token,
      } /* headers: { "access-token": `Bearer ${token}` }, */,
    }
  );
  return data;
};