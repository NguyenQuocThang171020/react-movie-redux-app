import "./header.scss"
import logo from "../../asset/image/cgv.png"
import {FaSearch} from "react-icons/fa"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Header = (props) => {
    const [text,setText] = useState("")
    const {setSearch}  = props
    const handleClick =()=>{
        setSearch(text)
    }
    const negative = useNavigate()
    const handleClickLogo=()=>{
        negative("/")
    }
  return (
    <header>
            <div className="header-container"  onClick={handleClickLogo}>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="title">
                    <p>Cinema</p>
                </div>
            </div>
                <div className="search">
                    <input  type="text" className="search-input" placeholder="Search..." onChange={(e)=>setText(e.target.value)} />
                    <button className="btn-search" onClick={handleClick}><FaSearch className="icons"/></button>
                </div>
          </header>
  )
}

export default Header