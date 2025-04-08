import { Link } from "react-router-dom";
import s from "./navigation.module.css"

export const Navigation = () => {
  return (
      <nav className={s.nav}>

          <Link className={s.link} to="/generate">
              Сгенерировать красоту
          </Link>

          <Link className={s.link} to="/scan">
              Сканировать QR Code
          </Link>

          <Link className={s.link} to="/scanHistory">
              История сканирования
          </Link>

          <Link className={s.link} to="/generateHistory">
              История генерирования
          </Link>

      </nav>
  )
}

