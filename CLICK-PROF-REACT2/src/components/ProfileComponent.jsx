import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import {
  Icon,
  IconButton,
  makeStyles,
  Typography,
  ThemeProvider,
  Divider,
  styled,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
 

  
} from "@material-ui/core";


import theme from "../css/TemaConfig";
import LogOut from "./LogOut";











const useStyle = makeStyles({
  botonPersonalizado: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

function ProfileComponent() {
  const classes = useStyle();

  const { user, isAuthenticated, isLoading } = useAuth0();

  const [level, setLevel] = useState("");

  axios.get("/test").then((response) => {
    response.data.map((element) => {
      if (user.email === element.email) {
        setLevel(element.level);
        console.log(element);
      }
    });
  });

  if (isLoading) {
    return <div>Loading.....</div>;
  }
  return (
    isAuthenticated && (
      <ThemeProvider theme={theme}>
        <Divider/>
        
        <div
          style={{
            background: "#212529",
            height: "200px",
            
            textAlign: "center",
          }}
        >
          

         <div style={{ textAlign:"center", display:"flex", justifyContent:"space-between"}}>
            

            <div style={{marginRight:"20px"}}>
            
            </div>
            
         </div>





          <span style={{ textAlign: "center", marginTop:"5%" }}>
            <img
              src={user.picture}
              alt={user.name}
              style={{
                clipPath: "circle(50% at 50% 50%)",
                height: "100px",
                width: "100px",
               
                marginTop:"4%"
                
              }}
            />;
           
          </span>
          
         
          
        </div>
        <Typography variant="h4" color="primary" align="center" >
              PROFILE
            </Typography>


              {/* USER INFORMATION */}
        <div style={{background:"", textAlign:"center", display:"flex", justifyContent:"left"}}>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#456' }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon>badge</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Name" secondary={user.name} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Icon>emailrounded</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Email" secondary={user.email} />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
           <Icon>graderounded
</Icon>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Level" secondary={level === "" ? <Link to="/quiz">No level Registered. Please take our test</Link> : level} />
      </ListItem>
    </List>
    </div>

        <Divider  color="#123"></Divider>
        <Divider  color="primary"></Divider>
        <br />

        <div style={{display:"flex", justifyContent:"space-around",zIndex:"1"}}>
          <Button color="primary" variant="contained" href="/quiz" > <Icon>quiz</Icon> TEST </Button>
          <Button color="primary" variant="contained" href="/vocabulary" > <Icon>translate</Icon> VOCABULARY </Button>
          <Button color="primary" variant="contained" href="/videos" > <Icon>video_library</Icon> RESOURCES </Button>
          
        </div>
        

        
      
        
      </ThemeProvider>
    )
  );
}

export default ProfileComponent;
