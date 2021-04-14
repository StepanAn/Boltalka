import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MyAvatar from "../MiniComponents";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {MyAccount} from "../../App";
import {useContext} from "react";
import {observer} from "mobx-react-lite";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import Account from "../../Models/Accounts/Account";

const useStyles = makeStyles((theme) =>({
    root: {
        marginTop: theme.spacing(10),
    },
    avatar:{
        width: theme.spacing(35),
        height: theme.spacing(35),
    },
}));
export const AccountInfo =  observer(function AccountInfo(props){
    const classes = useStyles();
    const myAccount : Account = useContext(MyAccount);
    return(
        <Container maxWidth="md" className={classes.root}>
            <div>
                <Grid container spacing={2} >
                    <Grid item sm={6} xs={12} >
                        <MyAvatar src={myAccount.avatar.content} className={classes.avatar}  />
                    </Grid>
                    <Grid item sm={6} xs={12} >
                        <Grid container spacing={1}>
                            <Grid item xs={11}>
                                <Typography component="div" variant="h5" align="center">
                                    {`${myAccount.firstName} ${myAccount.surName}`}
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton color="primary" aria-label="edit account">
                                    <EditIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
});
