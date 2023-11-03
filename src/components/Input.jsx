import { useRef } from "react";
import styles from "./styles/Input.module.css";

const Input = ({label = null, name = '', value, onInput = null, setValue = null, required = false, placeholder, multiline = false, right = null}) => {
    const inputRef = useRef(null);
    const onInputEvents = (e) => {
        if (onInput !== null) {
            onInput(e);
        }
        if (setValue !== null) {
            setValue(e.currentTarget.value);
        }
    }
    return (
        <div className={styles.Group}>
            {
                multiline ?
                <textarea ref={inputRef} name={name} id={name} onInput={e => onInputEvents(e)} required={required} placeholder={placeholder}>{value}</textarea>
                :
                <input ref={inputRef} type="text" name={name} id={name} value={value} onInput={e => onInputEvents(e)} required={required} placeholder={placeholder} />
            }
            {
                label !== null &&
                <label htmlFor={name} onClick={() => inputRef.current.focus()}>{label}</label>
            }
            {right}
        </div>
    )
}

export default Input;