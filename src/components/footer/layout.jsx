import Skeleton from "react-loading-skeleton"
import { Link as RouterLink } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../img/highshoes-logo.png"
import { ArrowRight } from "@material-ui/icons"

import { Button } from "../button"
import { Input } from "../input"

const Wrapper = styled.footer`
    width: 100%;

    background: #1A1A1A;
`

const Container = styled.section`
    max-width: 991px;
    width: 100%;
    margin: auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    padding: 40px;

    background: #1A1A1A;
`

const Column = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
`

const Title = styled.h3`
    font-size: 14px;
    font-weight: 700;
    color: #1DA6F2;
`

const Link = styled(RouterLink)`
    font-size: 14px;
    color: #fff;
`


const dummySections = Array
    .from({ length: 3 })
    .map((_, index) => ({
        title: `section-${index}`,
        links: Array
            .from({ length: 4 })
            .map(() => ({ name: "", href: "" }))
    }))

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Layout = ({ sections = dummySections, loading = true }) => {
    return (
        <Wrapper>
            <Container>
                {sections.map(({ title, links }, index) => loading ? (
                    <Column key={title}>
                        <RouterLink to="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Skeleton width={100} />
                        </RouterLink>

                        <Skeleton width={randomInteger(80, 100)} />

                        {links.map((_, index) => (
                            <Skeleton key={index} width={randomInteger(60, 120)} />
                        ))}
                    </Column>
                ) : (
                    <Column key={title}>
                        {index === 0 && (
                            <RouterLink to="/" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img
                                    style={{ width: "115px", height: "21px" }}
                                    src={Logo}
                                    alt="" 
                                />
                            </RouterLink>
                        )}

                        <Title>{title}</Title>

                        {links.map(({ name, href }) => (
                            <Link key={href} to={href}>{name}</Link>
                        ))}
                    </Column>
                ))}

                <Column>
                    <Title>Receba Promoções</Title>

                    <SpecialInput handleSubmit={() => {}} />

                    <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <a style={{ width: "32px", height: "32px" }} href="www.google.com">
                            <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.5 12C14.2909 12 12.5 13.7909 12.5 16C12.5 18.2091 14.2909 20 16.5 20C18.7091 20 20.5 18.2091 20.5 16C20.5 13.7909 18.7091 12 16.5 12ZM10.5 16C10.5 12.6863 13.1863 10 16.5 10C19.8137 10 22.5 12.6863 22.5 16C22.5 19.3137 19.8137 22 16.5 22C13.1863 22 10.5 19.3137 10.5 16Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11 5.5C8.23858 5.5 6 7.73858 6 10.5V21.5C6 24.2614 8.23858 26.5 11 26.5H22C24.7614 26.5 27 24.2614 27 21.5V10.5C27 7.73858 24.7614 5.5 22 5.5H11ZM4 10.5C4 6.63401 7.13401 3.5 11 3.5H22C25.866 3.5 29 6.63401 29 10.5V21.5C29 25.366 25.866 28.5 22 28.5H11C7.13401 28.5 4 25.366 4 21.5V10.5Z" fill="white"/>
                                <path d="M23 11C23.8284 11 24.5 10.3284 24.5 9.5C24.5 8.67157 23.8284 8 23 8C22.1716 8 21.5 8.67157 21.5 9.5C21.5 10.3284 22.1716 11 23 11Z" fill="white"/>
                            </svg>
                        </a>
                        
                        <a style={{ width: "32px", height: "32px" }} href="www.google.com">
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.5 3.5C15.5 2.94772 15.9477 2.5 16.5 2.5H21.5C22.0523 2.5 22.5 2.94772 22.5 3.5C22.5 5.0913 23.1321 6.61742 24.2574 7.74264C25.3826 8.86786 26.9087 9.5 28.5 9.5C29.0523 9.5 29.5 9.94772 29.5 10.5V15.5C29.5 16.052 29.0527 16.4996 28.5007 16.5C26.4028 16.5015 24.3453 15.9949 22.5 15.0354V19.4995C22.5 19.4997 22.5 19.4994 22.5 19.4995C22.5008 21.3068 21.986 23.0772 21.0162 24.6022C20.0463 26.1273 18.6614 27.3441 17.0242 28.1097C15.3869 28.8753 13.5652 29.158 11.773 28.9245C9.9807 28.6911 8.29221 27.9512 6.90571 26.7917C5.51921 25.6323 4.49224 24.1014 3.94534 22.3787C3.39844 20.656 3.35432 18.813 3.81815 17.0662C4.28197 15.3193 5.2345 13.741 6.56392 12.5165C7.89334 11.292 9.54449 10.4721 11.3235 10.1532C11.615 10.1009 11.9146 10.1805 12.1417 10.3705C12.3688 10.5605 12.5 10.8414 12.5 11.1375V16.3375C12.5 16.7238 12.2776 17.0755 11.9286 17.241C11.5244 17.4327 11.179 17.7294 10.9285 18.1001C10.678 18.4708 10.5316 18.902 10.5046 19.3485C10.4775 19.7951 10.5708 20.2408 10.7747 20.639C10.9785 21.0372 11.2855 21.3735 11.6636 21.6126C12.0417 21.8518 12.4771 21.9851 12.9243 21.9986C13.3714 22.0122 13.8141 21.9055 14.206 21.6897C14.5979 21.4739 14.9247 21.1568 15.1523 20.7717C15.3799 20.3865 15.5 19.9474 15.5 19.5C15.5 19.5 15.5 19.5 15.5 19.5V3.5ZM17.5 4.5V19.5C17.4999 20.3053 17.2838 21.0959 16.8741 21.7892C16.4644 22.4825 15.8762 23.0531 15.1707 23.4416C14.4653 23.8301 13.6686 24.0221 12.8637 23.9977C12.0588 23.9733 11.2751 23.7334 10.5945 23.3029C9.91394 22.8724 9.36134 22.2672 8.99437 21.5504C8.62741 20.8335 8.45953 20.0314 8.50824 19.2276C8.55696 18.4237 8.82049 17.6477 9.27134 16.9804C9.59898 16.4955 10.0168 16.0809 10.5 15.7581V12.433C9.54726 12.7699 8.66832 13.2973 7.91889 13.9876C6.86934 14.9543 6.11735 16.2003 5.75117 17.5794C5.38499 18.9585 5.41982 20.4135 5.85159 21.7735C6.28335 23.1335 7.09412 24.3421 8.18872 25.2575C9.28333 26.1729 10.6163 26.757 12.0313 26.9413C13.4462 27.1256 14.8844 26.9024 16.177 26.298C17.4695 25.6936 18.5628 24.7329 19.3286 23.5289C20.0943 22.3249 20.5007 20.9274 20.5 19.5005V13.25C20.5 12.875 20.7098 12.5315 21.0435 12.3603C21.3772 12.1891 21.7786 12.219 22.0832 12.4377C23.6813 13.5851 25.5528 14.2788 27.5 14.4552V11.4373C25.747 11.2165 24.1058 10.4195 22.8431 9.15685C21.5805 7.89423 20.7835 6.253 20.5627 4.5H17.5Z" fill="white"/>
                            </svg>
                        </a>

                        <a style={{ width: "32px", height: "32px" }} href="www.google.com">
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M21.5488 6.99994C19.358 6.97006 17.5 8.80603 17.5 11V13C17.5 13.294 17.3706 13.573 17.1464 13.763C16.9221 13.9531 16.6255 14.0347 16.3356 13.9864C13.1305 13.4522 10.2401 11.863 8.18345 10.4491C7.42264 9.92601 6.76668 9.4205 6.24052 8.9896C5.88165 13.2102 7.15083 16.1261 8.55504 18.0318C9.36252 19.1277 10.2275 19.9057 10.8868 20.4073C11.2158 20.6577 11.4916 20.8377 11.6803 20.9526C11.7746 21.01 11.8469 21.0511 11.8928 21.0764C11.9158 21.089 11.9322 21.0977 11.9414 21.1026L11.9489 21.1065L11.9482 21.1061C12.2042 21.2345 12.393 21.4665 12.4665 21.7434C12.5401 22.0206 12.4911 22.3161 12.332 22.5547C11.2145 24.231 9.57207 25.448 8.26448 26.2325C8.03095 26.3726 7.80569 26.5004 7.59298 26.6158C8.23405 26.8233 9.16992 27 10.5 27H10.5005C14.3103 27.0019 17.9779 25.5528 20.7576 22.9473C23.5372 20.3418 25.2203 16.7755 25.4645 12.9734C25.4801 12.7309 25.5835 12.5023 25.7554 12.3304L28.0858 10H26.0875C25.6898 10 25.33 9.76443 25.1709 9.39996C24.8628 8.69377 24.3572 8.0916 23.7151 7.66584C23.0729 7.24008 22.3214 7.00886 21.5509 6.99996L21.5488 6.99994ZM5.49998 26.5C4.66793 27.0547 4.66843 27.0555 4.66894 27.0562L4.66998 27.0578L4.67215 27.061L4.67681 27.0678L4.68746 27.0831C4.69517 27.0939 4.7041 27.1062 4.71432 27.1197C4.73475 27.1468 4.76031 27.1789 4.7915 27.2153C4.85395 27.2881 4.9387 27.3777 5.04977 27.4777C5.27262 27.6783 5.59717 27.9167 6.05277 28.1445C6.96584 28.601 8.37416 29 10.4995 29M5.14886 25.5637C5.1486 25.5638 5.14835 25.5639 5.1481 25.564C4.86272 25.6713 4.64186 25.9029 4.54826 26.1931C4.45458 26.4835 4.49865 26.8008 4.66793 27.0547L5.49998 26.5M5.14886 25.5637L5.15304 25.5621L5.17927 25.5519C5.20386 25.5422 5.24239 25.5268 5.29341 25.5057C5.39551 25.4635 5.54726 25.3985 5.73717 25.3108C6.11777 25.1352 6.64737 24.8704 7.23548 24.5175C8.17012 23.9568 9.20624 23.2008 10.0355 22.2628C10.2718 22.4295 10.477 22.5615 10.6399 22.6607C10.7605 22.7342 10.8582 22.7898 10.9284 22.8285C10.9636 22.8478 10.9918 22.8629 11.0128 22.8739L11.0385 22.8872L11.0471 22.8916L11.0503 22.8932L11.0516 22.8939M5.49998 7.00003C6.20709 6.29292 6.20693 6.29277 6.2068 6.29263L6.20794 6.29377L6.21595 6.30168L6.2531 6.3379C6.28712 6.37083 6.33948 6.42096 6.4092 6.48609C6.54869 6.6164 6.75738 6.80653 7.0275 7.03914C7.56836 7.50488 8.35206 8.13793 9.31651 8.80099C10.9871 9.94954 13.1501 11.1533 15.5 11.7645V11C15.5 7.69438 18.2664 4.95557 21.5751 5.00011C22.7304 5.01365 23.8572 5.36047 24.8202 5.99891C25.596 6.51323 26.2388 7.19917 26.7011 8.00003H30.5C30.9044 8.00003 31.2691 8.24367 31.4239 8.61735C31.5786 8.99102 31.4931 9.42114 31.2071 9.70714L27.4317 13.4826C27.0699 17.6487 25.1829 21.5404 22.1254 24.4065C18.9749 27.3595 14.8181 29.002 10.5 29M5.49998 7.00003L6.20709 6.29292C6.20693 6.29277 6.20678 6.29261 6.20662 6.29245C5.94362 6.02981 5.55663 5.93468 5.20181 6.04552C4.84679 6.15642 4.58265 6.4552 4.51611 6.82114C3.46385 12.6086 5.0417 16.6353 6.94492 19.2182C7.88744 20.4974 8.89746 21.4068 9.67571 21.999C9.80194 22.095 9.92228 22.1829 10.0355 22.2628" fill="white"/>
                            </svg>
                        </a>

                        <a style={{ width: "32px", height: "32px" }} href="www.google.com">
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5 2H15.5C14.1739 2 12.9021 2.52678 11.9645 3.46447C11.0268 4.40215 10.5 5.67392 10.5 7V10H7.5V14H10.5V22H14.5V14H17.5L18.5 10H14.5V7C14.5 6.73478 14.6054 6.48043 14.7929 6.29289C14.9804 6.10536 15.2348 6 15.5 6H18.5V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </Column>
            </Container>
        </Wrapper>
    )
}

const InputContainer = styled.form`
    width: 200px;

    display: flex;
    position: relative;
    border-radius: 999px;

    overflow: overlay;

    input {
        border-radius: 0px;
        height: 36px;
        padding-right: calc(36px + 12px);
    }

    button {
        width: 36px;
        height: 36px;
        padding: 0px;
        justify-content: center;

        border-radius: 999px;

        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
`

function SpecialInput({ handleSubmit }) {
    return (
        <InputContainer>
            <Input type="text" placeholder="Digite o seu e-mail" />

            <Button onClick={handleSubmit}>
                <ArrowRight width={24} height={24}  />
            </Button>
        </InputContainer>
    )
}
