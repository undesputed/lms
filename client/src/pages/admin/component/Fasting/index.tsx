import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

interface FastingProps {
  onChange?: (event: any) => void;
}

const Fasting: React.FC<FastingProps> = ({ onChange }) => {
  return (
    <Box component="form" noValidate sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Typography variant="h3">FASTING PROFILE</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="wbc"
            required
            fullWidth
            id="wbc"
            helperText="White Blood Cells (WBC)"
            placeholder="White Blood Cells (WBC)"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="rbc"
            required
            fullWidth
            id="rbc"
            helperText="Red Blood Cells (RBC)"
            placeholder="Red Blood Cells (RBC)"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="hgb"
            required
            fullWidth
            id="hgb"
            helperText="HGB"
            placeholder="HGB"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="hct"
            required
            fullWidth
            id="hct"
            helperText="HCT"
            placeholder="HCT"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="plt"
            required
            fullWidth
            id="plt"
            helperText="PLT"
            placeholder="PLT"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3">DIFFERENTIAL COUNT</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="neu"
            required
            fullWidth
            id="neu"
            helperText="NEU (%)"
            placeholder="NEU (%)"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="lym"
            required
            fullWidth
            id="lym"
            helperText="LYM (%)"
            placeholder="LYM (%)"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="mon"
            required
            fullWidth
            id="mon"
            helperText="MON (%)"
            placeholder="MON (%)"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="eos"
            required
            fullWidth
            id="eos"
            helperText="EOS (%)"
            placeholder="EOS (%)"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="bas"
            required
            fullWidth
            id="bas"
            helperText="BAS (%)"
            placeholder="BAS (%)"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="total"
            required
            fullWidth
            id="total"
            helperText="TOTAL (%)"
            placeholder="TOTAL (%)"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3">RBC PARAMETERS</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="mcv"
            required
            fullWidth
            id="mcv"
            helperText="MCV"
            placeholder="MCV"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="mch"
            required
            fullWidth
            id="mch"
            helperText="MCH"
            placeholder="MCH"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            name="mchc"
            required
            fullWidth
            id="mchc"
            helperText="MCHC"
            placeholder="MCHC"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="other"
            required
            fullWidth
            id="other"
            helperText="Other"
            placeholder="Other"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="remarks"
            required
            fullWidth
            id="remarks"
            helperText="REMARKS"
            placeholder="REMARKS"
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Divider light variant="middle" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Box sx={{ textAlign: "center" }} mt={2}>
            <Button
              size="medium"
              variant="outlined"
              sx={{ color: "#3695D1", mx: 1 }}
            >
              Submit
            </Button>
            <Button
              size="medium"
              variant="contained"
              sx={{ backgroundColor: "#3695D1", mx: 1 }}
            >
              Clear
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Fasting;
