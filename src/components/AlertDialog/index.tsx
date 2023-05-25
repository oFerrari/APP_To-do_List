import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useState } from "react";

export function AlertDialog(){
    const [isOpen, setIsOpen] = useState(true)
    return(
        <>
            <Dialog open={isOpen}>
                <DialogContent>
                    <DialogContentText>
                        Deseja Realmente excluir a tarefa
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button>SIM</Button>
                    <Button onClick={()=> setIsOpen(false)}>NAO</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}