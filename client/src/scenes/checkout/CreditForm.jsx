import { getIn } from "formik";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

const CreditForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
        fullWidth
        type="text"
        label="Card Number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.cardNumber}
        name={formattedName("cardNumber")}
        error={formattedError("cardNumber")}
        helperText={formattedHelper("cardNumber")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Experation Date(MM/YY)"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.expirationDate}
        name={formattedName("expirationDate")}
        error={formattedError("expirationDate")}
        helperText={formattedHelper("expirationDate")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Security Code"
        pattern="[0-9]{3}"
        maxlength="3"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.securityCode}
        name={formattedName("securityCode")}
        error={formattedError("securityCode")}
        helperText={formattedHelper("securityCode")}
        sx={{ gridColumn: "span 1" }}
      />
      <TextField
        fullWidth
        type="text"
        label="Name on Card"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.cardName}
        name={formattedName("cardName")}
        error={formattedError("cardName")}
        helperText={formattedHelper("cardName")}
        sx={{ gridColumn: "span 4" }}
      />
    </Box>
  );
};

export default CreditForm;
