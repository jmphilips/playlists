import { Field } from 'formik'
import styled from 'styled-components'

const FormField = ({className, text, placeholder, name}) => (
    <Field
        className={className}
        text={text}
        placeholder={placeholder}
        name={name}
    />
)

const StyledField = styled(FormField)`
    border: 1px solid #534b52;
    height: 2rem;
    font-weight: 300;
    background-color: F1F0EA;
    width: 20rem;
    marign: 1rem;
    display: inline-block;
`

export default StyledField