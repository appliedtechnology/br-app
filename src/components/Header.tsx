import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-indigo-800 text-white dark:bg-slate-900 px-4 h-16 flex items-center justify-between">
      <Link to={'/'}>
        <span>Backend Rocks | SALT</span>
      </Link>
      <span>GitHub</span>
    </header>
  )
}

export default Header