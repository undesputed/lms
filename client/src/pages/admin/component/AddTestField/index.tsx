import React from 'react';
import { ec_care_test_category } from '../../../../entity/ec_care_test_category';
import { ec_care_test_field } from '../../../../entity/ec_care_test_field';
import { Box, Grid, Typography, TextField, Divider, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import patient from '../../patient';

interface AddTestFieldProps {
    onChange?: (event: any) => void;
    label?: string;
    textFieldName?: string;
    dropDown?: boolean;
}

const AddTestField: React.FC<AddTestFieldProps> = ({
    onChange,
    label,
    textFieldName,
    dropDown
}) => {
    return (
        <><Box
            width={"lg"}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"row"}
            alignItems={"center"}
        >
            <Grid container xs={12} md={12}>
                <Grid item xs={12} md={4} display={"flex"} alignItems={"center"}>
                    <Typography
                        variant="h3"
                        display="block"
                        gutterBottom
                        sx={{
                            fontWeight: "bolder",
                            fontSize: "16px",
                        }}
                    >
                        {label}
                    </Typography>
                </Grid>
                <Grid item xs={12} md={2} display={"flex"} alignItems={"center"}>
                    <Typography
                        variant="h4"
                        display="block"
                        gutterBottom
                        sx={{
                            fontWeight: "bolder",
                            fontSize: "20px",
                        }}
                    >
                        :
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} display={"flex"} alignItems={"center"}>
                    {
                        dropDown ? (
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Laboratory Test Types</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                    onChange={onChange}
                                    name={textFieldName}
                                >
                                    <MenuItem value={"Routine"}>Routine</MenuItem>
                                    <MenuItem value={"Renal Function"}>Renal Function</MenuItem>
                                    <MenuItem value={"Lipid Profile Package"}>Lipid Profile Package</MenuItem>
                                    <MenuItem value={"Electrolytes"}>Electrolytes</MenuItem>
                                    <MenuItem value={"Metabolism"}>Metabolism</MenuItem>
                                    <MenuItem value={"Hepatitis Marker"}>Hepatitis Marker</MenuItem>
                                    <MenuItem value={"Liver Profile"}>Liver Profile</MenuItem>
                                    <MenuItem value={"Thyroid Function (TSH, FT4, FT3)"}>Thyroid Function (TSH, FT4, FT3)</MenuItem>
                                    <MenuItem value={"Serology"}>Serology</MenuItem>
                                    <MenuItem value={"Radiology"}>Radiology</MenuItem>
                                    <MenuItem value={"Scheduled"}>Scheduled</MenuItem>
                                </Select>
                            </FormControl>
                        ) : (
                            <TextField
                                name={textFieldName}
                                fullWidth
                                id={textFieldName}
                                placeholder={label}
                                onChange={onChange}
                            />

                        )
                    }
                </Grid>
            </Grid>
        </Box></>
    )
}

export default AddTestField;