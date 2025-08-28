import iconsSprite from '../../assets/images/svg/icon-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width ||"25"} height={props.height || "23"} viewBox={props.viewBox || "0 0 25 23"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>

);
};

