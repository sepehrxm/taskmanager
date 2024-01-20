import MemberProfile from "./MemberProfile"
import NavLinks from "./NavLinks"
import SideBarHeader from "./SideBarHeader"

const Sidebar = () => {
  return (
    <div className="px-4 w-80 min-h-full bg-primary py-12 grid grid-rows-[auto,1fr,auto]">
        <SideBarHeader/>
        <NavLinks/>
        <MemberProfile/>
    </div>
  )
}
export default Sidebar