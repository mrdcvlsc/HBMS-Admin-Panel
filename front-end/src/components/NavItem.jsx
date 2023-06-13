import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'
import NavHoverBox from '../components/NavHoverBox'
import {Link as ReactRouterLink} from 'react-router-dom'


export default function NavItem({ icon, title, description, active, navSize,to }) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    as={ReactRouterLink}
                    to = {to}
                    backgroundColor={active && "blue.100"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "secondary" }}
                    w={navSize == "large" && "100%"}
                >
                    <MenuButton w="100%">
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#82AAAD" : "white"} />
                            <Text fontWeight="medium" ml={5} display={navSize == "small" ? "none" : "flex"} color="white">{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList
                    py={0}
                    border="none"
                    w={200}
                    h={200}
                    ml={5}
                >
                    <NavHoverBox title={title} icon={icon} description={description} />
                </MenuList>
            </Menu>
        </Flex>
    )
}
