import Hero from '../components/Hero'
import LogIn from '../components/LogIn'
import s from '../style/ContainerMain.module.scss'

const Login = () => {
    return (
        <div className={s.container}>
            <LogIn/>
            <Hero />
        </div>
    )
};
export default Login;