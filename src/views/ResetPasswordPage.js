import Hero from '../components/Hero'
import ResetPassword from '../components/ResetPassword'
import s from '../style/ContainerMain.module.scss'


const ResetPasswordPage = () => {
    return (
        <div className={s.container}>
            <ResetPassword/>
            <Hero />
        </div>
    )
};
export default ResetPasswordPage;