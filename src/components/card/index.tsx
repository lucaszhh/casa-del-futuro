import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { ICourse, IEvent } from '../../../types'
import Link from 'next/link'
import Image from 'next/image'

type props = {
    data: IEvent | ICourse,
    isEvent: boolean
}

export default function BasicCard({data, isEvent}:props) {
    return (
        <Card variant='outlined' sx={{ maxWidth:"40%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", transition: "all 0.3s ease" ,'@media screen and (max-width: 768px)': {maxWidth:"70%"}, "&:hover": { transform: "translate3d(0, -5px, 0) scale(1.02)", boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.5)"}}}>
            <CardContent sx={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
                <Image src={data.category.icon} alt={data.category.category} width={350} height={280}  style={{width:"100%", maxWidth:"350px", height:"auto",margin:"auto"}}/>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    {data.category.category}
                </Typography>
                <Typography variant="h1">
                    {data.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Duración: {data.duration}
                </Typography>
                <Typography variant="subtitle1">
                    {data.description.slice(0,100)+"..."}
                </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", justifyContent:"end" }}>
                <Link href={isEvent? `/eventos/${data.id}` : `/cursos/${data.id}`} >
                    <Button variant="primary"  sx={{ marginRight:0.5}}>{`Ver ${isEvent?"evento":"curso"}`}</Button>
                </Link>
            </CardActions>
        </Card>
    )
}