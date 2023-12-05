import logo from "@/assests/heading.png"
import { getCurrentDateTime } from "@/utilities/getCurrentTime";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";


const Header = () => {
    const date = getCurrentDateTime();
    return (
        <Box>
            <Container className="w-full text-center my-7 space-y-4">
                <Image className="mx-auto" src={logo} alt="Heading Logo" width={500} height={500} />
                <Typography variant="body2">
                    Journalism Without Fear or Favour
                </Typography>
                <Typography>
                    {date}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;