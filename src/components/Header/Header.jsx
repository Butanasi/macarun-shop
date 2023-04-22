import logo from './logo.png'
import style from './Header.module.css'
function Header() {
   return (
      <div>
         <ul className={style.list}>
            <li><h3>СЛАДКИЕ ДНИ</h3></li>
            <li><h3>подарочные наборы</h3></li>
            <li><h3>Собрать набор</h3></li>
            <li><img src={logo} alt="logotype" /></li>
            <li><h3>Создать дизайн</h3></li>
            <li><h3>КОМПАНИЯМ</h3></li>
            <li><h3>ВЕСЬ КАТАЛОГ</h3></li>
         </ul>
      </div>
   )
}
export default Header;