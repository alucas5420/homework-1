import React from "react";
import {Card, Image, Grid, Button} from 'semantic-ui-react'
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import Line from "@/components/Line";


export default function Home() {
  return (
    <>
<Line/>
<Hero heroImage="/eevee.png" height="400px" header="Pokemon Navigation" />
    <Line/>
    <br></br> 
    <h1 className={styles.iupuiFont}>Welcome to the Pokemon navigation site!</h1>
    <p className={styles.otherFont}>This is the home page for the navigation site.</p>
    <p className={styles.otherFont}>Go to the navigation above and type in a Pokemon name.</p>
    <br></br>
    <Line/>
    </>
  )
}