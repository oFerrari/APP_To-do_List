import { Checkbox, Grid, IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteForeverSharp';

export function CardList(){
    return (
        <>
            <Grid container wrap="nowrap" spacing={2} sx={{ paddingTop: '20px' }}>
                        <Grid container wrap="nowrap" spacing={2} alignItems="center">
                            <Grid item>
                                <Checkbox color="primary" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>tarefa</Typography>
                            </Grid>
                            <Grid item xs={8}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.,
                             Dolores ex quo hic quibusdam impedit aspernatur veritatis
                              perspiciatis, temporibus, quidem consectetur eligendi 
                              similique suscipit tempora magnam natus, totam nisi quasi sed.
                            </Grid>
                        </Grid>

                        <Grid item xs={1}>
                            <Grid>
                            <IconButton aria-label="delete" size="large">
                        <DeleteOutlinedIcon />
                        </IconButton>
                        </Grid>
                        </Grid>
            </Grid>
        </>
    )
}