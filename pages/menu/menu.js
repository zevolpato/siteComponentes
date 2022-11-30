import styles from './menu.module.css'
import Image from 'next/image'
import logo from '../../public/logo.png'

function Menu() {
    return (
        
        <div>
        <div className={styles.p1}>
        <p >MENU1</p>
        <br />
        <header>
            <span> 
            <Image
              src={logo}
              alt="Logo"
              width={80} automatically provided
              height={60} automatically provided
            /> 
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
        
        <div className={styles.p2}>
        <p >MENU2</p>
        <br />
        <header>
            <span> 
            <Image
              src={logo}
              alt="Logo"
              width={80} automatically provided
              height={60} automatically provided
            /> 
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
