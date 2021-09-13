import React, { useEffect } from 'react'
import { Link , useHistory } from 'react-router-dom';
import AppLayout from '../../components/AppLayout/AppLayout'
import Loading from '../../components/Loading/Loading';
import TitlePerfil from '../../components/Perfil/TitlePerfil/TitlePerfil'

import './InfoPerfil.css';

const InfoPerfil = () => {
    const router = useHistory();
    
    useEffect(()=>{
        router.push('/informacion-perfil/registro')
    },[])
     
    return <Loading />
}

export default InfoPerfil
