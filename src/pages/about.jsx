import styled from "styled-components"

const Banner = styled.section`
  width: 100%;
  height: 200px;

  display: grid;
  place-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1499346030926-9a72daac6c63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1600&q=100);
  background-position: center;

  color: #000;

  h1 {
    font-size: 35px;
  }
`

const Wrapper = styled.main`
    width: 100%
`

const Container = styled.section`
max-width: 991px;
width: 100%;
margin: 0 auto;

  display: flex;
  padding: 40px;
  gap: 50px;
`


export const Layout = () => {
  return (
    <>
      <Banner>
        <h1>Sobre Nós.</h1>
      </Banner>
      <Wrapper>
        <Container>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed purus facilisis, mattis augue quis, tristique leo. Morbi luctus ligula a diam dictum aliquet. Vivamus ut lorem neque. Pellentesque mi urna, porttitor eu consequat eget, varius eget elit. Vivamus sit amet justo eget est maximus auctor eu eu nibh. Aliquam risus magna, elementum sit amet viverra at, pretium vitae lectus. Donec in scelerisque lacus. Maecenas semper vulputate interdum. Nullam fringilla iaculis metus vel feugiat.

Integer nec egestas magna. Proin tincidunt viverra magna ac pulvinar. Aliquam urna sapien, sagittis quis arcu at, dictum rhoncus arcu. Cras et ultricies nibh. Sed feugiat dui euismod sem fringilla egestas. Donec nisi nunc, dictum nec diam id, pretium porta massa. Vivamus in sapien vel purus tristique aliquam. Vestibulum condimentum, libero ac porttitor egestas, dolor lectus eleifend velit, id egestas est neque id mauris. Nullam augue purus, egestas eu felis id, sodales finibus lectus. Integer euismod vehicula sodales. Vivamus in mi a nisi ultricies ornare. Maecenas a nulla at libero accumsan aliquet. Aenean pellentesque leo et enim pretium sagittis.</p>
        </Container>
      </Wrapper>
    </>
  )
}

export default Layout