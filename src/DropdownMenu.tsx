import { useState, useRef, useEffect} from 'react';
import './App.css';

export const DropdownMenu = (props: any) => {
  
  const [open, setOpen] = useState(false);
  let menuRef: any = useRef();
  
  useEffect(() => {
    let handler = (e: { target: any; })=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    
    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
      <div className="App">
        <div className='menu-container' ref={menuRef}>
          <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <img ></img>
          </div>
          <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
            <ul>
                {props.children}
            </ul>
          </div>
        </div>
      </div>
  );
};

export default function DropdownItem(props: any){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}
