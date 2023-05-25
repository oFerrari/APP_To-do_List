import { AppBar, Badge, Button, CircularProgress, Container, Grid, TextField, Toolbar, Typography, colors, useTheme } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import { CheckFat, PlusCircle } from "@phosphor-icons/react";
//import { Task } from "../../Types";
import { ChangeEvent, useEffect, useState } from "react";
import { CardList } from "../../components/CardList";
import { Task } from "../../Types";
import { getAll, save } from "../../services/api";

//import { Dados } from "../../services/api";

export function Home() {
    //const theme = useTheme()
    const [tasks, setTasks] = useState<Task[]>([{ id: 1, description: 'teste' },])
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        async function listTasks() {
            setIsLoading(true)
            setTasks(await getAll())
            setIsLoading(false)
        }
        listTasks()
    }, [])

    /* const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }; */

    const handleSaveTask  = async(event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault();
        const newTask = {
            id: generateUniqueId(),
            description: inputValue,
            done: false,
        };
        
        const taskSaved = await save(newTask)
        setTasks((oldTasks:Task[]) => {return [...oldTasks, taskSaved]});
        setInputValue('')
            /* const taskSaved = await save(newTask)
            setTasks([...tasks, newTask]);
            setInputValue(''); 
            ;*/
    };

    const generateUniqueId = (): number => {
        // Lógica para gerar um ID único para a tarefa
        // Implemente de acordo com a sua necessidade
        return Math.floor(Math.random() * 1000);
    };

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
                        color: useTheme().palette.primary.light,
                        gap: useTheme().spacing(2),
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
                            <TextField value={inputValue} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                                setInputValue(event.target.value)
                            }} placeholder="Adicione uma nova Tarefa" name="task" fullWidth sx={{
                                backgroundColor: colors.grey[800]
                            }} />
                        </Grid>

                        <Grid item xl={2} sm={12}>
                            <Button variant="contained" onChange={handleSaveTask} fullWidth sx={{
                                height: '100%'
                            }}><span>Criar</span><PlusCircle size={32} />
                            </Button>
                        </Grid>

                        <Grid container xs={12} spacing={useTheme().spacing(1)} sx={{
                            marginTop: '25px',
                        }}>
                            <Grid item xs={11} sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: useTheme().spacing(3),
                                flexWrap: 'wrap',
                            }}>
                                <Typography variant="caption" sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 'bold',
                                    color: '#52A8DE',
                                    gap: useTheme().spacing(3),
                                    fontSize: '15px'
                                }}>
                                    <span>Tarefas Criadas</span>
                                    <Badge color="primary" badgeContent={0} showZero></Badge>

                                </Typography>
                                <Typography variant="caption" sx={{
                                    color: '#9089FA',
                                    fontWeight: 'bold',
                                    alignItems: 'center',
                                    display: 'inline-flex',
                                    gap: useTheme().spacing(3),
                                    fontSize: '14px'
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


                <article>
                    <Container maxWidth="lg" sx={{ paddingTop: '100px', paddingBottom: '20px' }}>
                        <hr />

                        {isLoading ? (
                            <CircularProgress />
                            
                        ) : (

                            
                            <CardList tasks={tasks} />
                            //<NoCardList />
                        )}

                    </Container>
                </article>


            </main>
        </>
    )
}