import { useEffect, useState } from "react";
import { getOrders, getStores, updateStateOrders } from "./request";

export const useStores = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listStores, setListStores] = useState([]);

  useEffect(() => {
    axiosListStores();
  }, []);

  const axiosListStores = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await getStores();
      setLoading(false);
      setListStores(res?.data?.stores);
    } catch (error) {
      setError(true);
    }
  };

  return { listStores, loading, error };
};

export const useOrders = ( state ) => {
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [errorOrders, setErrorOrders] = useState(false);
  const [listOrders, setListOrders] = useState([]);

  useEffect(() => {
    axiosListOrders();
  }, [state]);

  const axiosListOrders = async () => {
    setLoadingOrders(true);
    setErrorOrders(false);
    try {
      const res = await getOrders(state);
      setLoadingOrders(false);
      setListOrders(res?.data?.ordersGeneral);
    } catch (error) {
      setErrorOrders(true);
    }
  };

  return { listOrders, loadingOrders, errorOrders };
};

export const useUpdateOrders = ( idOrder, stateOrder ) => {
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [errorOrders, setErrorOrders] = useState(false);
  const [messageUpdate, setMessageUpdate] = useState();

  useEffect(() => {
    axiosUpdateOrders();
  }, []);

  const axiosUpdateOrders = async () => {
    setLoadingOrders(true);
    setErrorOrders(false);

    try {
      const res = await updateStateOrders(idOrder, stateOrder);
			if(res?.response) {
				setLoadingOrders(false);
				setMessageUpdate(res?.response?.ok);
			} else {
				setMessageUpdate(res?.MensajeRespuesta);
			}
    } catch (error) {
      setErrorOrders(true);
    }
  };

  return { messageUpdate, loadingOrders, errorOrders };
};
