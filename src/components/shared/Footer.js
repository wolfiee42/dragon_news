import { Box, Button, Container, IconButton } from '@mui/material';
import React from 'react';


// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';



const FooterSec = () => {

    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Page",
            pathname: "/page",
        },
        {
            route: "Category",
            pathname: "/category",
        },
        {
            route: "News",
            pathname: "/news",
        },
        {
            route: "About",
            pathname: "/about",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },

    ];


    return (
        <div>
            <Box className="px-2 py-10 bg-black">
                <Container>
                    <Box className="text-center" sx={{
                        "& svg": {
                            color: "white",
                        }
                    }}>

                        <IconButton>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton>
                            <YouTubeIcon />
                        </IconButton>
                        <IconButton>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton>
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                    <Box className=" w-full my-5 text-center">
                        {navItems.map(item => <Link key={item} href={item.pathname}>
                            <Button className='text-white'>
                                {item.route}
                            </Button>
                        </Link>
                        )}
                    </Box>
                    <h1 className='text-slate-50 text-center'>@2023 Dragon News. Design by Programming Hero</h1>
                </Container>
            </Box>

        </div>
    );
};

export default FooterSec;