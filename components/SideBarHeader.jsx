import ThemeToggle from './ThemeToggle';
import { SiGoogletagmanager } from "react-icons/si";

const SideBarHeader = () => {
  return (
    <div className='flex items-center mb-4 gap-1 px-4'>
      <SiGoogletagmanager className='w-10 h-10' />
      <h2 className='text-3xl ml-1 font-extrabold mr-auto'>sTasks</h2>
      <ThemeToggle />
    </div>
  )
}
export default SideBarHeader