import config from '../../../config';
import AccountLayout from '../../../layouts/Ecommerce/AccountLayout'
import Head from './Head';
import FormInput from './FormInput';
import './changepassword.scss'

function ChangePasswordPage () {
    return <AccountLayout routeKey={config.routes.web.password}>
        <div className='changepassword-container'>
            <Head />
            <FormInput />
        </div>
    </AccountLayout>
}

export default ChangePasswordPage;