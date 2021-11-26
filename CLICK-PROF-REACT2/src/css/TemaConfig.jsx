import {createMuiTheme} from '@material-ui/core/'
import { purple, indigo, red } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette:{
        primary:{
            main: indigo[500]
        },
        secondary:{
            main:red[600]
        },
        third:{
            main:purple[600]
        }

    }
})


export default theme;