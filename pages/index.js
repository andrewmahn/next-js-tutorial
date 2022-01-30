import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import { Container, Grid } from '@mui/material'

export default function Home() {
  return (
      <body>
        <Grid container padding={2}>
            <Grid item xs={6}>
              <img src="/logo.png" width="100vmin" height="100vmin"/>
            </Grid>
            <Grid item xs={6}>
              <h3>Contact</h3>
            </Grid>
            <Grid item xs={12}>
              <h2>Shop Smart.</h2>
              <h1>1kart.</h1>
            </Grid>
            <Grid item xs={12}>
              <h4>Coming soon.</h4>
            </Grid>
        </Grid>
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
          
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: 'Poppins', sans-serif;
            background: rgb(0,0,0);
            background-position: center;
            background-size: cover;
            background-repeat: repeat;
          }
          
          a {
            color: inherit;
            text-decoration: none;
          }
          
          * {
            box-sizing: border-box;
          }
          
          h1 {
            font-size: 15vmin;
            align-content: center;
            line-height: 15vmin;
            height: 15vmin;
            color: rgb(172,214,236);
          }

          h2 {
            font-size: 12vmin;
            align-content: center;
            line-height 12vmin;
            height: 12vmin;
            color: rgb(172,214,236);
          }
          
          h3 {
            font-size: 3vmin;
            color: rgb(172,214,236);
            text-align: right;
            vertical-align: center;
          }
          
          h4 {
            font-size: 3vmin;
            color: rgb(172,214,236);
            align-content: center;
          }
        `}</style>
      </body>
  )
}
