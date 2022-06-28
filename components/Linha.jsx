import styles from '../styles/Linha.module.css'
import Subdivisao from './Subdivisao'

export default function Linha(props) {
    return ( 
        <div className={styles.linha}>
            <subdivisao preta={props.preta} />
            <subdivisao preta={!props.preta} />
            <subdivisao preta={props.preta} />
            <subdivisao preta={!props.preta} />
            <subdivisao preta={props.preta} />
            <subdivisao preta={!props.preta} />
            <subdivisao preta={props.preta} />
            <subdivisao preta={!props.preta} />
        </div>
    )
}