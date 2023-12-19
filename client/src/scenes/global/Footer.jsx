import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box marginTop="70px" padding="40px 0" backgroundColor={neutral.light}>
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
            color={shades.secondary[500]}
          >
            Majestic Pet Store
          </Typography>
          <div>
          Step into Majestic Pets, your premier destination for all things pet-related! Our store, nestled in the heart of the community, offers a carefully curated selection of premium pet food, 
          delightful toys, and top-notch grooming essentials to ensure your furry, feathery, or scaly companions live their best lives. 
          Explore our vibrant shelves filled with high-quality products, from top-rated brands for dogs and cats to specialty diets for small mammals, birds, and reptiles. 
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          <Typography mb="30px">Our Business</Typography>
          <Typography mb="30px">Stylists</Typography>
          <Typography mb="30px">Terms </Typography>
          <Typography mb="30px">More info</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          <Typography mb="30px">Customer Care</Typography>
          <Typography mb="30px">Book An Appointment</Typography>
          <Typography mb="30px">Order Online</Typography>
          <Typography mb="30px">Returns Policy</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">
            pet store avenue
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
            Email: pet-store@gmail.com
          </Typography>
          <Typography mb="30px">647-PET-8390</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
