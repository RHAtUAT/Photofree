import React, { useState, useRef, useEffect, ReactNode } from 'react';

interface DropdownMenuProps {
  toggleElement: ReactNode;
  children: ReactNode;
}

const DropdownMenu = ({ toggleElement: opener, children }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        {opener}
        <span className="dropdown-chevron">&#9660;</span>
      </div>
      {isOpen && <div className="dropdown-menu">{children}</div>}
    </div>
  );
};

export default DropdownMenu;