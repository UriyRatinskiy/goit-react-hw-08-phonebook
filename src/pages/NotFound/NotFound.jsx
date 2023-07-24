import {
    NotFoundSection,
    NotFoundImg,
    NotFoundText,
    NotFoundLink,
} from './NotFound.styled';
import image from './go-away-from-this-page.gif';

function NotFoundPage() {
    return (
        <main style={{height: "100%"}}>
            <NotFoundSection>
                <NotFoundImg src={image} alt="Wrong page in URL adress" />
                <NotFoundText>Opsss! This page doesn't exist.</NotFoundText>
                <NotFoundLink to="/">Open home page</NotFoundLink>
            </NotFoundSection>
        </main>
    )
}

export default NotFoundPage;