import { Grid, IconButton, Typography } from "@mui/material";
import CheckButton from "../CheckButton";
import { Task } from "../../Types";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

type TasksProps = {
    tasks: Task[],
}

export function CardList({ tasks }: TasksProps) {

    return (
        <>

            {tasks.map((task) => (
                <Grid container wrap="nowrap" spacing={1} sx={{
                    padding: '15px',
                    border: '0.5px solid #808080',
                    background: '#272727',
                    borderRadius: '10px',
                    paddingBottom: '20px',
                    margin: '10px 0',
                    alignItems:'center'
                }}>
                  

                        <Grid item xs={1}>
                            <CheckButton label="" />
                        </Grid>

                        <Grid item xs={10}>
                            <Typography variant="body2" noWrap>

                                {task.description}

                            </Typography>
                        </Grid>

                        <Grid item xs={1}>

                            <IconButton aria-label="delete" size="large">
                                <DeleteOutlinedIcon />
                            </IconButton>

                        </Grid>

                   


                </Grid>
            ))}

        </>
    )
}