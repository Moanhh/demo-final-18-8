import { useState } from 'react';

import { signOut} from 'firebase/auth'
import {auth} from '../../loginApp/firebase'
  

import { IoMdCopy } from 'react-icons/io';
import {FaMask} from 'react-icons/fa';
import {AiOutlineSearch, AiOutlineBell} from 'react-icons/ai';
import {FiFolderPlus} from 'react-icons/fi';

import {RiArrowDownSLine} from 'react-icons/ri';
import {
    Text, Flex, Image, Button, Avatar, Input, InputGroup, InputLeftElement, IconButton, PopoverTrigger, PopoverContent, PopoverBody, Popover,
    Box, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Modal, ModalFooter, FormControl, FormLabel
} from "@chakra-ui/react"



import { Link , useLocation, useNavigate } from 'react-router-dom'


import { useAuth } from '../../contexts/AuthContext'

const TopNavBar = ({ currentUser }) => {
    const [folderName, setFolderName] = useState('');
    
    const navigate = useNavigate()
    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure();

    const logout = async () => {
        await signOut(auth);
      };
    

    const folderNameChangeHandler = (newFolderName) => {
        setFolderName(newFolderName.target.value);
    }

    const addNewFolderHandler = (event) => {
        event.preventDefault();
        setFolderName('');
    }

    


    return (
        //  Whole Nav Bar 
        <Flex w='100%' p='1rem' bg='primary' h='3.5rem' pos='fixed' top='0' justify='space-between' zIndex='1'>
            {/* Left Side Nav Bar */}
            <Flex h='100%' align='center'>
                {/* Logos */}
                {/* Your Library Button */}
                {/* Create (Study Sets / Folder) Button */}
                <Popover>
                    <PopoverTrigger >
                        <Button h='2rem' fontSize='sm' color='primary' bg='#7dd' rightIcon={<RiArrowDownSLine size='1.5rem' />}>Create </Button>
                    </PopoverTrigger>
                    <PopoverContent ml='5.5rem' w='12rem' h='6rem'>
                        <PopoverBody >
                            {/* Study Set | Folder */}
                            <Flex direction='column' align='flex-start' h='5rem' justify='space-evenly'>
                                <Link to='/create-set'>
                                    <Button variant='ghost' _hover={{ color: 'black', fontWeight: '700', bg: '#E2E8F0' }} w='10rem' h='2rem' justifyContent='flex-start' mt='.2rem' fontSize='sm' color='slightShade' leftIcon={<IoMdCopy size='1.7rem' />} >Study Set</Button>
                                </Link>
                                <Button variant='ghost' onClick={onOpen} _hover={{ color: 'black', fontWeight: '700', bg: '#E2E8F0' }} w='10rem' h='2rem' justifyContent='flex-start' mt='.2rem' fontSize='sm' color='slightShade' leftIcon={<FiFolderPlus size='1.5rem' />} >Folder</Button>

                                {/* Create Folder Button Modal */}
                                <Modal size='xl' motionPreset="slideInRight" isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent >
                                        <ModalHeader fontSize='2rem' bg='#4257b2' color='white'>Create a new folder</ModalHeader>
                                        <ModalCloseButton color='white' />
                                        <ModalBody>
                                            <FormControl>
                                                <Input mt='1rem' pl='.4rem' size='lg' _focus={{ borderBottom: '4px solid #ffdc62' }} onChange={folderNameChangeHandler} placeholder='Enter a title' value={folderName} borderBottom='4px solid black' variant='unstyled' />
                                                <FormLabel>TITLE</FormLabel>
                                                <Input mt='1rem' pl='.4rem' size='lg' _focus={{ borderBottom: '4px solid #ffdc62' }} placeholder='Enter a description (optional)' borderBottom='4px solid black' variant='unstyled' type="email" />
                                                <FormLabel fontSize='sm'>DESCRIPTION</FormLabel>
                                            </FormControl>
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button mb='1rem' isDisabled={!folderName} _hover={{ bg: 'secondary' }} isFullWidth onClick={e => { onClose(); addNewFolderHandler(e); }} bg='secondary' color='white'>Create Folder</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>

            {/* Right Side Nav Bar */}
            <Flex align='center' >
                {/* Yellow Upgrade Button */}
                <Button mr='1rem' _hover={{ bg: 'highlight' }} h='2rem' w='11rem' fontSize='sm' color='primary' bg='highlight' >Upgrade: free 7-day trial </Button>
                {/* Search Bar */}
                <InputGroup mr='1rem' h='2rem' w='14rem'>
                    <InputLeftElement pb='.3rem' pointerEvents="none" children={<AiOutlineSearch size='1.4rem' color='#cedaf3' />} />
                    <Input variant='unstyled' h='2rem' bg='hsla(0,0%,100%,0.1)' type="tel" placeholder="Search" />
                </InputGroup>
                {/* Notification Button */}
                <IconButton mr='1rem' _hover={{ opacity: '.7' }} size='sm' isRound color='#cedaf3' bg='hsla(0,0%,100%,0.1)' aria-label="Search Notifications" icon={<AiOutlineBell size='1.2rem' />} />
                {/* Avatar Button */}
                <Popover>
                    <PopoverTrigger>
                        <Button mr='1rem' variant='unstyled' >
                            <Avatar size='sm'  icon={<FaMask size='1.5rem' color='black' />} bg='white' />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent w='15rem'>
                        <PopoverBody p='0rem'>
                            <Flex direction='column' >

                                {/* 1/3 | Avatar + Name + Email */}
                                {/* <Flex justify='flex-start' align='center' borderBottom='solid .25rem #f6f7fb' flex='1' p='.5rem 1.5rem'>
                                    <Avatar size='sm' mr='1rem'  icon={<FaMask size='1.5rem' color='white' />} bg='#242222' />
                                    <Flex direction='column' maxW='8.5rem' >
                                        <Text fontSize='sm' isTruncated >{currentUser.displayName}</Text>
                                        <Text fontSize='sm' isTruncated >{currentUser.email }</Text>
                                    </Flex>
                                </Flex> */}

                                {/* 2/3 | Profile | Night mode | Settings */}
                                <Flex direction='column' borderBottom='solid .25rem #f6f7fb'>
                                    <Button _focus={{}} pl='1.5rem' justifyContent='flex-start' variant='ghost' color='gray.500' >Profile</Button>
                                    <Button _focus={{}} pl='1.5rem' justifyContent='flex-start' variant='ghost' color='gray.500' >Night mode</Button>
                                    <Button _focus={{}} pl='1.5rem' justifyContent='flex-start' variant='ghost' color='gray.500' >Settings</Button>
                                </Flex>

                                {/* 3/3 | Log out */}
                                <Flex direction='column' h='3rem' justify='center' >
                                    <Button onClick={logout} h='4rem' _focus={{}} pl='1.5rem' justifyContent='flex-start' variant='ghost' color='gray.500' >Log Out</Button>
                                </Flex>
                            </Flex>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Flex>
        </Flex>
    )
}

export default TopNavBar