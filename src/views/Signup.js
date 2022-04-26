import Hero from '../components/Hero'
import SignUp from '../components/SignUp'
import s from '../style/ContainerMain.module.scss'


const Signup = () => {
    return (
        <div className={s.container}>
            <SignUp/>
            <Hero />
        </div>
    )
};
export default Signup;