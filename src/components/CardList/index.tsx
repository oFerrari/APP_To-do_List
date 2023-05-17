import { Checkbox, Grid, IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteForeverSharp';
import CheckButton from "../CheckButton";
import { Task } from "../../Types";

type TasksProps ={
    tasks : Task[],
    inputValue: string;
}

export function CardList({tasks}: TasksProps) {

    return (
        <>
        {tasks.map((task) => (
            <Grid container wrap="nowrap" spacing={2} sx={{ 
                padding: '20px',
                background:'#272727',
                borderRadius:'10px'
                }}>
                <Grid container wrap="nowrap" spacing={4} alignItems="center">

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

                
            </Grid>
            ))}
        </>
    )
}