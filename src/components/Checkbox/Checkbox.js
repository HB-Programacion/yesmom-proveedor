import React, { useState , useEffect} from 'react'
import { useDispatch , useSelector} from 'react-redux';
import { setActiveAllProducts, unsetActiveAllProducts } from '../../redux/actions/store';

import './Checkbox.css'

const Checkbox = ({ content }) => {

  const dispatch = useDispatch();

  // const  { products=[] , active  } = useSelector (state => state.supplierProducts);
  const [ checked , setChecked ] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  }

  // useEffect(()=>{
  //   const tempActives = products.map( p => p.id );
  //   console.log('temp',tempActives);
  //   console.log(active);
  //   if(tempActives == active){
  //     setChecked(true);
  //     alert('Aceptar')
  //   }else{
  //     setChecked(false);
  //   }
  // },[active])

  useEffect(() => {
    if(checked){
      dispatch( setActiveAllProducts());
    }else{
      dispatch( unsetActiveAllProducts());
    }
  }, [checked])



  return (
    <div className="checkbox-container">
      <input 
        id="cb1" 
        className="checkbox-item" 
        type="checkbox" 
        checked={ checked }
        onChange={ handleCheck }
      />
      <label className="checkbox-option" htmlFor="cb1">{content}</label>
    </div>
  )
}

export default Checkbox
