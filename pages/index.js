//import Menu from "./menu/menu"
import Link from 'next/link'

function HomePage() {
    return <div>
        <ul>
          <li><Link href="menu/menu">Menu</Link></li>
          <li><Link href="header/header">Header</Link></li>
          <li><Link href="features/features">features</Link></li>
          <li><Link href="article/article">Article</Link></li>
          <li><Link href="image/image">Image</Link></li>
          <li><Link href="gallery/gallery">Gallery</Link></li>
          <li><Link href="people/people">People</Link></li>
          <li><Link href="contact/contact">Contact</Link></li>
          <li><Link href="social/social">Social</Link></li>
          <li><Link href="footer/footer">Footer</Link></li>
          <li><Link href="form/form">Form</Link></li>
          <li><Link href="news/news">News</Link></li>
          <li><Link href="list/list">List</Link></li>
          <li><Link href="numbers/numbers">Numbers</Link></li>
          <li><Link href="pricing/pricing">Pricing</Link></li>
        </ul>

    </div>
  }
  
  export default HomePage