import style from './HoverEffectModule.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import image from './images/bg.png';
import image2 from './images/1.png'
import reactLogo from './images/react-icon.png';

const HoverEffectModule = () => {
    return (
        <div className={style.cardContainer}>
            <div className={style.bgImgHover}>
                <img src={image.src} />
            </div>

            <div className={style.bgImgHover}>
                <img src={image2.src} />
            </div>
            <div className={style.card}>
                <div className={style.cardHeader}>
                    <div className={style.logo}>
                        <img src={reactLogo.src} />
                    </div>
                    <h4>React.JS</h4>
                    <p>JavaScript Library</p>
                </div>
                <div className={style.cardBody}>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <p>Lorem Ipsum has been the industry standard dummy text ever.</p>
                </div>
                <div className={style.cardFooter}>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} /></li>
                        <li><FontAwesomeIcon icon={faTwitter} /></li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default HoverEffectModule;