import { useGlobalContext } from '../context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

function ThemeToggle() {
  const { toggleDarkTheme, isDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button onClick={toggleDarkTheme} className="dark-toggle ">
        {isDarkTheme ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}
export default ThemeToggle;
