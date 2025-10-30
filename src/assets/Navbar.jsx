const Navbar = () => {
  return (
    <div className="navbar py-8 flex items-center justify-between text-3X1 font-bold text-white">
        <div className="logo">
            <h1 className="text-3xl font-bold">Hadi Wiranata</h1>
    </div>
        <ul className="menu flex justify-center gap-15">
            <li>
                <a href="#home">Home</a>
            </li>
            <li>
                <a href="#about">About</a>
            </li>
            <li>
                <a href="#">Project</a>
            </li>
            <li>
                <a href="#">Kontak</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar