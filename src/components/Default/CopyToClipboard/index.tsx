'use client';

import css from './styles.module.scss'

import { useState } from 'react';

import Icon from '@/components/Default/Icon';

import { useDispatch } from 'react-redux'
import { open, close } from '@/features/toast/toastSlice';

interface Props {
  text: string;
  size?: 'small' | 'medium'
}

export default function CopyToClipboard(props:Props) {
  const [copyed, setCopyed] = useState(false);
  const size = props.size || 'medium';

  const dispatch = useDispatch();

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text);
    setCopyed(true);
    dispatch(open({type: 'clipboard'}))
    
    setTimeout(() => {
      setCopyed(false);
      dispatch(close())
    }, 1000);
  }

  return (
    <button className={css["CopyToClipboard"]} data-size={size} onClick={handleCopy}>
      <Icon data-active={!copyed} className={css["icon"]} src="/svg/icon/copy.svg" alt="Copiar" size={size} />
      <Icon data-active={copyed} className={css["icon"]} src="/svg/icon/copy-success.svg" alt="Copia concluida" size={size} />
    </button>
  )
}