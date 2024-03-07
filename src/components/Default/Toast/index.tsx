import css from "./styles.module.scss";
import Icon from "../Icon";

import { useSelector } from 'react-redux'
import { RootState } from "@/app/store";

export default function Toast() {
  const toast = useSelector((state:RootState) => state.toast)

  return (
    <div className={css["clipboard-toast"]} data-opened={toast.opened}>
      <div className={css["icon"]}>
        <Icon src="/svg/icon/copy-success.svg" alt="Copia concluida" size="medium" />
      </div>
      <div className={css["text"]}>
        <p>Salvo na área de transferência</p>
      </div>
    </div>
  )
}