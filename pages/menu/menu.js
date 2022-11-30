import styles from './menu.module.css'

function Menu() {
    return (
        
        <div>
        <div className={styles.p1}>
        <p >MENU1</p>
        <br />
        <header>
            <span> LOGO 
            <ul>
              <li>
                <i></i>
                Home
              </li>
              <li>
               Sobre
              </li>
              <li>
                Produtos
              </li>
            </ul>
            </span>
          </header>
        </div>
        <hr />
        <div className={styles.p2}>
        <p >MENU2</p>
        <br />
        <header>
            <span> LOGO 
            <ul>
              <li>
                <i></i>
                Home
              </li>
              <li>
               Sobre
              </li>
              <li>
                Produtos
              </li>
            </ul>
            </span>
          </header>
        </div>





        </div>
    
    )
}

export default Menu;
