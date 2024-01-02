import * as React from 'react';
import { Main } from "./components/Layout2";
import { NavbarCustom, NavbarItem } from "./components/NavbarCustom";
import './App.css'
import PlayIcon from '@mui/icons-material/PlayArrow';
import NextIcon from '@mui/icons-material/FastForward';
import PreviousIcon from '@mui/icons-material/FastRewind';
import Card2 from './components/Card2';
import { IconButton } from '@mui/material';
import dataJson from "./data_avatar.json"
import { Gallery, GalleryAvatar } from './components/Layout3_avatar';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import RecipeReviewCard from './components/Card2';
import MemberAvatar from './components/Avatar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function App() {

    console.log(dataJson)
    const users = convertUsersToArrayOfObject(dataJson)

    const style = {margin: "auto", width: "370px"};

    // const cards = users.map((e, i) => {
    //     return (
    //         <GalleryItem key={i}>
    //             <Card2 user={e}/>
    //             {/* <Item sx={{height: "300px"}}/> */}
    //             {/* <Card user={e} style={style}/>   */}
    //         </GalleryItem>
    //     )
    // })
    const avatars = users.map((e, i) => {
        return (
            <GalleryAvatar key={i}>
                <MemberAvatar user={e}/>
                {/* <Item sx={{height: "300px"}}/> */}
                {/* <Card user={e} style={style}/>   */}
            </GalleryAvatar>
        )
    })


    console.log(style)
    console.log(users[0])
    return (
        <div className="App">
            
                <Gallery>
                {avatars}
                </Gallery>
            
            <NavbarCustom>
                <NavbarItem>
                    <IconButton>
                        <PreviousIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    {/* <PlayIcon/> */}
                    <IconButton>
                        <PlayIcon />
                    </IconButton>
                </NavbarItem>
                <NavbarItem>
                    <IconButton>
                        <NextIcon />
                    </IconButton>
                </NavbarItem>
            </NavbarCustom>

        </div>
    )
}

function convertUsersToArrayOfObject(users) {
    const pos = getUserPositionIndex(users[0])

    const usersArrayOfObject = users.map(
        (user) => {
            return getUser(user, pos)
        }
    )
    usersArrayOfObject.shift()
    return usersArrayOfObject
}

function getUser(targetUser, pos) {
    return (
        {
            name: targetUser[pos.name],
            imgSrc: targetUser[pos.imgSrc],
            number: targetUser[pos.number]
        }
    )
}
function getUserPositionIndex(user0) {
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.number = pos.Number
    return pos
}

function test(){
    user0 = ['Timestamp', 'Email Address', 'Name', 'Photo', 'Grade', 'Wish', 'ThumbnailLink']
    var pos = Object()
    user0.map(
        (e, i) => {
            pos[e] = i
        }
    )
    pos.imgSrc = pos.ThumbnailLink
    pos.name = pos.Name
    pos.grade = pos.Grade
    pos.wish = pos.Wish
    return pos
}