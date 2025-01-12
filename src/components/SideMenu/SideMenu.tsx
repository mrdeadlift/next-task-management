import NavList from "./NavList/NavList"

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-stone-50">
        <div>
            <h1 className= "px-4 text-2xl font-bold text-white">Next Task</h1>
            <NavList />
        </div>
    </div>
  )
}

export default SideMenu