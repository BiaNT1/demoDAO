import head from "next/head";
import React from "react";
import { Button,Menu } from "semantic-ui-react";
import { Link } from "../routes.js"

const header = () => {
    return(
        <Menu>
            <Link href='/'>
                <Button>Home</Button>
            </Link>
            <Menu.Menu position="right">
                <Link href='/CreateIdea'>
                    <Button>Create Idea for HOST</Button>
                </Link>
                <Link href='/Votecb'>
                    <Button>Page Contribute</Button>
                </Link>
            </Menu.Menu>
        </Menu>
    )
};

export default header;