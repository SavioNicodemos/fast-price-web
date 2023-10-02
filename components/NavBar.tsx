import Image from 'next/image'
import Link from 'next/link'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'search' },
  { src: '/assets/icons/black-heart.svg', alt: 'heart' },
  { src: '/assets/icons/user.svg', alt: 'user' },
];

const NavBar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href='/' className='flex items-center gap-1'>
          <Image
            src='/assets/icons/logo.svg'
            alt='Fast Price'
            width={27}
            height={27}
          />
          <p className='nav-logo'>
            Fast<span className='text-primary'>Price</span>
          </p>
        </Link>

        <div className='flex items-center gap-5'>
          {navIcons.map((icon, index) => (
            <Image
              key={icon.src}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className='object-contain'
            />
          ))}
        </div>
      </nav>
    </header>
  )
}

export default NavBar