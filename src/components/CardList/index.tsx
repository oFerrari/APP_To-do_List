import { Grid, IconButton, Typography } from "@mui/material";
import CheckButton from "../CheckButton";
import { Task } from "../../Types";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { AlertDialog } from "../AlertDialog";

type TasksProps = {
    tasks: Task[],
}

export function CardList({ tasks }: TasksProps) {

    return (
        <>

            {tasks?.map((task) => (
                
                <Grid key={task.id} item xs={12} container wrap="nowrap" spacing={0} sx={{
                    padding: '15px',
                    border: '0.5px solid #808080',
                    background: '#272727',
                    borderRadius: '10px',
                    paddingBottom: '20px',
                    margin: '10px 0',
                    alignItems:'center'
                }}>

                      
                        <Grid item xs={11} sx={{display:'flex'}}>
                           <Typography sx={{textAlign:'justify'}}>
                            <CheckButton label={task.description} />
                            </Typography>
                        </Grid>


                        <Grid item xs={1}>

                            <IconButton aria-label="delete" size="large" onClick={() => <AlertDialog />}>
                                <DeleteOutlinedIcon />
                            </IconButton>

                        </Grid>

                </Grid>
            ))}

        </>
    )
}