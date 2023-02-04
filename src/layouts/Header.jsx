import { async } from "@firebase/util";
import React from "react";
import {useState} from 'react'
import { Link, useLocation, Navigate  } from "react-router-dom";
import {
  Text, Flex, Image, Avatar, Input, InputGroup, InputLeftElement, IconButton, PopoverTrigger, PopoverContent, PopoverBody, Popover,
  Box, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Modal, ModalFooter, FormControl, FormLabel
} from "@chakra-ui/react"
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import { IoMdCopy } from 'react-icons/io';
import {FaMask} from 'react-icons/fa';
import {AiOutlineSearch, AiOutlineBell} from 'react-icons/ai';
import {FiFolderPlus} from 'react-icons/fi';
import {RiArrowDownSLine} from 'react-icons/ri';
import { ReactComponent as LogoWhite } from "../assets/images/logos/xtremelogowhite.svg";
import user from "../assets/images/users/user.jpg";
import { auth } from "../loginApp/firebase";
// import { useAuth } from "../contexts/AuthContext"

function Header()  {

  const [folderName, setFolderName] = useState("");
  // const navigate = Navigate()
  // const location = useLocation()
  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const logout = async () => {
  //     await signOut(auth);
  //   };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  

  const folderNameChangeHandler = (newFolderName) => {
      setFolderName(newFolderName.target.value);
  }

  const addNewFolderHandler = (event) => {
      event.preventDefault();
      setFolderName('');
  }


  const [isOpen, setIsOpen] = React.useState(true);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <Navbar color="primary" dark expand="md">
      <div className="d-flex align-items-center">
        <NavbarBrand href="/dashboard" className="d-lg-none">
          <LogoWhite />
        </NavbarBrand>
       
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={() => showMobilemenu()}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="me-auto" navbar>
          
          <NavItem>
            <Link to="/dashboard " className="nav-link">
              Home
            </Link>
          </NavItem>
          
          <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              Create
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
              <Link to='/study-set'>
                Study Set
              </Link>
              </DropdownItem>
              <DropdownItem>
                Folder
              </DropdownItem>
              
            </DropdownMenu>
          </UncontrolledDropdown>

          
          <NavItem>
            <Button to="/QuickCard" className="create-new">
              Start
            </Button>
          </NavItem>
        </Nav>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="primary">
            <img
              src={user}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            
            <DropdownItem> 
              <Link to="/update">
                Edit Profile
              </Link>
            </DropdownItem>
            <DropdownItem divider />
            
            <DropdownItem>
             
              <Button onClick={async() => await auth.signOut()}>
                Log Out
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Collapse>
    </Navbar>
  );
};

export default Header;
