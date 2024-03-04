import css from './styles.module.scss'

export default function Aside() {
  return (
    <aside className={css["aside"]}>
      <div className={css["content"]}>
        <h2>Sobre mim</h2>
        <p>Obrigado por acessa meu portfólio, você pode entrar em contato por:</p>
        <div className={css["links"]}>
          <a href="https://www.linkedin.com/in/victorhdsp/" target="_blank" rel="noopener noreferrer">
            {'> LinkedIn'}
          </a>
          <a href="https://github.com/lkt226" target="_blank" rel="noopener noreferrer">
            {'> Github'}
          </a>
        </div>
      </div>
    </aside>
  )
}