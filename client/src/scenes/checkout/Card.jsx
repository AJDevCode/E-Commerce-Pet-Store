import { Box, Typography } from "@mui/material";
import CreditForm from "./CreditForm";

const Card = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  return (
    <Box m="30px auto">
      {/* Card FORM */}
      <Box>
        <Typography sx={{ mb: "15px" }} fontSize="18px">
          Credit Card Information
        </Typography>
        <CreditForm
          type="cardInfo"
          values={values.cardInfo}
          touched={touched}
          errors={errors}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </Box>
    </Box>
  );
};

export default Card;
