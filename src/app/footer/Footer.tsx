import instagram from '../../../public/images/footer/insta.svg'
import twitter from '../../../public/images/footer/twitter.svg'
import youTube from '../../../public/images/footer/youtube.svg'
import dribble from '../../../public/images/footer/dribble.svg'

import phone from '../../../public/images/footer/number.svg'
import email from '../../../public/images/footer/email.svg'
// import inputIcon from '../../../public/images/footer/inputIcon.svg'
import address from '../../../public/images/footer/address.svg'

import brand from '../../../public/images/logo/logo.svg'
import FooterMedia from './FooterMedia'
import FooterContent from './FooterContent'
import FooterContact from './FooterContact'

const Footer = () => {
    const data = [instagram, twitter, youTube, dribble]

    const nav = ['home', 'exchange', 'features', 'wallet', 'FAQ', 'contact us']

    const details = [
        { id: 1, image: phone, content: '(+234) 90 2627 4950', navigate: 'tel:+2349026274950' },
        { id: 2, image: email, content: 'sunnevian4life@gmail.com', navigate: 'sunnevian4life@gmail.com' },
        { id: 3, image: address, content: 'ibadan, nigeria' },
    ]

    return (
        <div className=' mt-10 bg-[linear-gradient(45deg,rgba(189,36,223,0.2),rgba(45,106,222,0.2)_120.126%)] bg-blend-multiply'>
            <div className='flex space-x-4 container mx-auto '>

            <FooterMedia Logo={brand} Media={data} />
            <FooterContent Nav={nav} title='useful links' />
            <FooterContact Contact={details} title='contact us' />
            </div>
        </div>
    )
}

export default Footer
