
function NavComponent() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <a className="flex items-center justify-center" href="/">
        <span className="font-sans text-[#888888]">BizBoost</span>
        </a>
        <nav className="ml-auto flex gap-5 sm:gap-6">
          <a className="text-sm font-sans 
          text-[#2e4058] cursor-pointer" 
          href="#">
            Features
          </a>
          <a className="text-sm font-sans 
          text-[#2e4058] cursor-pointer" href="#">
            Pricing
          </a>
          <a className="text-sm font-sans 
          text-[#2e4058] cursor-pointer" href="#">
            About
          </a>
        </nav>
        <a
          className="text-sm font-sans 
          bg-[#103fef] text-white 
          rounded-md px-4 py-2 mx-3"
          href="singIn"
        >
          Sing-In/Up
        </a>
      </header>
  )
}

export default NavComponent;