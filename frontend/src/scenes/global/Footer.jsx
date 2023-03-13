import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: { neutral }} = useTheme();
    return (
        <Box
            mt="70px"
            p="40px 0"
            backgroundColor={neutral.light}
        >
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                        color={shades.secondary[700]}
                    >
                        Pack For Adventure
                    </Typography>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </Box>

                <Box>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                    >
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Story</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                    >
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corprate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"
                    >
                        Contact Us
                    </Typography>
                    <Typography mb="30px"> 350 Independence Blvd, Virginia Beach, VA 23462</Typography>
                    <Typography mb="30px">contact@PackYourAdventure.com</Typography>
                    <Typography mb="30px">(757) 687-1938</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer;