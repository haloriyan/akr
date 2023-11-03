import styles from "./styles/Button.module.css";

const Button = ({children, accent = 'primary', onClick, color = '', height = 45, circle = false, justifyContent = 'center'}) => {
    return (
        <div onClick={onClick} className={`${styles.Button} ${accent === 'primary' ? styles.ButtonPrimary : ''} ${accent === 'secondary' ? styles.ButtonSecondary : ''} ${accent === 'tertiary' ? styles.ButtonTertiary : ''} ${styles[color]}`} style={{
            height: height,
            aspectRatio: circle ? 1 : 'auto',
            padding: circle ? '0px' : '0px 25px',
            borderRadius: circle ? 999 : 8,
            justifyContent: justifyContent
        }}>
            {children}
        </div>
    )
}

export default Button;