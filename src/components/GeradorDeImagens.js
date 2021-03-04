import { useState } from "react"
import styles from '../styles/components/GeradorDeImagens.module.css'
export default function GeradorDeImagens(){
    let [imagemAleatoria, setimagemAleatoria ]= useState('https://source.unsplash.com/random')
    function gerarimagemAleatorio(){
        fetch("https://source.unsplash.com/random")
        .then(Image => setimagemAleatoria(Image.url))   
        
}

    return(    
        <div className={styles.geradorContainer}>
            <main>
            <img src={imagemAleatoria}/>
            </main>
            <footer> 
            <button onClick={gerarimagemAleatorio}>
                Gerar imagens
            </button>
            </footer>
        </div>
    )  
}