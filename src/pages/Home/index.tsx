import { AppBar, Badge, Button, ButtonBase, Checkbox, Container, Grid, IconButton, TextField, Toolbar, Typography, colors, useTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { CheckFat, PlusCircle } from "@phosphor-icons/react";
import { Task } from "../../Types";
import { useEffect, useState } from "react";

//import { Dados } from "../../services/api";

export function Home() {

    const theme = useTheme()
    const [task,setTasks] = useState<Task[]>

    useEffect(()=>{

    },[])

    return (
        <>
            <CssBaseline />
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
                    <Typography variant="h5" component="h1" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: useTheme().spacing(2),
                        color: useTheme().palette.primary.light
                    }}> <CheckFat size={32} weight="fill" />
                        <span>To-do List</span>
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container sx={{
                    position: 'relative',
                    marginTop: '50px'
                }}>
                    <Grid container spacing={useTheme().spacing(0.5)} sx={{
                        position: 'absolute',
                        top: '-28px'
                    }}>
                        <Grid item xl={10} sm={12}>
                            <TextField placeholder="Adicione uma nova Tarefa" name="task" fullWidth sx={{
                                backgroundColor: colors.grey[800]
                            }} />
                        </Grid>

                        <Grid item xl={2} sm={12}>
                            <Button variant="contained" fullWidth sx={{
                                height: '100%'
                            }}><span>Criar</span><PlusCircle size={32} />
                            </Button>
                        </Grid>

                        <Grid container spacing={useTheme().spacing(1)} sx={{
                            marginTop: '25px',
                        }}>
                            <Grid item xs={10} sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: useTheme().spacing(3),
                                flexWrap: 'wrap',
                            }}>
                                <Typography variant="caption" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: useTheme().spacing(3)
                                }}>
                                    <span>Tarefas Criadas</span>
                                    <Badge color="primary" badgeContent={0} showZero></Badge>

                                </Typography>
                                <Typography variant="caption" sx={{

                                    alignItems: 'center',
                                    display: 'inline-flex',
                                    gap: useTheme().spacing(3),
                                }}>
                                    <span>Concluidas</span>
                                    <Badge color="primary" badgeContent={
                                        <span style={{ whiteSpace: 'nowrap', margin: '10px' }}>{`${0} de ${5}`}</span>
                                    } showZero sx={{ marginLeft: '15px' }} />
                                </Typography>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>

                <hr />
<article>

</article>
                <Container maxWidth="lg" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid container wrap="nowrap" spacing={2} alignItems="center">
                        <Grid item>
                            <Checkbox color="primary" />
                        </Grid>
                        <Grid item xs>
                            <Typography>tarefa</Typography>
                        </Grid>
                        <Grid item>
                            <IconButton color="primary">
                                ola
                            </IconButton>
                        </Grid>
                    </Grid>
                    <IconButton aria-label="delete" size="large">
        {/* //<DeleteIcon fontSize="inherit" /> */}
      </IconButton>
                </Grid>
    </Container>

                


            </main>
        </>
    )
}