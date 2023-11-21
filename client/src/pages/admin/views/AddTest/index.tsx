import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import AdminHeader from '../../utils/header';
import SectionHeader from '../../component/SectionHeader';
import patient from '../../patient';
import AddTestField from '../../component/AddTestField';
import { reducer } from './reducer';
import { initialState } from './initialState';
import { useAppDispatch, useAppSelector } from '../../../../actions/hooks';
import { fetchTestField, selectAllTestField } from '../../../../reducers/testField/testFieldSlice';
import { RootState } from '../../../../app/store';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';

const steps = ['Basic Information', 'Test Field Inputs', 'Input Fields', 'Final Step'];

export default function AddTestPage() {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const [activeStep, setActiveStep] = React.useState(0);
    const appDispatch = useAppDispatch();
    const selectAllField = useAppSelector((state: RootState) => selectAllTestField(state));

    const handleNext = () => {
        console.log(state)

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };


    const onChangeField = (event: any) => {
        dispatch({
            type: "setTestCategory",
            name: event.target.name,
            value: event.target.value
        })
    }

    const onChecked = (selection: any) => {
        dispatch({
            type: "setSelectedFields",
            payload: selection
        })
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'test_name', headerName: 'Field Name', width: 200 },
    ];

    React.useEffect(() => {
        async function fetchAllField() {
            try {
                await appDispatch(fetchTestField());
            } catch (err) {
                console.log(err);
            }
        }

        fetchAllField();
    }, [])
    return (
        <>
            <Helmet>
                <title>Admin Dashboard</title>
            </Helmet>
            <Container maxWidth="lg">
                <Box sx={{ width: "100%" }}>
                    <AdminHeader />
                </Box>
                <Paper sx={{ p: { xs: 2, md: 3 } }}>
                    <SectionHeader title="ADD NEW LABORATORY TESTS" />
                    <Box sx={{ width: '100%' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                const stepProps: { completed?: boolean } = {};
                                const labelProps: {
                                    optional?: React.ReactNode;
                                } = {};
                                return (
                                    <Step key={label} {...stepProps}>
                                        <StepLabel {...labelProps}>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography sx={{ mt: 2, mb: 1 }}>
                                    All steps completed - you&apos;re finished
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleReset}>Reset</Button>
                                </Box>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {
                                    (function () {
                                        switch (activeStep) {
                                            case 0: return (
                                                <Box component="form" noValidate sx={{ mt: 3 }}>
                                                    <Grid container spacing={2}>
                                                        <Grid item xs={12} md={12}>
                                                            <AddTestField dropDown={false} onChange={onChangeField} label='LABORATORY TEST NAME' textFieldName='name' />
                                                        </Grid>
                                                        <Grid item xs={12} md={12}>
                                                            <AddTestField dropDown={false} onChange={onChangeField} label='DESCRIPTION' textFieldName='description' />
                                                        </Grid>
                                                        <Grid item xs={12} md={12}>
                                                            <AddTestField dropDown={false} onChange={onChangeField} label='PRICE' textFieldName='price' />
                                                        </Grid>
                                                        <Grid item xs={12} md={12}>
                                                            <AddTestField dropDown={true} onChange={onChangeField} label='TYPE' textFieldName='type' />
                                                        </Grid>
                                                    </Grid>
                                                </Box>
                                            )
                                            case 1: return (
                                                <Box component="form" noValidate sx={{ mt: 3, height: 500, width: 1 }}>
                                                    <DataGrid
                                                        rows={selectAllField}
                                                        columns={columns}
                                                        checkboxSelection
                                                        disableColumnFilter
                                                        disableColumnSelector
                                                        disableDensitySelector
                                                        slots={{ toolbar: GridToolbar }}
                                                        slotProps={{
                                                            toolbar: {
                                                                showQuickFilter: true,
                                                            },
                                                        }}
                                                        onRowSelectionModelChange={onChecked}
                                                    />
                                                </Box>
                                            )
                                            case 2: return (
                                                <Typography>Step 2</Typography>
                                            )
                                            case 3: return (
                                                <Typography>Step 3</Typography>
                                            )
                                        }
                                    }())
                                }
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />
                                    <Button onClick={handleNext} variant='outlined'>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Paper>
            </Container>
        </>
    );
}
