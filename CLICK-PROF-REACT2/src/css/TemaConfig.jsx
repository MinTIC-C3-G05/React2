import {createMuiTheme} from '@material-ui/core/'
import { purple, indigo } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette:{
        primary:{
            main: indigo[500]
        },
        secondary:{
            main:purple[500]
        }
    }
})


export default theme;