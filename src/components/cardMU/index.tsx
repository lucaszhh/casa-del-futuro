import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ICourse, IEvent } from '../../../types';
import Link from 'next/link';
import Image from 'next/image';

type props = {
    data: IEvent | ICourse,
    isEvent: boolean
}

export default function BasicCard({data, isEvent}:props) {
    return (
        <Card sx={{ width:400 }}>
            <CardContent>
                <Image src={data.category.icon} alt={data.category.category} width={350} height={280}/>
                
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.category.category}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Duración: {data.duration}
                </Typography>
                <Typography variant="body2">
                    {data.description.slice(0,100)+"..."}
                </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"end" }}>
                <Link href={isEvent? `/eventos/${data.id}` : `/cursos/${data.id}`} >
                    <Button variant='primary' sx={{ marginRight:0.5}}>{`Ver ${isEvent?"evento":"curso"}`}</Button>
                </Link>
            </CardActions>
        </Card>
    )
}