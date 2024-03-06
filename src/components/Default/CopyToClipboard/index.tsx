'use client';

import { useState } from 'react';
import css from './styles.module.scss'
import Image from "next/image";

interface Props {
  text: string;
  size?: number;
}

export default function CopyToClipboard(props:Props) {
  const [copyed, setCopyed] = useState(false);
  const size = props.size || 24;

  const handleCopy = () => {
    navigator.clipboard.writeText(props.text);
    setCopyed(true);
    setTimeout(() => setCopyed(false), 1000);
  }

  return (
    <button className={css["CopyToClipboard"]} style={{width: size+'px', height: size+'px'}} onClick={handleCopy}>
      <Image data-active={!copyed} className={css["icon"]} src="/svg/icon/copy.svg" alt="Copiar" width={size} height={size} />
      <Image data-active={copyed} className={css["icon"]} src="/svg/icon/copy-success.svg" alt="Copia concluida" width={size} height={size} />
    </button>
  )
}