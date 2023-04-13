
import { Battery30TwoTone, CheckBox, ExpandLess, ExpandLessRounded, ExpandMore, ExpandMoreOutlined, ExpandMoreRounded, MailOutline, MoreVertRounded, Save, Send } from '@mui/icons-material'
import { Avatar, AvatarGroup, Badge, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, CircularProgress, Collapse, Divider, FormControl, FormControlLabel, FormGroup, IconButton, LinearProgress, List, ListItem, ListItemAvatar, MenuList, Radio, RadioGroup, Rating, Skeleton } from '@mui/material'
import React, { useState } from 'react'
import Client from '../assets/images/client-one.png'

const Homepage = () => {
  const [expand, setExpand] = useState(false)
  const [value, setValue] = useState(2)

  return (
    <div>
      <p className='bg-green-500 text-4xl text-custom-light'>I am here</p>
      <div>what shall we do today</div>
      <Avatar alt='David Olufuwa' src={Client} className='w-20 h-20'></Avatar>
      <Avatar className='bg-green-800 text-red-200' variant=''>D.O</Avatar>
      <AvatarGroup max={5} className='bg-green-200 flex justify-end'>
        <Avatar>D.O</Avatar>
        <Avatar>D.O</Avatar>
        <Avatar>D.O</Avatar>
        <Avatar>D.O</Avatar>
        <Avatar className='text-custom-deep'>D.O</Avatar>
        <Avatar>D.O</Avatar>
        <Avatar>D.O</Avatar>
      </AvatarGroup>
      
      <Badge badgeContent={7} color="warning" invisible={false} max={6} showZero>
        <MailOutline className='h-10 w-full'/>  
      </Badge>
      <Badge variant='dot' badgeContent={3} color="error" className='pl-4'>
        <Avatar className='border-2 border-red-800'>Olcopix</Avatar>
      </Badge>
      <Button variant='outlined' className='ml-5 bg-blue-300 hover:bg-green-200 border-2 rounded-lg hover:text-red-200' href='https://google.com'>
          what shall we do today then
      </Button>
      <Button endIcon={<Send/>} className='bg-orange-500 p-2 text-sm'>Send</Button>

      <ButtonGroup className='mt-10' variant='contained'>
        <Button className='capitalize'>One time</Button>
        <Button>two time</Button>
        <Button>three time</Button>
      </ButtonGroup>

      <Card variant='outlined' className='rounded-3xl bg-red-300'>
        <CardHeader 
          avatar={
            <Avatar className='bg-indigo-500'>O.G</Avatar>
          }
          action={
            <Button>
              <MoreVertRounded></MoreVertRounded>
            </Button>
          }
        />
        <CardContent>
          <div>One time</div>
        </CardContent>
        <CardMedia
          component="img"
          image={Client}
          sx={{display:"block", width:"20%" }}
        />
        <CardActions>
            {expand ?
            <ExpandMore
              expand={expand}
              onClick={()=>setExpand(!expand)}
            >
            </ExpandMore>
            :
            <ExpandLess
              onClick={()=>setExpand(!expand)}
            >
            </ExpandLess>
            }
        </CardActions>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <CardContent>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
            <div>loremipsum</div>
          </CardContent>
        </Collapse>
      </Card>

      <List>
        <ListItemAvatar>Hello</ListItemAvatar>
            <Divider variant='middle' >Wussgood </Divider>
        <ListItemAvatar>Hello</ListItemAvatar>

      </List>

      <IconButton variant="outlined">
          <Save fontSize='large'/>
      </IconButton>

      <CircularProgress className='block' sx={{color
      :"aqua"}}/>
      <LinearProgress className='block my-40'/>

      <RadioGroup name='book-worm' >
        <FormControlLabel
          value="male" control={<Radio/>} label="male" disabled={true}
        />
        <FormControlLabel
          value="female" control={<Radio/>} label="female"
        />
      </RadioGroup>

      <Rating sx={{color:"green"}} controlled/>
      <Rating sx={{color:"red"}} value={value} readOnly/>

      <Skeleton variant='text' className='my-10'/>
      <Skeleton variant='circular' className='my-10 h-10 w-10 bg-green-200'/>
       
    </div>
  )
}

export default Homepage