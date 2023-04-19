import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICourse, IEvent } from '../../../types';
import Link from 'next/link';

type props = {
    data: IEvent | ICourse,
    isEvent: boolean
}


export default function BasicCard({data, isEvent}:props) {
    return (
        <Card sx={{ width:400 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.icon}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Duración: {data.duration}
                </Typography>
                <Typography variant="body2">
                    {data.description.slice(0,50)+"..."}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={isEvent? `/eventos/${data.id}` : `/cursos/${data.id}`} >
                    <Button sx={{backgroundColor:"#800080", color:"white"}}>{`Ver ${isEvent?"evento":"curso"}`}</Button>
                </Link>
            </CardActions>
        </Card>
    )
}