import { AppBar, Button, Container, Grid, TextField, Toolbar, Typography, useTheme } from "@mui/material";

export function Home() {
    
    return (
        <>
            <AppBar position='static'>
                <Toolbar sx={{
                    paddingTop: useTheme().spacing(2),
                    paddingBottom: useTheme().spacing(2),
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '@media all': {
                        minHeight: 200,
                    }
                }}>
                <Typography variant="h5" component="h1">To-do List</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container>
                    <Grid container spacing={useTheme().spacing(0.5)}>
                        <Grid item xl={10} sm={12}>
                            <TextField name="task" fullWidth />
                        </Grid>
                        <Grid item xl={2} sm={12}>
                            <Button variant="contained" fullWidth >Criar</Button>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </>
    )
}