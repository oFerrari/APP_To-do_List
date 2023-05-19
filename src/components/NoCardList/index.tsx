import { Box, Typography } from "@mui/material";
import PostAddIcon from '@mui/icons-material/PostAdd';

export function NoCardList() {
    return (
        <>

            <Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '30px',
                }}>
                    <PostAddIcon sx={{
                        display: 'flex',
                        position: 'relative',
                        fontSize: '150px',
                        padding: '10px',
                        color: 'gray',
                    }} />


                </Box>
                <Box>
                    <Typography sx={{
                        fontWeight: 'bold',
                        color: 'gray',
                        fontSize: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>Você ainda não tem Tarefas Cadastradas</Typography>
                    <Typography sx={{
                        color: 'gray',
                        fontSize: '25px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>Crie tarefas e organize seus itens a fazer</Typography>
                </Box>
            </Box>

        </>
    )
}